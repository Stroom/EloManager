package ee.stroom.security.controller;

import ee.stroom.security.model.SiteUser;
import ee.stroom.security.model.dto.LoginRequestDTO;
import ee.stroom.security.model.dto.LoginResponseDTO;
import ee.stroom.security.model.dto.RegistrationDTO;
import ee.stroom.security.model.dto.SiteUserRolesDTO;
import ee.stroom.security.service.AuthenticationService;
import ee.stroom.security.service.exception.RegistrationFailedException;
import org.apache.log4j.Logger;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mobile.device.Device;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@RestController
@CrossOrigin
@RequestMapping("/auth")
public class AuthenticationRestController {
	
	private final Logger log = Logger.getLogger(AuthenticationRestController.class);
	
	private final AuthenticationService authenticationService;
	
	public AuthenticationRestController(AuthenticationService authenticationService) {
		this.authenticationService = authenticationService;
	}
	
	@PostMapping("/register")
	public ResponseEntity<String> register(@RequestBody RegistrationDTO dto) {
		HttpHeaders headers = new HttpHeaders();
		try {
			SiteUser user = authenticationService.register(dto);
			log.info("New user created: " + user.getUsername());
			return new ResponseEntity<String>("Success", headers, HttpStatus.OK);
		}
		catch (RegistrationFailedException e) {
			log.warn("User creation failed: " + e.getMessage());
			return new ResponseEntity<String>(e.getMessage(), headers, HttpStatus.BAD_REQUEST);
		}
	}
	
	@PostMapping("/login")
	public ResponseEntity<LoginResponseDTO> logIn(@RequestBody LoginRequestDTO authenticationRequest, Device device) {
		HttpHeaders headers = new HttpHeaders();
		try {
			
			LoginResponseDTO response = authenticationService.logIn(authenticationRequest, device);
			
			return new ResponseEntity<LoginResponseDTO>(response, headers, HttpStatus.OK);
		}
		catch (AuthenticationException e) {
			return new ResponseEntity<>(headers, HttpStatus.BAD_REQUEST);
		}
	}
	
	@GetMapping("/roles")
	public ResponseEntity<SiteUserRolesDTO> getRoles(HttpServletRequest request, HttpServletResponse response, Device device) {
		HttpHeaders headers = new HttpHeaders();
		
		SiteUserRolesDTO roles = authenticationService.getRoles(request);
		
		if(roles != null) {
			return new ResponseEntity<SiteUserRolesDTO>(roles, headers, HttpStatus.OK);
		}
		else {
			return new ResponseEntity<SiteUserRolesDTO>(headers, HttpStatus.BAD_REQUEST);
		}
	}
	
	@PostMapping("/logout")
	public ResponseEntity<Void> logOut(@RequestBody String body, HttpServletRequest request, HttpServletResponse response, Device device) {
		HttpHeaders headers = new HttpHeaders();
		
		authenticationService.logOut(request, response);
		
		return new ResponseEntity<Void>(headers, HttpStatus.OK);
	}
	
	//TODO use this in angular2?
	@GetMapping("/refresh")
	public ResponseEntity<LoginResponseDTO> refreshAndGetAuthenticationToken(HttpServletRequest request) {
		HttpHeaders headers = new HttpHeaders();
		
		LoginResponseDTO response = authenticationService.refreshAndGetAuthenticationToken(request);
		
		if(response != null) {
			return new ResponseEntity<LoginResponseDTO>(response, headers, HttpStatus.OK);
		}
		else {
			return new ResponseEntity<LoginResponseDTO>(headers, HttpStatus.BAD_REQUEST);
		}
	}
	
}
