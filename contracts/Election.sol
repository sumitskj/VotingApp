pragma solidity ^0.4.24;

contract Election {
    // Candidate strct/model
    struct Candidate {
        uint id;
        string name;
        uint voteCount;
    }
    //fetch the data
    mapping(uint => Candidate) public candidates;   
    // candidates count
    uint public candidateCount;

    //Constructor
    function Election() public {
        addCandidate("Candidate 1");
        addCandidate("Candidate 2");
    }

    //Add Candidates
    function addCandidate(string _name) private {
        candidateCount++;
        candidates[candidateCount]= Candidate(candidateCount, _name, 0);
    }


}