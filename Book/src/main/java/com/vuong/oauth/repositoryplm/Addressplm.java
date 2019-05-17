package com.vuong.oauth.repositoryplm;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vuong.oauth.entity.Address;
import com.vuong.oauth.repository.AddressRepository;

import java.util.List;

@Service
public class Addressplm {
	@Autowired
  private AddressRepository address;
	
  public List<Address> getAll(){
	  return address.findAll();
	  
  }
}
