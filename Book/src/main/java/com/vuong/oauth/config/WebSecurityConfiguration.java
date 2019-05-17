package com.vuong.oauth.config;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
 import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class WebSecurityConfiguration extends WebSecurityConfigurerAdapter {
//	@Autowired
//  private CustomDetailsService customDetailsService;
   @Bean
   public PasswordEncoder encoder() {
      return new BCryptPasswordEncoder();
   }
   
   
   @Override
   @Autowired
   protected void configure(AuthenticationManagerBuilder auth) throws Exception {
	   
	 //  auth.userDetailsService(customDetailsService).passwordEncoder(encoder());
      auth.inMemoryAuthentication().passwordEncoder(NoOpPasswordEncoder.getInstance()).withUser("reader").password("reader").roles("READER").and()
      .withUser("writer").password("writer").roles("READER", "WRITER");
   }
   @Override
   protected void configure(HttpSecurity http) throws Exception {
	   http	
		.csrf().disable()
		.formLogin().permitAll()
		.and()
		.anonymous().disable()
		.httpBasic()
		.and()
		.authorizeRequests().anyRequest().authenticated()
		;
//      http.authorizeRequests().anyRequest().authenticated().and().sessionManagement()
//         .sessionCreationPolicy(SessionCreationPolicy.NEVER);
   }
   @Override
   public void configure(WebSecurity web) throws Exception {
      web.ignoring();
   }
   @Override
   @Bean
   public AuthenticationManager authenticationManagerBean() throws Exception {
      return super.authenticationManagerBean();
   }
} 