function decipherDevanagariFunc(){
  // alert("decipherDevanagari");
  var a,b;
  a = document.getElementById("decipherDevanagari").value;

  //Removing Duplicates
  var str=a;
  var uniql="";
  for (var x=0;x < str.length;x++)
  {
    if(uniql.indexOf(str.charAt(x))==-1)
    {
      uniql += str[x];
    }
  }
  a=uniql;

  b = [];
  var i;
  for (i = 0; i < a.length; i++) {
    var n = a.codePointAt(i);
    switch(n){
      case 0x905: //A अ
        b.push({Symbol:'अ',Description:'Creation',Pronunciation:'A'});
        break;
      case 0x906: //AA आ
        b.push({Symbol:'आ',Description:'Bliss',Pronunciation:'AA'});
        break;
      case 0x907: //I इ
        b.push({Symbol:'इ',Description:'Love and Desire',Pronunciation:'I'});
        break;
      case 0x908: //II ई
        b.push({Symbol:'ई',Description:'Perfection and Balance',Pronunciation:'II'});
        break;
      case 0x909: //U उ
        b.push({Symbol:'उ',Description:'Care and Caution',Pronunciation:'U'});
        break;
      case 0x90A: //UU ऊ
        b.push({Symbol:'ऊ',Description:'Excellence and Greatness',Pronunciation:'UU'});
        break;
      case 0x90B: //Vocalic R ऋ
        b.push({Symbol:'ऋ',Description:'Order and Priority',Pronunciation:'R'});
        break;
      case 0x90C: //Vocalic L ऌ
        b.push({Symbol:'ऌ',Description:'Charm',Pronunciation:'L'});
        break;
      case 0x90F: // E ए
        b.push({Symbol:'ए',Description:'Solidarity and Solitude',Pronunciation:'E'});
        break;
      case 0x910: // AI ऐ
        b.push({Symbol:'ऐ',Description:'Abundance',Pronunciation:'AI'});
        break;
      case 0x913: // O ओ
        b.push({Symbol:'ओ',Description:'Pleasure',Pronunciation:'O'});
        break;
      case 0x914: // AU औ
        b.push({Symbol:'औ',Description:'Healing and Recovery',Pronunciation:'AU'});
        break;
      case 0x915: // KA क
        b.push({Symbol:'क',Description:'Coordination and Management',Pronunciation:'KA'});
        break;
      case 0x916: // KHA ख
        b.push({Symbol:'ख',Description:'Separation',Pronunciation:'KHA'});
        break;
      case 0x917: // GA ग
        b.push({Symbol:'ग',Description:'Clarity',Pronunciation:'GA'});
        break;
      case 0x918: // GHA घ
        b.push({Symbol:'घ',Description:'Resonance and Stability',Pronunciation:'GHA'});
        break;
      case 0x919: // NGA ङ
        b.push({Symbol:'ङ',Description:'Growth and Development',Pronunciation:'NGA'});
        break;
      case 0x91A: // CA च
        b.push({Symbol:'च',Description:' Freshness and Direction',Pronunciation:'CA'});
        break;
      case 0x91B: // CHA छ
        b.push({Symbol:'छ',Description:'The rise of purity from the depths of shadow and thus Enthusiasm',Pronunciation:'CHA'});
        break;
      case 0x91C: // JA ज
        b.push({Symbol:'ज',Description:'Victory and Fortune – Prosperity',Pronunciation:'JA'});
        break;
      case 0x91D: // JHA झ
        b.push({Symbol:'झ',Description:'Influence and Change',Pronunciation:'JHA'});
        break;
      case 0x91E: // NYA ञ
        b.push({Symbol:'ञ',Description:'Wisdom and Learning',Pronunciation:'NYA'});
        break;
      case 0x91F: // TTA ट
        b.push({Symbol:'ट',Description:'Fruition',Pronunciation:'TTA'});
        break;
      case 0x920: // TTHA ठ
        b.push({Symbol:'ठ',Description:'Time',Pronunciation:'TTHA'});
        break;
      case 0x921: // DDA ड
        b.push({Symbol:'ड',Description:'Variety',Pronunciation:'DDA'});
        break;
      case 0x922: // DDHA ढ
        b.push({Symbol:'ढ',Description:'Accumulation',Pronunciation:'DDHA'});
        break;
      case 0x923: // NNA ण
        b.push({Symbol:'ण',Description:'Transformation and Innovation',Pronunciation:'NNA'});
        break;
      case 0x924: // TA त
        b.push({Symbol:'त',Description:'Unity and Oneness',Pronunciation:'TA'});
        break;
      case 0x925: // THA थ
        b.push({Symbol:'थ',Description:'Spreading and Expansion',Pronunciation:'THA'});
        break;
      case 0x926: // DA द
        b.push({Symbol:'द',Description:'Skill and Self-Restraint',Pronunciation:'DA'});
        break;
      case 0x927: // DHA ध
        b.push({Symbol:'ध',Description:'Purity',Pronunciation:'DHA'});
        break;
      case 0x928: // NA न
        b.push({Symbol:'न',Description:'Focus and Infinity',Pronunciation:'NA'});
        break;
      case 0x92A: //PA प
        b.push({Symbol:'प',Description:'Determination and Independence',Pronunciation:'PA'});
        break;
      case 0x92B: //PHA फ
        b.push({Symbol:'फ',Description:'Endurance and Self-Confidence',Pronunciation:'PHA'});
        break;
      case 0x92C: // BA ब
        b.push({Symbol:'ब',Description:'Revelation and Knowledge',Pronunciation:'BA'});
        break;
      case 0x92D: // BHA भ
        b.push({Symbol:'भ',Description:'Force and Life',Pronunciation:'BHA'});
        break;
      case 0x92E: // MA म
        b.push({Symbol:'म',Description:'Enlightenment and Self-Realization',Pronunciation:'MA'});
        break;
      case 0x92F: // YA य
        b.push({Symbol:'य',Description:'Activity and Honour',Pronunciation:'YA'});
        break;
      case 0x930: // RA र
        b.push({Symbol:'र',Description:'Removal and Negation',Pronunciation:'RA'});
        break;
      case 0x932: // LA ल
        b.push({Symbol:'ल',Description:'Beauty',Pronunciation:'LA'});
        break;
      case 0x933: // LLA ळ
        b.push({Symbol:'ळ',Description:'Liberation and Isolation',Pronunciation:'LLA'});
        break;
      case 0x935: // VA व
        b.push({Symbol:'व',Description:'Donation and Charity',Pronunciation:'VA'});
        break;
      case 0x936: // SHA श
        b.push({Symbol:'श',Description:'Transcendence',Pronunciation:'SHA'});
        break;
      case 0x937: // SSA ष
        b.push({Symbol:'ष',Description:'Help and Support',Pronunciation:'SSA'});
        break;
      case 0x938: // SA स
        b.push({Symbol:'स',Description:'Success',Pronunciation:'SA'});
        break;
      case 0x939: // HA ह
        b.push({Symbol:'ह',Description:'Eternity',Pronunciation:'HA'});
        break;
      case 0x93E: // AA
        b.push({Symbol:'ा',Description:'Bliss',Pronunciation:'AA'});
        break;
      case 0x93F: // I
        b.push({Symbol:'ि',Description:'Love and Desire',Pronunciation:'I'});
        break;
      case 0x940: // II
        b.push({Symbol:'ी',Description:'Perfection and Balance',Pronunciation:'II'});
        break;
      case 0x941: // U
        b.push({Symbol:'ु',Description:'Care and Caution',Pronunciation:'U'});
        break;
      case 0x942: //UU
        b.push({Symbol:'ू',Description:'Excellence and Greatness',Pronunciation:'UU'});
        break;
      case 0x943: //R
        b.push({Symbol:'ृ',Description:'Order and Priority',Pronunciation:'R'});
        break;
      case 0x947: //E
        b.push({Symbol:'े',Description:'Solidarity and Solitude',Pronunciation:'E'});
        break;
      case 0x948: //AI
        b.push({Symbol:'ै',Description:'Abundance',Pronunciation:'AI'});
        break;
      case 0x94B: //O
        b.push({Symbol:'ो',Description:'Pleasure',Pronunciation:'O'});
        break;
      case 'क्ष': //Ksha
        b.push({Symbol:'क्ष',Description:'Strength and Power',Pronunciation:'Ksha'});
        break;
      case 0x94C: //AU
        b.push({Symbol:'ौ',Description:'Healing and Recovery',Pronunciation:'AU'});
        break;
      case 0x902: //Anh
        b.push({Symbol:'ं',Description:'Completion and Fulfillment',Pronunciation:'Anh'});
        break;
      case 0x902: //Ah
        b.push({Symbol:'ः',Description:'Oneness of the Advaita Philosophy',Pronunciation:'Ah'});
        break;
      default:
        break;
    }
  }
  var len = b.length, text = "<ul>";
    for (var i = 0; i < len; i++) {
        var myObject = b[i];
        text += "<li>";
        // for (var x in myObject) {
        //     text += ( x + " : " + myObject[x] + " &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp");
        // }
        text += ("The underlying concept of <b>  " + myObject.Symbol + "</b>  (<b>"+myObject.Pronunciation+"</b>)  is "+myObject.Description);
        text += "</li>";
    }
    text += "</ul>";
  document.getElementById("listDeciphered").innerHTML = text;
  console.log(b);
};
