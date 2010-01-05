var one_syllable_vowel_sequences = /eau|[aeiouy]{1,2}/g;
var two_syllable_vowel_sequences = /eo|ia|ii|io|iu|uo/g;
var vowels = /[aeiouy]/;

counter = {};

counter.count = function(s) {
	if (s.length == 0) return 0;
	if (!s.match(vowels)) return 1;
	s = s.replace(two_syllable_vowel_sequences, "@@");
	s = s.replace(one_syllable_vowel_sequences, "@");
	return s.match(/@/g).length;
};
