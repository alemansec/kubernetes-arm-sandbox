// Init vars
var kubess,
  engss,
  calendlyTeamInput,
  country,
  region,
  isInAmericas,
  isNorthWesternRegion;

// All country names
var allCountriesName = { "BD": "Bangladesh", "BE": "Belgium", "BF": "Burkina Faso", "BG": "Bulgaria", "BA": "Bosnia and Herzegovina", "BB": "Barbados", "WF": "Wallis and Futuna", "BL": "Saint Barthelemy", "BM": "Bermuda", "BN": "Brunei", "BO": "Bolivia", "BH": "Bahrain", "BI": "Burundi", "BJ": "Benin", "BT": "Bhutan", "JM": "Jamaica", "BV": "Bouvet Island", "BW": "Botswana", "WS": "Samoa", "BQ": "Bonaire, Saint Eustatius and Saba ", "BR": "Brazil", "BS": "Bahamas", "JE": "Jersey", "BY": "Belarus", "BZ": "Belize", "RU": "Russia", "RW": "Rwanda", "RS": "Serbia", "TL": "East Timor", "RE": "Reunion", "TM": "Turkmenistan", "TJ": "Tajikistan", "RO": "Romania", "TK": "Tokelau", "GW": "Guinea-Bissau", "GU": "Guam", "GT": "Guatemala", "GS": "South Georgia and the South Sandwich Islands", "GR": "Greece", "GQ": "Equatorial Guinea", "GP": "Guadeloupe", "JP": "Japan", "GY": "Guyana", "GG": "Guernsey", "GF": "French Guiana", "GE": "Georgia", "GD": "Grenada", "GB": "United Kingdom", "GA": "Gabon", "SV": "El Salvador", "GN": "Guinea", "GM": "Gambia", "GL": "Greenland", "GI": "Gibraltar", "GH": "Ghana", "OM": "Oman", "TN": "Tunisia", "JO": "Jordan", "HR": "Croatia", "HT": "Haiti", "HU": "Hungary", "HK": "Hong Kong", "HN": "Honduras", "HM": "Heard Island and McDonald Islands", "VE": "Venezuela", "PR": "Puerto Rico", "PS": "Palestinian Territory", "PW": "Palau", "PT": "Portugal", "SJ": "Svalbard and Jan Mayen", "PY": "Paraguay", "IQ": "Iraq", "PA": "Panama", "PF": "French Polynesia", "PG": "Papua New Guinea", "PE": "Peru", "PK": "Pakistan", "PH": "Philippines", "PN": "Pitcairn", "PL": "Poland", "PM": "Saint Pierre and Miquelon", "ZM": "Zambia", "EH": "Western Sahara", "EE": "Estonia", "EG": "Egypt", "ZA": "South Africa", "EC": "Ecuador", "IT": "Italy", "VN": "Vietnam", "SB": "Solomon Islands", "ET": "Ethiopia", "SO": "Somalia", "ZW": "Zimbabwe", "SA": "Saudi Arabia", "ES": "Spain", "ER": "Eritrea", "ME": "Montenegro", "MD": "Moldova", "MG": "Madagascar", "MF": "Saint Martin", "MA": "Morocco", "MC": "Monaco", "UZ": "Uzbekistan", "MM": "Myanmar", "ML": "Mali", "MO": "Macao", "MN": "Mongolia", "MH": "Marshall Islands", "MK": "Macedonia", "MU": "Mauritius", "MT": "Malta", "MW": "Malawi", "MV": "Maldives", "MQ": "Martinique", "MP": "Northern Mariana Islands", "MS": "Montserrat", "MR": "Mauritania", "IM": "Isle of Man", "UG": "Uganda", "TZ": "Tanzania", "MY": "Malaysia", "MX": "Mexico", "IL": "Israel", "FR": "France", "IO": "British Indian Ocean Territory", "SH": "Saint Helena", "FI": "Finland", "FJ": "Fiji", "FK": "Falkland Islands", "FM": "Micronesia", "FO": "Faroe Islands", "NI": "Nicaragua", "NL": "Netherlands", "NO": "Norway", "NA": "Namibia", "VU": "Vanuatu", "NC": "New Caledonia", "NE": "Niger", "NF": "Norfolk Island", "NG": "Nigeria", "NZ": "New Zealand", "NP": "Nepal", "NR": "Nauru", "NU": "Niue", "CK": "Cook Islands", "XK": "Kosovo", "CI": "Ivory Coast", "CH": "Switzerland", "CO": "Colombia", "CN": "China", "CM": "Cameroon", "CL": "Chile", "CC": "Cocos Islands", "CA": "Canada", "CG": "Republic of the Congo", "CF": "Central African Republic", "CD": "Democratic Republic of the Congo", "CZ": "Czech Republic", "CY": "Cyprus", "CX": "Christmas Island", "CR": "Costa Rica", "CW": "Curacao", "CV": "Cape Verde", "CU": "Cuba", "SZ": "Swaziland", "SY": "Syria", "SX": "Sint Maarten", "KG": "Kyrgyzstan", "KE": "Kenya", "SS": "South Sudan", "SR": "Suriname", "KI": "Kiribati", "KH": "Cambodia", "KN": "Saint Kitts and Nevis", "KM": "Comoros", "ST": "Sao Tome and Principe", "SK": "Slovakia", "KR": "South Korea", "SI": "Slovenia", "KP": "North Korea", "KW": "Kuwait", "SN": "Senegal", "SM": "San Marino", "SL": "Sierra Leone", "SC": "Seychelles", "KZ": "Kazakhstan", "KY": "Cayman Islands", "SG": "Singapore", "SE": "Sweden", "SD": "Sudan", "DO": "Dominican Republic", "DM": "Dominica", "DJ": "Djibouti", "DK": "Denmark", "VG": "British Virgin Islands", "DE": "Germany", "YE": "Yemen", "DZ": "Algeria", "US": "United States", "UY": "Uruguay", "YT": "Mayotte", "UM": "United States Minor Outlying Islands", "LB": "Lebanon", "LC": "Saint Lucia", "LA": "Laos", "TV": "Tuvalu", "TW": "Taiwan", "TT": "Trinidad and Tobago", "TR": "Turkey", "LK": "Sri Lanka", "LI": "Liechtenstein", "LV": "Latvia", "TO": "Tonga", "LT": "Lithuania", "LU": "Luxembourg", "LR": "Liberia", "LS": "Lesotho", "TH": "Thailand", "TF": "French Southern Territories", "TG": "Togo", "TD": "Chad", "TC": "Turks and Caicos Islands", "LY": "Libya", "VA": "Vatican", "VC": "Saint Vincent and the Grenadines", "AE": "United Arab Emirates", "AD": "Andorra", "AG": "Antigua and Barbuda", "AF": "Afghanistan", "AI": "Anguilla", "VI": "U.S. Virgin Islands", "IS": "Iceland", "IR": "Iran", "AM": "Armenia", "AL": "Albania", "AO": "Angola", "AQ": "Antarctica", "AS": "American Samoa", "AR": "Argentina", "AU": "Australia", "AT": "Austria", "AW": "Aruba", "IN": "India", "AX": "Aland Islands", "AZ": "Azerbaijan", "IE": "Ireland", "ID": "Indonesia", "UA": "Ukraine", "QA": "Qatar", "MZ": "Mozambique" };

// European Union countries
var euCountries = ["AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE", "GB"];

// American countries
var northAmerica = ["US", "CA"];
var latinAmerica = [ "BZ", "CR", "SV", "GT", "HN", "MX", "NI", "PA", "AR", "BO", "BR", "CL", "CO", "EC", "FK", "GF", "GY", "PY", "PE", "SR", "UY", "VE", "CU", "DO", "HT" ];

// North America western states/regions
var westernUS = [ "Arizona", "Colorado", "Idaho", "Kansas", "Montana", "Nebraska", "Nevada", "New Mexico", "North Dakota", "Oregon", "South Dakota", "Texas", "Utah", "Wyoming", "California", "Washington", "Alaska" ];
var westernCanada = [ "Alberta", "British Columbia", "Saskatchewan", "Manitoba", "Northwest Territories", "Nunavut", "Yukon" ];

var allAmericas = northAmerica.concat(latinAmerica);
var westernRegion = westernUS.concat(westernCanada);

// Only trigger when form has consent field
if (jQuery('.form-consent').length) {

  jQuery.getJSON("https://ipinfo.io?token=1ac9095e2f9aa7", function(data) {

    country = data.country;
    region = data.region;
    engss = jQuery(".num-engineers div select").val();
    calendlyTeamInput = jQuery(".form-confirm-calendly div input");
    isInAmericas = jQuery.inArray(country, allAmericas) !== -1;
    isNorthWesternRegion = jQuery.inArray(region, westernRegion) !== -1;

    // Consent for EU countries
    if (jQuery.inArray(country, euCountries) !== -1) {
      jQuery(".form-consent").removeClass("gfield_visibility_hidden");
      jQuery(".form-consent").addClass("gfield_visibility_visible");
    } else {
      // Auto checks for non EU countries
      jQuery(".form-consent div input").prop("checked", true);
    }

    // Fill hidden fields
    var inputs = ["country", "region", "ip"];

    inputs.forEach(function(i) {
      switch (i) {
        case "country":
          jQuery(".confirm-" + i + " div input").val(countryCodeToName(data[i], allCountriesName));
          break;
        case "region":
          jQuery(".confirm-" + i + " div input").val(regionFormat(data[i]));
          break;
        default:
          jQuery(".confirm-" + i + " div input").val(data[i]);
      }
    });

    // Select the right team when number of engineers field is changed
    jQuery(".num-engineers div select").on("change", function() {
      engss = this.value;
      calendlyTeam(isInAmericas, isNorthWesternRegion);
    });
  });
}

// Convert country code to full name
function countryCodeToName(c, all) {
  for (var key in all) {
    if (key == c) {
      return all[key];
    }
  }
}

// Fallback if region string is empty
function regionFormat(region) {
  if (region !== '') {
    return region;
  }
  else {
    return 'Unknown';
  }
}

// Select team according to country / region
function calendlyTeam(countries, region) {
  if (engss !== '1-20' && countries && region ) {
    calendlyTeamInput.val('Dan/Dustin');
  } else if (engss !== '1-20' && countries && !region) {
    calendlyTeamInput.val("Valdemir/Martin");
	} else {
    calendlyTeamInput.val('Michael');
  }
}

// Change value color on Select change
if (jQuery("select").length) {
  jQuery("select").change(function () {
    jQuery(this).css('color', '#343434');
  });
}
