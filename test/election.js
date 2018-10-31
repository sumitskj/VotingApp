var Election = artifacts.require('./Election.sol');

contract("Election", function(accounts) {
    var electionInstance;
  
    it("initializes with two candidates", function() {
      return Election.deployed().then(function(instance) {
        return instance.candidateCount();
      }).then(function(count) {
        assert.equal(count, 2);
      });
    });

    it("inititalises candidates with correct values", function(){
        Election.deployed().then(function(instance){
            electionInstance= instance;
            return electionInstance.candidates(1);
        }).then(function(candidate){
            assert.equal(candidate[0], 1, "Candidate has correct id");
            assert.equal(candidate[1], "Candidate 1", "Candidate has correct name");
            assert.equal(candidate[2], 0, "Candidate has correct initial vote count");
            return instance.candidates(2)
        }).then(function(candidate){
            assert.equal(candidate[0], 1, "Candidate has correst id");
            assert.equal(candidate[1], "Candidate 1", "Candidate has correct name");
            assert.equal(candidate[2], 0, "Candidate has correct initial vote count");
        });
    });

});