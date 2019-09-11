function DevanagariToBrahmi(){
  // alert("DevanagariToBrahmi");
  var a,b;
  a = document.getElementById("Devanagari").value;
  b = "";
  var i;
  for (i = 0; i < a.length; i++) {
    var n = a.codePointAt(i);
    switch(n){
      case 0x905: //A
        b += "&#x11005";
        break;
      case 0x906: //AA
        b += "&#x11006";
        break;
      case 0x907: //I
        b += "&#x11007";
        break;
      case 0x908: //II
        b += "&#x11008";
        break;
      case 0x909: //U
        b += "&#x11009";
        break;
      case 0x90A: // UU
        b += "&#x1100A";
        break;
      case 0x90B: //Vocalic R
        b += "&#x1100B";
        break;
      case 0x90C: //Vocalic L
        b += "&#x1100D";
        break;
      case 0x90F: // E
        b += "&#x1100F";
        break;
      case 0x910: // AI
        b += "&#x11010";
        break;
      case 0x913: // O
        b += "&#x11011";
        break;
      case 0x914: // AU
        b += "&#x11012";
        break;
      case 0x915: // KA
        b += "&#x11013";
        break;
      case 0x916: // KHA
        b += "&#x11014";
        break;
      case 0x917: // GA
        b += "&#x11015";
        break;
      case 0x918: // GHA
        b += "&#x11016";
        break;
      case 0x919: // NGA
        b += "&#x11017";
        break;
      case 0x91A: // CA
        b += "&#x11018";
        break;
      case 0x91B: // CHA
        b += "&#x11019";
        break;
      case 0x91C: // JA
        b += "&#x1101A";
        break;
      case 0x91D: // JHA
        b += "&#x1101B";
        break;
      case 0x91E: // NYA
        b += "&#x1101C";
        break;
      case 0x91F: // TTA
        b += "&#x1101D";
        break;
      case 0x920: // TTHA
        b += "&#x1101E";
        break;
      case 0x921: // DDA
        b += "&#x1101F";
        break;
      case 0x922: // DDHA
        b += "&#x11020";
        break;
      case 0x923: // NNA
        b += "&#x11021";
        break;
      case 0x924: // TA
        b += "&#x11022";
        break;
      case 0x925: // THA
        b += "&#x11023";
        break;
      case 0x926: // DA
        b += "&#x11024";
        break;
      case 0x927: // DHA
        b += "&#x11025";
        break;
      case 0x928: // NA
        b += "&#x11026";
        break;
      case 0x92A: //PA
        b += "&#x11027";
        break;
      case 0x92B: //PHA
        b += "&#x11028";
        break;
      case 0x92C: // BA
        b += "&#x11029";
        break;
      case 0x92D: // BHA
        b += "&#x1102A";
        break;
      case 0x92E: // MA
        b += "&#x1102B";
        break;
      case 0x92F: // YA
        b += "&#x1102C";
        break;
      case 0x930: // RA
        b += "&#x1102D";
        break;
      case 0x932: // LA
        b += "&#x1102E";
        break;
      case 0x933: // LLA
        b += "&#x11034";
        break;
      case 0x935: // VA
        b += "&#x1102F";
        break;
      case 0x936: // SHA
        b += "&#x11030";
        break;
      case 0x937: // SSA
        b += "&#x11031";
        break;
      case 0x938: // SA
        b += "&#x11032";
        break;
      case 0x939: // HA
        b += "&#x11033";
        break;
      case 0x93E: // AA
        b += "&#x11038";
        break;
      case 0x93F: // I
        b += "&#x1103A";
        break;
      case 0x940: // II
        b += "&#x1103B";
        break;
      case 0x941: // U
        b += "&#x1103C";
        break;
      case 0x942: //UU
        b += "&#x1103D";
        break;
      case 0x943: //R
        b += "&#x1103E";
        break;
      case 0x944: //RR
        b += "&#x1103F";
        break;
      case 0x962: //L
        b += "&#x11040";
        break;
      case 0x963: //LL
        b += "&#x11041";
        break;
      case 0x947: //E
        b += "&#x11042";
        break;
      case 0x948: //AI
        b += "&#x11043";
        break;
      case 0x94B: //O
        b += "&#x11044";
        break;
      case 0x94C: //AU
        b += "&#x11045";
        break;
      case 0x94D: //virama
        b += "&#x11046";
        break;
      case 0x964: // danda
        b += "&#x11047";
        break;
      case 0x965: // double danda
        b += "&#x11048";
        break;
      case 0x966: //0
        b += "&#x11066";
        break;
      case 0x967: //1
        b += "&#x11067";
        break;
      case 0x968: //2
        b += "&#x11068";
        break;
      case 0x969: //3
        b += "&#x11069";
        break;
      case 0x96A: //4
        b += "&#x1106A";
        break;
      case 0x96B: //5
        b += "&#x1106B";
        break;
      case 0x96C: //6
        b += "&#x1106C";
        break;
      case 0x96D: //7
        b += "&#x1106D";
        break;
      case 0x96E: //8
        b += "&#x1106E";
        break;
      case 0x96F: //9
        b += "&#x1106F";
        break;
      default:
        b += "&#"+n;
        break;
    }
  }
  document.getElementById("Output1").innerHTML= b;
}
function BrahmiToDevanagari(){
  // alert("BrahmiToDevanagari");
  var a,b;
  a = document.getElementById("Brahmi").value;
  b = "";
  var i;
  for (i=0; i<a.length; i++){
    var n = a.codePointAt(i);
    switch(n){
      case 0x11005:
        b += "&#x00905";
        i++;
        break;
      case 0x11006: //AA
        b += "&#x906";
        i++;
        break;
      case 0x11007: //I
        b += "&#x907";
        i++;
        break;
      case 0x11008: //II
        b += "&#x908";
        i++;
        break;
      case 0x11009: //U
        b += "&#x909";
        i++;
        break;
      case 0x1100A: // UU
        b += "&#x90A";
        i++;
        break;
      case 0x1100B: //Vocalic R
        b += "&#x90B";
        i++;
        break;
      case 0x1100D: //Vocalic L
        b += "&#x90C";
        i++;
        break;
      case 0x1100F: // E
        b += "&#x90F";
        i++;
        break;
      case 0x11010: // AI
        b += "&#x910";
        i++;
        break;
      case 0x11011: // O
        b += "&#x913";
        i++;
        break;
      case 0x11012: // AU
        b += "&#x914";
        i++;
        break;
      case 0x11013: // KA
        b += "&#x915";
        i++;
        break;
      case 0x11014: // KHA
        b += "&#x916";
        i++;
        break;
      case 0x11015: // GA
        b += "&#x917";
        i++;
        break;
      case 0x11016: // GHA
        b += "&#x918";
        i++;
        break;
      case 0x11017: // NGA
        b += "&#x919";
        i++;
        break;
      case 0x11018: // CA
        b += "&#x91A";
        i++;
        break;
      case 0x11019: // CHA
        b += "&#x91B";
        i++;
        break;
      case 0x1101A: // JA
        b += "&#x91C";
        i++;
        break;
      case 0x1101B: // JHA
        b += "&#x91D";
        i++;
        break;
      case 0x1101C: // NYA
        b += "&#x91E";
        i++;
        break;
      case 0x1101D: // TTA
        b += "&#x91F";
        i++;
        break;
      case 0x1101E: // TTHA
        b += "&#x920";
        i++;
        break;
      case 0x1101F: // DDA
        b += "&#x921";
        i++;
        break;
      case 0x11020: // DDHA
        b += "&#x922";
        i++;
        break;
      case 0x11021: // NNA
        b += "&#x923";
        i++;
        break;
      case 0x11022: // TA
        b += "&#x924";
        i++;
        break;
      case 0x11023: // THA
        b += "&#x925";
        i++;
        break;
      case 0x11024: // DA
        b += "&#x926";
        i++;
        break;
      case 0x11025: // DHA
        b += "&#x927";
        i++;
        break;
      case 0x11026: // NA
        b += "&#x928";
        i++;
        break;
      case 0x11027: //PA
        b += "&#x92A";
        i++;
        break;
      case 0x11028: //PHA
        b += "&#x92B";
        i++;
        break;
      case 0x11029: // BA
        b += "&#x92C";
        i++;
        break;
      case 0x1102A: // BHA
        b += "&#x92D";
        i++;
        break;
      case 0x1102B: // MA
        b += "&#x92E";
        i++;
        break;
      case 0x1102C: // YA
        b += "&#x92F";
        i++;
        break;
      case 0x1102D: // RA
        b += "&#x930";
        i++;
        break;
      case 0x1102E: // LA
        b += "&#x932";
        i++;
        break;
      case 0x11034: // LLA
        b += "&#x933";
        i++;
        break;
      case 0x1102F: // VA
        b += "&#x935";
        i++;
        break;
      case 0x11030: // SHA
        b += "&#x936";
        i++;
        break;
      case 0x11031: // SSA
        b += "&#x937";
        i++;
        break;
      case 0x11032: // SA
        b += "&#x938";
        i++;
        break;
      case 0x11033: // HA
        b += "&#x939";
        i++;
        break;
      case 0x11038: // AA
        b += "&#x93E";
        i++;
        break;
      case 0x1103A: // I
        b += "&#x93F";
        i++;
        break;
      case 0x1103B: // II
        b += "&#x940";
        i++;
        break;
      case 0x1103C: // U
        b += "&#x941";
        i++;
        break;
      case 0x1103D: //UU
        b += "&#x942";
        i++;
        break;
      case 0x1103E: //R
        b += "&#x943";
        i++;
        break;
      case 0x1103F: //RR
        b += "&#x944";
        i++;
        break;
      case 0x11040: //L
        b += "&#x962";
        i++;
        break;
      case 0x11041: //LL
        b += "&#x963";
        i++;
        break;
      case 0x11042: //E
        b += "&#x947";
        i++;
        break;
      case 0x11043: //AI
        b += "&#x948";
        i++;
        break;
      case 0x11044: //O
        b += "&#x94B";
        i++;
        break;
      case 0x11045: //AU
        b += "&#x94C";
        i++;
        break;
      case 0x11046: //virama
        b += "&#x94D";
        i++;
        break;
      case 0x11047: // danda
        b += "&#x964";
        i++;
        break;
      case 0x11048: // double danda
        b += "&#x965";
        i++;
        break;
      case 0x11066: //0
        b += "&#x966";
        i++;
        break;
      case 0x11067: //1
        b += "&#x967";
        i++;
        break;
      case 0x11068: //2
        b += "&#x968";
        i++;
        break;
      case 0x11069: //3
        b += "&#x969";
        i++;
        break;
      case 0x1106A: //4
        b += "&#x96A";
        i++;
        break;
      case 0x1106B: //5
        b += "&#x96B";
        i++;
        break;
      case 0x1106C: //6
        b += "&#x96C";
        i++;
        break;
      case 0x1106D: //7
        b += "&#x96D";
        i++;
        break;
      case 0x1106E: //8
        b += "&#x96E";
        i++;
        break;
      case 0x1106F: //9
        b += "&#x96F";
        i++;
        break;
      default:
        b += "&#"+n;
    }
  }
  document.getElementById("Output2").innerHTML= b;
};
