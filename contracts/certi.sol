// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

contract certi {
    
 struct certificate
 {
     string courseName;
     string candidateName;
     string grade;
     string date;
 }
 address admin;
  
  constructor() {
    admin = msg.sender;    
  }
  
   modifier onlyAdmin {
       require(msg.sender == admin, "Insufficient privilege");
       _;
   }
 mapping (string => certificate) public certificateDetails;
 
 function newCertificate(string memory _certificateId, string memory _courseName,
     string memory _candidateName, string memory _grade, string memory _date) public onlyAdmin
     {
         certificateDetails[_certificateId] = certificate(_courseName, _candidateName, _grade, _date);
     }
    
  
}