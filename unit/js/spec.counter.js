describe "SyllableCounter"

	it "counts an empty string as 0 syllables"
		counter.count("").should.equal(0);
	end

	it "counts a vowel-less string as 1 syllable"
		counter.count("ssh").should.equal(1);
		counter.count("tsk").should.equal(1);
	end

	describe "counts a vowel singleton as 1 syllable"
		it "a in bat"
			counter.count("bat").should.equal(1)
		end
		it "e in bet"
			counter.count("bet").should.equal(1)
		end
		it "i in bit"
			counter.count("bit").should.equal(1)
		end
		it "o in bot"
			counter.count("bot").should.equal(1)
		end
		it "u in but"
			counter.count("but").should.equal(1)
		end
		it "y in by"
			counter.count("by").should.equal(1)
		end
	end

	describe "counts each vowel singleton in a word as 1 syllable"
		it "2 vowel singletons in bitter"
			counter.count("bitter").should.equal(2)
		end
		it "3 vowel singletons in bitterly"
			counter.count("bitterly").should.equal(3)
		end
	end

	describe "counts these vowel doublets as 2 syllables"
		it "eo in treo"
			counter.count("treo").should.equal(2)
		end
		it "ia in fiat"
			counter.count("fiat").should.equal(2)
		end
		it "ii in skiing"
			counter.count("skiing").should.equal(2)
		end
		it "io in bio"
			counter.count("bio").should.equal(2)
		end
		it "iu in piu"
			counter.count("piu").should.equal(2)
		end
		it "uo in duo"
			counter.count("duo").should.equal(2)
		end
	end 

	describe "counts all other vowel doublets as 1 syllable"
		it "aa in baa"
			counter.count("baa").should.equal(1)
		end
		it "ae in aero"
			counter.count("aero").should.equal(2)
		end
		it "ai in fair"
			counter.count("fair").should.equal(1)
		end
		it "ao in gaol"
			counter.count("gaol").should.equal(1)
		end
		it "au in faun"
			counter.count("faun").should.equal(1)
		end
		it "ay in bay"
			counter.count("bay").should.equal(1)
		end
		it "ea in tea"
			counter.count("tea").should.equal(1)
		end
		it "ee in tee"
			counter.count("tee").should.equal(1)
		end
		it "ei in their"
			counter.count("their").should.equal(1)
		end
		it "eu in feud"
			counter.count("feud").should.equal(1)
		end
		it "ey in they"
			counter.count("they").should.equal(1)
		end
		it "ie in lie"
			counter.count("lie").should.equal(1)
		end
		it "iu in faun"
			counter.count("faun").should.equal(1)
		end
		it "iy in aliya"
			counter.count("aliya").should.equal(3)
		end
		it "oa in boat"
			counter.count("boat").should.equal(1)
		end
		it "oe in toe"
			counter.count("toe").should.equal(1)
		end
		it "oi in foil"
			counter.count("foil").should.equal(1)
		end
		it "oo in look"
			counter.count("look").should.equal(1)
		end
		it "ou in loud"
			counter.count("loud").should.equal(1)
		end
		it "oy in coy"
			counter.count("coy").should.equal(1)
		end
		it "ua in guard"
			counter.count("guard").should.equal(1)
		end
		it "ue in due"
			counter.count("due").should.equal(1)
		end
		it "uu in muumuu"
			counter.count("muumuu").should.equal(2)
		end
		it "uy in guy"
			counter.count("guy").should.equal(1)
		end
		it "ya in yam"
			counter.count("yam").should.equal(1)
		end
		it "ye in yet"
			counter.count("yet").should.equal(1)
		end
		it "yi in yip"
			counter.count("yip").should.equal(1)
		end
		it "yo in yo"
			counter.count("yo").should.equal(1)
		end
		it "yy in myyd"
			counter.count("myyd").should.equal(1)
		end
	end

	describe "counts these vowel triplets as 1 syllable"
		it "eau in beau"
			counter.count("beau").should.equal(1)
		end
	end
end