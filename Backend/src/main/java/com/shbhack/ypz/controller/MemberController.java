package com.shbhack.ypz.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shbhack.ypz.domain.Member;
import com.shbhack.ypz.dto.JoinDTO;
import com.shbhack.ypz.service.MemberService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/member")
public class MemberController {

	private final MemberService memberService;
	
	@PostMapping("/join")
	public ResponseEntity<?> join(@RequestBody JoinDTO dto) {

		String name = null;
		
		try {
			name = memberService.join(dto.getId(), dto.getPassword(), dto.getAccountNo());
		} catch (Exception e) {
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
		}
		
		return new ResponseEntity<String>(name, HttpStatus.OK);
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody String id, @RequestBody String password) {
		
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<?> retrieve(@PathVariable String id, @RequestHeader("Authorization") String AccessToken) {

		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<?> update(@PathVariable String id, @RequestHeader("Authorization") String AccessToken,
			@RequestBody Member member) {

		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@PostMapping("/bank-account-authentication")
	public ResponseEntity<?> authenticateBankAccount(@RequestBody String accountNo) {
		
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@PutMapping("/bank-account-authentication")
	public ResponseEntity<?> authenticateBankAccount(@RequestBody String accountNo, @RequestBody String code) {
		
		return new ResponseEntity<>(HttpStatus.OK);
	}
}
