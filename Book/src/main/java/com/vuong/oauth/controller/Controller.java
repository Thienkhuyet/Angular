package com.vuong.oauth.controller;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.common.OAuth2RefreshToken;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableAuthorizationServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.security.oauth2.provider.token.store.InMemoryTokenStore;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.vuong.oauth.entity.Address;
import com.vuong.oauth.repositoryplm.Addressplm;

import java.util.List;
@EnableAuthorizationServer
@EnableResourceServer
@RestController
public class Controller {
	@Autowired
	private Addressplm test;
	@Autowired
    protected InMemoryTokenStore tokenStore;
	
	@RequestMapping("/userinfo")
	public String revokeToken(Principal principal) {
		return principal.getName();
	}

	@RequestMapping(method = RequestMethod.POST, value = "/revoke")
	public String revokeToken(@RequestParam("refresh_token") String refreshToken) {
		OAuth2RefreshToken oauthRefreshToken = tokenStore.readRefreshToken(refreshToken);
		if (oauthRefreshToken != null) {
			tokenStore.removeAccessTokenUsingRefreshToken(oauthRefreshToken);
			tokenStore.removeRefreshToken(oauthRefreshToken);
			return "OK, refresh token was removed";
		} else {
			return "OK, refresh token does not exist";
		}
	}
 @GetMapping("/vuong")
 public List<Address> getHello() {
	 return test.getAll();
 }
}
