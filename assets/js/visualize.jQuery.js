



<!DOCTYPE html>
<html>
<head>
 <link rel="icon" type="image/vnd.microsoft.icon" href="http://www.gstatic.com/codesite/ph/images/phosting.ico">
 
 <script type="text/javascript">
 
 
 
 
 var codesite_token = "e42cd23ceab47a8f0a06ab012fa3c5cc";
 
 
 var CS_env = {"token":"e42cd23ceab47a8f0a06ab012fa3c5cc","assetHostPath":"http://www.gstatic.com/codesite/ph","domainName":null,"assetVersionPath":"http://www.gstatic.com/codesite/ph/9881438163762621917","projectName":"dwpe","projectHomeUrl":"/p/dwpe","absoluteBaseUrl":"http://code.google.com","relativeBaseUrl":"","urlPrefix":"p","loggedInUserEmail":"ghthor@gmail.com"};
 </script>
 
 
 <title>visualize.jQuery.js - 
 dwpe -
 
 
 Code examples from the book Designing with Progressive Enhancement - Google Project Hosting
 </title>
 <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" >
 <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" >
 
 <meta name="ROBOTS" content="NOARCHIVE">
 
 <link type="text/css" rel="stylesheet" href="http://www.gstatic.com/codesite/ph/9881438163762621917/css/ph_core.css">
 
 <link type="text/css" rel="stylesheet" href="http://www.gstatic.com/codesite/ph/9881438163762621917/css/ph_detail.css" >
 
 
 <link type="text/css" rel="stylesheet" href="http://www.gstatic.com/codesite/ph/9881438163762621917/css/d_sb.css" >
 
 
 
<!--[if IE]>
 <link type="text/css" rel="stylesheet" href="http://www.gstatic.com/codesite/ph/9881438163762621917/css/d_ie.css" >
<![endif]-->
 <style type="text/css">
 .menuIcon.off { background: no-repeat url(http://www.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 -42px }
 .menuIcon.on { background: no-repeat url(http://www.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 -28px }
 .menuIcon.down { background: no-repeat url(http://www.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 0; }
 
 
 
  tr.inline_comment {
 background: #fff;
 vertical-align: top;
 }
 div.draft, div.published {
 padding: .3em;
 border: 1px solid #999; 
 margin-bottom: .1em;
 font-family: arial, sans-serif;
 max-width: 60em;
 }
 div.draft {
 background: #ffa;
 } 
 div.published {
 background: #e5ecf9;
 }
 div.published .body, div.draft .body {
 padding: .5em .1em .1em .1em;
 max-width: 60em;
 white-space: pre-wrap;
 white-space: -moz-pre-wrap;
 white-space: -pre-wrap;
 white-space: -o-pre-wrap;
 word-wrap: break-word;
 font-size: 1em;
 }
 div.draft .actions {
 margin-left: 1em;
 font-size: 90%;
 }
 div.draft form {
 padding: .5em .5em .5em 0;
 }
 div.draft textarea, div.published textarea {
 width: 95%;
 height: 10em;
 font-family: arial, sans-serif;
 margin-bottom: .5em;
 }

 
 .nocursor, .nocursor td, .cursor_hidden, .cursor_hidden td {
 background-color: white;
 height: 2px;
 }
 .cursor, .cursor td {
 background-color: darkblue;
 height: 2px;
 display: '';
 }
 
 
.list {
 border: 1px solid white;
 border-bottom: 0;
}

 </style>
</head>
<body class="t4">
 <script type="text/javascript">
 var _gaq = _gaq || [];
 _gaq.push(
 ['siteTracker._setAccount', 'UA-18071-1'],
 ['siteTracker._trackPageview']);
 
 _gaq.push(
 ['projectTracker._setAccount', 'UA-564032-3'],
 ['projectTracker._trackPageview']);
 
 (function() {
 var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
 ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
 (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ga);
 })();
 </script>
<div class="headbg">
 <div id="gaia">
 

 <span>
 
 
 <b>ghthor@gmail.com</b>
 
 
 | <a href="/u/@WBlVQFJWDxJBWwh6/" id="projects-dropdown" onclick="return false;"
 ><u>My favorites</u> <small>&#9660;</small></a>
 | <a href="/u/@WBlVQFJWDxJBWwh6/" onclick="_CS_click('/gb/ph/profile');" 
 title="Profile, Updates, and Settings"
 ><u>Profile</u></a>
 | <a href="https://www.google.com/accounts/Logout?continue=http%3A%2F%2Fcode.google.com%2Fp%2Fdwpe%2Fsource%2Fbrowse%2Ftrunk%2Fcharting%2Fjs%2Fvisualize.jQuery.js" 
 onclick="_CS_click('/gb/ph/signout');"
 ><u>Sign out</u></a>
 
 </span>

 </div>
 <div class="gbh" style="left: 0pt;"></div>
 <div class="gbh" style="right: 0pt;"></div>
 
 
 <div style="height: 1px"></div>
<!--[if lte IE 7]>
<div style="text-align:center;">
Your version of Internet Explorer is not supported. Try a browser that
contributes to open source, such as <a href="http://www.firefox.com">Firefox</a>,
<a href="http://www.google.com/chrome">Google Chrome</a>, or
<a href="http://code.google.com/chrome/chromeframe/">Google Chrome Frame</a>.
</div>
<![endif]-->




 <table style="padding:0px; margin: 0px 0px 10px 0px; width:100%" cellpadding="0" cellspacing="0">
 <tr style="height: 58px;">
 
 <td id="plogo">
 <a href="/p/dwpe/">
 
 
 <img src="/p/dwpe/logo?cct=1266421487" alt="Logo">
 
 </a>
 </td>
 
 <td style="padding-left: 0.5em">
 
 <div id="pname">
 <a href="/p/dwpe/">dwpe</a>
 </div>
 
 <div id="psum">
 <a id="project_summary_link" href="/p/dwpe/" >Code examples from the book Designing with Progressive Enhancement</a>
 
 </div>
 
 
 </td>
 <td style="white-space:nowrap;text-align:right; vertical-align:bottom;">
 
 <form action="/hosting/search">
 <input size="30" name="q" value="" type="text">
 <input type="submit" name="projectsearch" value="Search projects" >
 </form>
 
 </tr>
 </table>

</div>

 
<div id="mt" class="gtb"> 
 <a href="/p/dwpe/" class="tab ">Project&nbsp;Home</a>
 
 
 
 
 <a href="/p/dwpe/downloads/list" class="tab ">Downloads</a>
 
 
 
 
 
 <a href="/p/dwpe/w/list" class="tab ">Wiki</a>
 
 
 
 
 
 <a href="/p/dwpe/issues/list"
 class="tab ">Issues</a>
 
 
 
 
 
 <a href="/p/dwpe/source/checkout"
 class="tab active">Source</a>
 
 
 
 
 
 <div class=gtbc></div>
</div>
<table cellspacing="0" cellpadding="0" width="100%" align="center" border="0" class="st">
 <tr>
 
 
 
 
 
 
 <td class="subt">
 <div class="st2">
 <div class="isf">
 
 
 
 <span class="inst1"><a href="/p/dwpe/source/checkout">Checkout</a></span> &nbsp;
 <span class="inst2"><a href="/p/dwpe/source/browse/">Browse</a></span> &nbsp;
 <span class="inst3"><a href="/p/dwpe/source/list">Changes</a></span> &nbsp;
 
 <form action="http://www.google.com/codesearch" method="get" style="display:inline"
 onsubmit="document.getElementById('codesearchq').value = document.getElementById('origq').value + ' package:http://dwpe\\.googlecode\\.com'">
 <input type="hidden" name="q" id="codesearchq" value="">
 <input type="text" maxlength="2048" size="38" id="origq" name="origq" value="" title="Google Code Search" style="font-size:92%">&nbsp;<input type="submit" value="Search Trunk" name="btnG" style="font-size:92%">
 
 
 
 </form>
 </div>
</div>

 </td>
 
 
 
 <td align="right" valign="top" class="bevel-right"></td>
 </tr>
</table>
<script type="text/javascript">
 var cancelBubble = false;
 function _go(url) { document.location = url; }
</script>


<div id="maincol"
 
>

 
<!-- IE -->




<div class="expand">
<div id="colcontrol">
<style type="text/css">
 #file_flipper { white-space: nowrap; padding-right: 2em; }
 #file_flipper.hidden { display: none; }
 #file_flipper .pagelink { color: #0000CC; text-decoration: underline; }
 #file_flipper #visiblefiles { padding-left: 0.5em; padding-right: 0.5em; }
</style>
<table id="nav_and_rev" class="list"
 cellpadding="0" cellspacing="0" width="100%">
 <tr>
 
 <td nowrap="nowrap" class="src_crumbs src_nav" width="33%">
 <strong class="src_nav">Source path:&nbsp;</strong>
 <span id="crumb_root">
 
 <a href="/p/dwpe/source/browse/">svn</a>/&nbsp;</span>
 <span id="crumb_links" class="ifClosed"><a href="/p/dwpe/source/browse/trunk/">trunk</a><span class="sp">/&nbsp;</span><a href="/p/dwpe/source/browse/trunk/charting/">charting</a><span class="sp">/&nbsp;</span><a href="/p/dwpe/source/browse/trunk/charting/js/">js</a><span class="sp">/&nbsp;</span>visualize.jQuery.js</span>
 
 

 </td>
 
 
 <td nowrap="nowrap" width="33%" align="center">
 <a href="/p/dwpe/source/browse/trunk/charting/js/visualize.jQuery.js?edit=1"
 ><img src="http://www.gstatic.com/codesite/ph/images/pencil-y14.png"
 class="edit_icon">Edit file</a>
 </td>
 
 
 <td nowrap="nowrap" width="33%" align="right">
 <table cellpadding="0" cellspacing="0" style="font-size: 100%"><tr>
 
 
 <td class="flipper">
 <ul class="leftside">
 
 <li><a href="/p/dwpe/source/browse/trunk/charting/js/visualize.jQuery.js?r=22" title="Previous">&lsaquo;r22</a></li>
 
 </ul>
 </td>
 
 <td class="flipper"><b>r42</b></td>
 
 </tr></table>
 </td> 
 </tr>
</table>

<div class="fc">
 
 
 
<style type="text/css">
.undermouse span {
 background-image: url(http://www.gstatic.com/codesite/ph/images/comments.gif); }
</style>
<table class="opened" id="review_comment_area"
onmouseout="gutterOut()"><tr>
<td id="nums">
<pre><table width="100%"><tr class="nocursor"><td></td></tr></table></pre>
<pre><table width="100%" id="nums_table_0"><tr id="gr_svn42_1"

 onmouseover="gutterOver(1)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',1);">&nbsp;</span
></td><td id="1"><a href="#1">1</a></td></tr
><tr id="gr_svn42_2"

 onmouseover="gutterOver(2)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',2);">&nbsp;</span
></td><td id="2"><a href="#2">2</a></td></tr
><tr id="gr_svn42_3"

 onmouseover="gutterOver(3)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',3);">&nbsp;</span
></td><td id="3"><a href="#3">3</a></td></tr
><tr id="gr_svn42_4"

 onmouseover="gutterOver(4)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',4);">&nbsp;</span
></td><td id="4"><a href="#4">4</a></td></tr
><tr id="gr_svn42_5"

 onmouseover="gutterOver(5)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',5);">&nbsp;</span
></td><td id="5"><a href="#5">5</a></td></tr
><tr id="gr_svn42_6"

 onmouseover="gutterOver(6)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',6);">&nbsp;</span
></td><td id="6"><a href="#6">6</a></td></tr
><tr id="gr_svn42_7"

 onmouseover="gutterOver(7)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',7);">&nbsp;</span
></td><td id="7"><a href="#7">7</a></td></tr
><tr id="gr_svn42_8"

 onmouseover="gutterOver(8)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',8);">&nbsp;</span
></td><td id="8"><a href="#8">8</a></td></tr
><tr id="gr_svn42_9"

 onmouseover="gutterOver(9)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',9);">&nbsp;</span
></td><td id="9"><a href="#9">9</a></td></tr
><tr id="gr_svn42_10"

 onmouseover="gutterOver(10)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',10);">&nbsp;</span
></td><td id="10"><a href="#10">10</a></td></tr
><tr id="gr_svn42_11"

 onmouseover="gutterOver(11)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',11);">&nbsp;</span
></td><td id="11"><a href="#11">11</a></td></tr
><tr id="gr_svn42_12"

 onmouseover="gutterOver(12)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',12);">&nbsp;</span
></td><td id="12"><a href="#12">12</a></td></tr
><tr id="gr_svn42_13"

 onmouseover="gutterOver(13)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',13);">&nbsp;</span
></td><td id="13"><a href="#13">13</a></td></tr
><tr id="gr_svn42_14"

 onmouseover="gutterOver(14)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',14);">&nbsp;</span
></td><td id="14"><a href="#14">14</a></td></tr
><tr id="gr_svn42_15"

 onmouseover="gutterOver(15)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',15);">&nbsp;</span
></td><td id="15"><a href="#15">15</a></td></tr
><tr id="gr_svn42_16"

 onmouseover="gutterOver(16)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',16);">&nbsp;</span
></td><td id="16"><a href="#16">16</a></td></tr
><tr id="gr_svn42_17"

 onmouseover="gutterOver(17)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',17);">&nbsp;</span
></td><td id="17"><a href="#17">17</a></td></tr
><tr id="gr_svn42_18"

 onmouseover="gutterOver(18)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',18);">&nbsp;</span
></td><td id="18"><a href="#18">18</a></td></tr
><tr id="gr_svn42_19"

 onmouseover="gutterOver(19)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',19);">&nbsp;</span
></td><td id="19"><a href="#19">19</a></td></tr
><tr id="gr_svn42_20"

 onmouseover="gutterOver(20)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',20);">&nbsp;</span
></td><td id="20"><a href="#20">20</a></td></tr
><tr id="gr_svn42_21"

 onmouseover="gutterOver(21)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',21);">&nbsp;</span
></td><td id="21"><a href="#21">21</a></td></tr
><tr id="gr_svn42_22"

 onmouseover="gutterOver(22)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',22);">&nbsp;</span
></td><td id="22"><a href="#22">22</a></td></tr
><tr id="gr_svn42_23"

 onmouseover="gutterOver(23)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',23);">&nbsp;</span
></td><td id="23"><a href="#23">23</a></td></tr
><tr id="gr_svn42_24"

 onmouseover="gutterOver(24)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',24);">&nbsp;</span
></td><td id="24"><a href="#24">24</a></td></tr
><tr id="gr_svn42_25"

 onmouseover="gutterOver(25)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',25);">&nbsp;</span
></td><td id="25"><a href="#25">25</a></td></tr
><tr id="gr_svn42_26"

 onmouseover="gutterOver(26)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',26);">&nbsp;</span
></td><td id="26"><a href="#26">26</a></td></tr
><tr id="gr_svn42_27"

 onmouseover="gutterOver(27)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',27);">&nbsp;</span
></td><td id="27"><a href="#27">27</a></td></tr
><tr id="gr_svn42_28"

 onmouseover="gutterOver(28)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',28);">&nbsp;</span
></td><td id="28"><a href="#28">28</a></td></tr
><tr id="gr_svn42_29"

 onmouseover="gutterOver(29)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',29);">&nbsp;</span
></td><td id="29"><a href="#29">29</a></td></tr
><tr id="gr_svn42_30"

 onmouseover="gutterOver(30)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',30);">&nbsp;</span
></td><td id="30"><a href="#30">30</a></td></tr
><tr id="gr_svn42_31"

 onmouseover="gutterOver(31)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',31);">&nbsp;</span
></td><td id="31"><a href="#31">31</a></td></tr
><tr id="gr_svn42_32"

 onmouseover="gutterOver(32)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',32);">&nbsp;</span
></td><td id="32"><a href="#32">32</a></td></tr
><tr id="gr_svn42_33"

 onmouseover="gutterOver(33)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',33);">&nbsp;</span
></td><td id="33"><a href="#33">33</a></td></tr
><tr id="gr_svn42_34"

 onmouseover="gutterOver(34)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',34);">&nbsp;</span
></td><td id="34"><a href="#34">34</a></td></tr
><tr id="gr_svn42_35"

 onmouseover="gutterOver(35)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',35);">&nbsp;</span
></td><td id="35"><a href="#35">35</a></td></tr
><tr id="gr_svn42_36"

 onmouseover="gutterOver(36)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',36);">&nbsp;</span
></td><td id="36"><a href="#36">36</a></td></tr
><tr id="gr_svn42_37"

 onmouseover="gutterOver(37)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',37);">&nbsp;</span
></td><td id="37"><a href="#37">37</a></td></tr
><tr id="gr_svn42_38"

 onmouseover="gutterOver(38)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',38);">&nbsp;</span
></td><td id="38"><a href="#38">38</a></td></tr
><tr id="gr_svn42_39"

 onmouseover="gutterOver(39)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',39);">&nbsp;</span
></td><td id="39"><a href="#39">39</a></td></tr
><tr id="gr_svn42_40"

 onmouseover="gutterOver(40)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',40);">&nbsp;</span
></td><td id="40"><a href="#40">40</a></td></tr
><tr id="gr_svn42_41"

 onmouseover="gutterOver(41)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',41);">&nbsp;</span
></td><td id="41"><a href="#41">41</a></td></tr
><tr id="gr_svn42_42"

 onmouseover="gutterOver(42)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',42);">&nbsp;</span
></td><td id="42"><a href="#42">42</a></td></tr
><tr id="gr_svn42_43"

 onmouseover="gutterOver(43)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',43);">&nbsp;</span
></td><td id="43"><a href="#43">43</a></td></tr
><tr id="gr_svn42_44"

 onmouseover="gutterOver(44)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',44);">&nbsp;</span
></td><td id="44"><a href="#44">44</a></td></tr
><tr id="gr_svn42_45"

 onmouseover="gutterOver(45)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',45);">&nbsp;</span
></td><td id="45"><a href="#45">45</a></td></tr
><tr id="gr_svn42_46"

 onmouseover="gutterOver(46)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',46);">&nbsp;</span
></td><td id="46"><a href="#46">46</a></td></tr
><tr id="gr_svn42_47"

 onmouseover="gutterOver(47)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',47);">&nbsp;</span
></td><td id="47"><a href="#47">47</a></td></tr
><tr id="gr_svn42_48"

 onmouseover="gutterOver(48)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',48);">&nbsp;</span
></td><td id="48"><a href="#48">48</a></td></tr
><tr id="gr_svn42_49"

 onmouseover="gutterOver(49)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',49);">&nbsp;</span
></td><td id="49"><a href="#49">49</a></td></tr
><tr id="gr_svn42_50"

 onmouseover="gutterOver(50)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',50);">&nbsp;</span
></td><td id="50"><a href="#50">50</a></td></tr
><tr id="gr_svn42_51"

 onmouseover="gutterOver(51)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',51);">&nbsp;</span
></td><td id="51"><a href="#51">51</a></td></tr
><tr id="gr_svn42_52"

 onmouseover="gutterOver(52)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',52);">&nbsp;</span
></td><td id="52"><a href="#52">52</a></td></tr
><tr id="gr_svn42_53"

 onmouseover="gutterOver(53)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',53);">&nbsp;</span
></td><td id="53"><a href="#53">53</a></td></tr
><tr id="gr_svn42_54"

 onmouseover="gutterOver(54)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',54);">&nbsp;</span
></td><td id="54"><a href="#54">54</a></td></tr
><tr id="gr_svn42_55"

 onmouseover="gutterOver(55)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',55);">&nbsp;</span
></td><td id="55"><a href="#55">55</a></td></tr
><tr id="gr_svn42_56"

 onmouseover="gutterOver(56)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',56);">&nbsp;</span
></td><td id="56"><a href="#56">56</a></td></tr
><tr id="gr_svn42_57"

 onmouseover="gutterOver(57)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',57);">&nbsp;</span
></td><td id="57"><a href="#57">57</a></td></tr
><tr id="gr_svn42_58"

 onmouseover="gutterOver(58)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',58);">&nbsp;</span
></td><td id="58"><a href="#58">58</a></td></tr
><tr id="gr_svn42_59"

 onmouseover="gutterOver(59)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',59);">&nbsp;</span
></td><td id="59"><a href="#59">59</a></td></tr
><tr id="gr_svn42_60"

 onmouseover="gutterOver(60)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',60);">&nbsp;</span
></td><td id="60"><a href="#60">60</a></td></tr
><tr id="gr_svn42_61"

 onmouseover="gutterOver(61)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',61);">&nbsp;</span
></td><td id="61"><a href="#61">61</a></td></tr
><tr id="gr_svn42_62"

 onmouseover="gutterOver(62)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',62);">&nbsp;</span
></td><td id="62"><a href="#62">62</a></td></tr
><tr id="gr_svn42_63"

 onmouseover="gutterOver(63)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',63);">&nbsp;</span
></td><td id="63"><a href="#63">63</a></td></tr
><tr id="gr_svn42_64"

 onmouseover="gutterOver(64)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',64);">&nbsp;</span
></td><td id="64"><a href="#64">64</a></td></tr
><tr id="gr_svn42_65"

 onmouseover="gutterOver(65)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',65);">&nbsp;</span
></td><td id="65"><a href="#65">65</a></td></tr
><tr id="gr_svn42_66"

 onmouseover="gutterOver(66)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',66);">&nbsp;</span
></td><td id="66"><a href="#66">66</a></td></tr
><tr id="gr_svn42_67"

 onmouseover="gutterOver(67)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',67);">&nbsp;</span
></td><td id="67"><a href="#67">67</a></td></tr
><tr id="gr_svn42_68"

 onmouseover="gutterOver(68)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',68);">&nbsp;</span
></td><td id="68"><a href="#68">68</a></td></tr
><tr id="gr_svn42_69"

 onmouseover="gutterOver(69)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',69);">&nbsp;</span
></td><td id="69"><a href="#69">69</a></td></tr
><tr id="gr_svn42_70"

 onmouseover="gutterOver(70)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',70);">&nbsp;</span
></td><td id="70"><a href="#70">70</a></td></tr
><tr id="gr_svn42_71"

 onmouseover="gutterOver(71)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',71);">&nbsp;</span
></td><td id="71"><a href="#71">71</a></td></tr
><tr id="gr_svn42_72"

 onmouseover="gutterOver(72)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',72);">&nbsp;</span
></td><td id="72"><a href="#72">72</a></td></tr
><tr id="gr_svn42_73"

 onmouseover="gutterOver(73)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',73);">&nbsp;</span
></td><td id="73"><a href="#73">73</a></td></tr
><tr id="gr_svn42_74"

 onmouseover="gutterOver(74)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',74);">&nbsp;</span
></td><td id="74"><a href="#74">74</a></td></tr
><tr id="gr_svn42_75"

 onmouseover="gutterOver(75)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',75);">&nbsp;</span
></td><td id="75"><a href="#75">75</a></td></tr
><tr id="gr_svn42_76"

 onmouseover="gutterOver(76)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',76);">&nbsp;</span
></td><td id="76"><a href="#76">76</a></td></tr
><tr id="gr_svn42_77"

 onmouseover="gutterOver(77)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',77);">&nbsp;</span
></td><td id="77"><a href="#77">77</a></td></tr
><tr id="gr_svn42_78"

 onmouseover="gutterOver(78)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',78);">&nbsp;</span
></td><td id="78"><a href="#78">78</a></td></tr
><tr id="gr_svn42_79"

 onmouseover="gutterOver(79)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',79);">&nbsp;</span
></td><td id="79"><a href="#79">79</a></td></tr
><tr id="gr_svn42_80"

 onmouseover="gutterOver(80)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',80);">&nbsp;</span
></td><td id="80"><a href="#80">80</a></td></tr
><tr id="gr_svn42_81"

 onmouseover="gutterOver(81)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',81);">&nbsp;</span
></td><td id="81"><a href="#81">81</a></td></tr
><tr id="gr_svn42_82"

 onmouseover="gutterOver(82)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',82);">&nbsp;</span
></td><td id="82"><a href="#82">82</a></td></tr
><tr id="gr_svn42_83"

 onmouseover="gutterOver(83)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',83);">&nbsp;</span
></td><td id="83"><a href="#83">83</a></td></tr
><tr id="gr_svn42_84"

 onmouseover="gutterOver(84)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',84);">&nbsp;</span
></td><td id="84"><a href="#84">84</a></td></tr
><tr id="gr_svn42_85"

 onmouseover="gutterOver(85)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',85);">&nbsp;</span
></td><td id="85"><a href="#85">85</a></td></tr
><tr id="gr_svn42_86"

 onmouseover="gutterOver(86)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',86);">&nbsp;</span
></td><td id="86"><a href="#86">86</a></td></tr
><tr id="gr_svn42_87"

 onmouseover="gutterOver(87)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',87);">&nbsp;</span
></td><td id="87"><a href="#87">87</a></td></tr
><tr id="gr_svn42_88"

 onmouseover="gutterOver(88)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',88);">&nbsp;</span
></td><td id="88"><a href="#88">88</a></td></tr
><tr id="gr_svn42_89"

 onmouseover="gutterOver(89)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',89);">&nbsp;</span
></td><td id="89"><a href="#89">89</a></td></tr
><tr id="gr_svn42_90"

 onmouseover="gutterOver(90)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',90);">&nbsp;</span
></td><td id="90"><a href="#90">90</a></td></tr
><tr id="gr_svn42_91"

 onmouseover="gutterOver(91)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',91);">&nbsp;</span
></td><td id="91"><a href="#91">91</a></td></tr
><tr id="gr_svn42_92"

 onmouseover="gutterOver(92)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',92);">&nbsp;</span
></td><td id="92"><a href="#92">92</a></td></tr
><tr id="gr_svn42_93"

 onmouseover="gutterOver(93)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',93);">&nbsp;</span
></td><td id="93"><a href="#93">93</a></td></tr
><tr id="gr_svn42_94"

 onmouseover="gutterOver(94)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',94);">&nbsp;</span
></td><td id="94"><a href="#94">94</a></td></tr
><tr id="gr_svn42_95"

 onmouseover="gutterOver(95)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',95);">&nbsp;</span
></td><td id="95"><a href="#95">95</a></td></tr
><tr id="gr_svn42_96"

 onmouseover="gutterOver(96)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',96);">&nbsp;</span
></td><td id="96"><a href="#96">96</a></td></tr
><tr id="gr_svn42_97"

 onmouseover="gutterOver(97)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',97);">&nbsp;</span
></td><td id="97"><a href="#97">97</a></td></tr
><tr id="gr_svn42_98"

 onmouseover="gutterOver(98)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',98);">&nbsp;</span
></td><td id="98"><a href="#98">98</a></td></tr
><tr id="gr_svn42_99"

 onmouseover="gutterOver(99)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',99);">&nbsp;</span
></td><td id="99"><a href="#99">99</a></td></tr
><tr id="gr_svn42_100"

 onmouseover="gutterOver(100)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',100);">&nbsp;</span
></td><td id="100"><a href="#100">100</a></td></tr
><tr id="gr_svn42_101"

 onmouseover="gutterOver(101)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',101);">&nbsp;</span
></td><td id="101"><a href="#101">101</a></td></tr
><tr id="gr_svn42_102"

 onmouseover="gutterOver(102)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',102);">&nbsp;</span
></td><td id="102"><a href="#102">102</a></td></tr
><tr id="gr_svn42_103"

 onmouseover="gutterOver(103)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',103);">&nbsp;</span
></td><td id="103"><a href="#103">103</a></td></tr
><tr id="gr_svn42_104"

 onmouseover="gutterOver(104)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',104);">&nbsp;</span
></td><td id="104"><a href="#104">104</a></td></tr
><tr id="gr_svn42_105"

 onmouseover="gutterOver(105)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',105);">&nbsp;</span
></td><td id="105"><a href="#105">105</a></td></tr
><tr id="gr_svn42_106"

 onmouseover="gutterOver(106)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',106);">&nbsp;</span
></td><td id="106"><a href="#106">106</a></td></tr
><tr id="gr_svn42_107"

 onmouseover="gutterOver(107)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',107);">&nbsp;</span
></td><td id="107"><a href="#107">107</a></td></tr
><tr id="gr_svn42_108"

 onmouseover="gutterOver(108)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',108);">&nbsp;</span
></td><td id="108"><a href="#108">108</a></td></tr
><tr id="gr_svn42_109"

 onmouseover="gutterOver(109)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',109);">&nbsp;</span
></td><td id="109"><a href="#109">109</a></td></tr
><tr id="gr_svn42_110"

 onmouseover="gutterOver(110)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',110);">&nbsp;</span
></td><td id="110"><a href="#110">110</a></td></tr
><tr id="gr_svn42_111"

 onmouseover="gutterOver(111)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',111);">&nbsp;</span
></td><td id="111"><a href="#111">111</a></td></tr
><tr id="gr_svn42_112"

 onmouseover="gutterOver(112)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',112);">&nbsp;</span
></td><td id="112"><a href="#112">112</a></td></tr
><tr id="gr_svn42_113"

 onmouseover="gutterOver(113)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',113);">&nbsp;</span
></td><td id="113"><a href="#113">113</a></td></tr
><tr id="gr_svn42_114"

 onmouseover="gutterOver(114)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',114);">&nbsp;</span
></td><td id="114"><a href="#114">114</a></td></tr
><tr id="gr_svn42_115"

 onmouseover="gutterOver(115)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',115);">&nbsp;</span
></td><td id="115"><a href="#115">115</a></td></tr
><tr id="gr_svn42_116"

 onmouseover="gutterOver(116)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',116);">&nbsp;</span
></td><td id="116"><a href="#116">116</a></td></tr
><tr id="gr_svn42_117"

 onmouseover="gutterOver(117)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',117);">&nbsp;</span
></td><td id="117"><a href="#117">117</a></td></tr
><tr id="gr_svn42_118"

 onmouseover="gutterOver(118)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',118);">&nbsp;</span
></td><td id="118"><a href="#118">118</a></td></tr
><tr id="gr_svn42_119"

 onmouseover="gutterOver(119)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',119);">&nbsp;</span
></td><td id="119"><a href="#119">119</a></td></tr
><tr id="gr_svn42_120"

 onmouseover="gutterOver(120)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',120);">&nbsp;</span
></td><td id="120"><a href="#120">120</a></td></tr
><tr id="gr_svn42_121"

 onmouseover="gutterOver(121)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',121);">&nbsp;</span
></td><td id="121"><a href="#121">121</a></td></tr
><tr id="gr_svn42_122"

 onmouseover="gutterOver(122)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',122);">&nbsp;</span
></td><td id="122"><a href="#122">122</a></td></tr
><tr id="gr_svn42_123"

 onmouseover="gutterOver(123)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',123);">&nbsp;</span
></td><td id="123"><a href="#123">123</a></td></tr
><tr id="gr_svn42_124"

 onmouseover="gutterOver(124)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',124);">&nbsp;</span
></td><td id="124"><a href="#124">124</a></td></tr
><tr id="gr_svn42_125"

 onmouseover="gutterOver(125)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',125);">&nbsp;</span
></td><td id="125"><a href="#125">125</a></td></tr
><tr id="gr_svn42_126"

 onmouseover="gutterOver(126)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',126);">&nbsp;</span
></td><td id="126"><a href="#126">126</a></td></tr
><tr id="gr_svn42_127"

 onmouseover="gutterOver(127)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',127);">&nbsp;</span
></td><td id="127"><a href="#127">127</a></td></tr
><tr id="gr_svn42_128"

 onmouseover="gutterOver(128)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',128);">&nbsp;</span
></td><td id="128"><a href="#128">128</a></td></tr
><tr id="gr_svn42_129"

 onmouseover="gutterOver(129)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',129);">&nbsp;</span
></td><td id="129"><a href="#129">129</a></td></tr
><tr id="gr_svn42_130"

 onmouseover="gutterOver(130)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',130);">&nbsp;</span
></td><td id="130"><a href="#130">130</a></td></tr
><tr id="gr_svn42_131"

 onmouseover="gutterOver(131)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',131);">&nbsp;</span
></td><td id="131"><a href="#131">131</a></td></tr
><tr id="gr_svn42_132"

 onmouseover="gutterOver(132)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',132);">&nbsp;</span
></td><td id="132"><a href="#132">132</a></td></tr
><tr id="gr_svn42_133"

 onmouseover="gutterOver(133)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',133);">&nbsp;</span
></td><td id="133"><a href="#133">133</a></td></tr
><tr id="gr_svn42_134"

 onmouseover="gutterOver(134)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',134);">&nbsp;</span
></td><td id="134"><a href="#134">134</a></td></tr
><tr id="gr_svn42_135"

 onmouseover="gutterOver(135)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',135);">&nbsp;</span
></td><td id="135"><a href="#135">135</a></td></tr
><tr id="gr_svn42_136"

 onmouseover="gutterOver(136)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',136);">&nbsp;</span
></td><td id="136"><a href="#136">136</a></td></tr
><tr id="gr_svn42_137"

 onmouseover="gutterOver(137)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',137);">&nbsp;</span
></td><td id="137"><a href="#137">137</a></td></tr
><tr id="gr_svn42_138"

 onmouseover="gutterOver(138)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',138);">&nbsp;</span
></td><td id="138"><a href="#138">138</a></td></tr
><tr id="gr_svn42_139"

 onmouseover="gutterOver(139)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',139);">&nbsp;</span
></td><td id="139"><a href="#139">139</a></td></tr
><tr id="gr_svn42_140"

 onmouseover="gutterOver(140)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',140);">&nbsp;</span
></td><td id="140"><a href="#140">140</a></td></tr
><tr id="gr_svn42_141"

 onmouseover="gutterOver(141)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',141);">&nbsp;</span
></td><td id="141"><a href="#141">141</a></td></tr
><tr id="gr_svn42_142"

 onmouseover="gutterOver(142)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',142);">&nbsp;</span
></td><td id="142"><a href="#142">142</a></td></tr
><tr id="gr_svn42_143"

 onmouseover="gutterOver(143)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',143);">&nbsp;</span
></td><td id="143"><a href="#143">143</a></td></tr
><tr id="gr_svn42_144"

 onmouseover="gutterOver(144)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',144);">&nbsp;</span
></td><td id="144"><a href="#144">144</a></td></tr
><tr id="gr_svn42_145"

 onmouseover="gutterOver(145)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',145);">&nbsp;</span
></td><td id="145"><a href="#145">145</a></td></tr
><tr id="gr_svn42_146"

 onmouseover="gutterOver(146)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',146);">&nbsp;</span
></td><td id="146"><a href="#146">146</a></td></tr
><tr id="gr_svn42_147"

 onmouseover="gutterOver(147)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',147);">&nbsp;</span
></td><td id="147"><a href="#147">147</a></td></tr
><tr id="gr_svn42_148"

 onmouseover="gutterOver(148)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',148);">&nbsp;</span
></td><td id="148"><a href="#148">148</a></td></tr
><tr id="gr_svn42_149"

 onmouseover="gutterOver(149)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',149);">&nbsp;</span
></td><td id="149"><a href="#149">149</a></td></tr
><tr id="gr_svn42_150"

 onmouseover="gutterOver(150)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',150);">&nbsp;</span
></td><td id="150"><a href="#150">150</a></td></tr
><tr id="gr_svn42_151"

 onmouseover="gutterOver(151)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',151);">&nbsp;</span
></td><td id="151"><a href="#151">151</a></td></tr
><tr id="gr_svn42_152"

 onmouseover="gutterOver(152)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',152);">&nbsp;</span
></td><td id="152"><a href="#152">152</a></td></tr
><tr id="gr_svn42_153"

 onmouseover="gutterOver(153)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',153);">&nbsp;</span
></td><td id="153"><a href="#153">153</a></td></tr
><tr id="gr_svn42_154"

 onmouseover="gutterOver(154)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',154);">&nbsp;</span
></td><td id="154"><a href="#154">154</a></td></tr
><tr id="gr_svn42_155"

 onmouseover="gutterOver(155)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',155);">&nbsp;</span
></td><td id="155"><a href="#155">155</a></td></tr
><tr id="gr_svn42_156"

 onmouseover="gutterOver(156)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',156);">&nbsp;</span
></td><td id="156"><a href="#156">156</a></td></tr
><tr id="gr_svn42_157"

 onmouseover="gutterOver(157)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',157);">&nbsp;</span
></td><td id="157"><a href="#157">157</a></td></tr
><tr id="gr_svn42_158"

 onmouseover="gutterOver(158)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',158);">&nbsp;</span
></td><td id="158"><a href="#158">158</a></td></tr
><tr id="gr_svn42_159"

 onmouseover="gutterOver(159)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',159);">&nbsp;</span
></td><td id="159"><a href="#159">159</a></td></tr
><tr id="gr_svn42_160"

 onmouseover="gutterOver(160)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',160);">&nbsp;</span
></td><td id="160"><a href="#160">160</a></td></tr
><tr id="gr_svn42_161"

 onmouseover="gutterOver(161)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',161);">&nbsp;</span
></td><td id="161"><a href="#161">161</a></td></tr
><tr id="gr_svn42_162"

 onmouseover="gutterOver(162)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',162);">&nbsp;</span
></td><td id="162"><a href="#162">162</a></td></tr
><tr id="gr_svn42_163"

 onmouseover="gutterOver(163)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',163);">&nbsp;</span
></td><td id="163"><a href="#163">163</a></td></tr
><tr id="gr_svn42_164"

 onmouseover="gutterOver(164)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',164);">&nbsp;</span
></td><td id="164"><a href="#164">164</a></td></tr
><tr id="gr_svn42_165"

 onmouseover="gutterOver(165)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',165);">&nbsp;</span
></td><td id="165"><a href="#165">165</a></td></tr
><tr id="gr_svn42_166"

 onmouseover="gutterOver(166)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',166);">&nbsp;</span
></td><td id="166"><a href="#166">166</a></td></tr
><tr id="gr_svn42_167"

 onmouseover="gutterOver(167)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',167);">&nbsp;</span
></td><td id="167"><a href="#167">167</a></td></tr
><tr id="gr_svn42_168"

 onmouseover="gutterOver(168)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',168);">&nbsp;</span
></td><td id="168"><a href="#168">168</a></td></tr
><tr id="gr_svn42_169"

 onmouseover="gutterOver(169)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',169);">&nbsp;</span
></td><td id="169"><a href="#169">169</a></td></tr
><tr id="gr_svn42_170"

 onmouseover="gutterOver(170)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',170);">&nbsp;</span
></td><td id="170"><a href="#170">170</a></td></tr
><tr id="gr_svn42_171"

 onmouseover="gutterOver(171)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',171);">&nbsp;</span
></td><td id="171"><a href="#171">171</a></td></tr
><tr id="gr_svn42_172"

 onmouseover="gutterOver(172)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',172);">&nbsp;</span
></td><td id="172"><a href="#172">172</a></td></tr
><tr id="gr_svn42_173"

 onmouseover="gutterOver(173)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',173);">&nbsp;</span
></td><td id="173"><a href="#173">173</a></td></tr
><tr id="gr_svn42_174"

 onmouseover="gutterOver(174)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',174);">&nbsp;</span
></td><td id="174"><a href="#174">174</a></td></tr
><tr id="gr_svn42_175"

 onmouseover="gutterOver(175)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',175);">&nbsp;</span
></td><td id="175"><a href="#175">175</a></td></tr
><tr id="gr_svn42_176"

 onmouseover="gutterOver(176)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',176);">&nbsp;</span
></td><td id="176"><a href="#176">176</a></td></tr
><tr id="gr_svn42_177"

 onmouseover="gutterOver(177)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',177);">&nbsp;</span
></td><td id="177"><a href="#177">177</a></td></tr
><tr id="gr_svn42_178"

 onmouseover="gutterOver(178)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',178);">&nbsp;</span
></td><td id="178"><a href="#178">178</a></td></tr
><tr id="gr_svn42_179"

 onmouseover="gutterOver(179)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',179);">&nbsp;</span
></td><td id="179"><a href="#179">179</a></td></tr
><tr id="gr_svn42_180"

 onmouseover="gutterOver(180)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',180);">&nbsp;</span
></td><td id="180"><a href="#180">180</a></td></tr
><tr id="gr_svn42_181"

 onmouseover="gutterOver(181)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',181);">&nbsp;</span
></td><td id="181"><a href="#181">181</a></td></tr
><tr id="gr_svn42_182"

 onmouseover="gutterOver(182)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',182);">&nbsp;</span
></td><td id="182"><a href="#182">182</a></td></tr
><tr id="gr_svn42_183"

 onmouseover="gutterOver(183)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',183);">&nbsp;</span
></td><td id="183"><a href="#183">183</a></td></tr
><tr id="gr_svn42_184"

 onmouseover="gutterOver(184)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',184);">&nbsp;</span
></td><td id="184"><a href="#184">184</a></td></tr
><tr id="gr_svn42_185"

 onmouseover="gutterOver(185)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',185);">&nbsp;</span
></td><td id="185"><a href="#185">185</a></td></tr
><tr id="gr_svn42_186"

 onmouseover="gutterOver(186)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',186);">&nbsp;</span
></td><td id="186"><a href="#186">186</a></td></tr
><tr id="gr_svn42_187"

 onmouseover="gutterOver(187)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',187);">&nbsp;</span
></td><td id="187"><a href="#187">187</a></td></tr
><tr id="gr_svn42_188"

 onmouseover="gutterOver(188)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',188);">&nbsp;</span
></td><td id="188"><a href="#188">188</a></td></tr
><tr id="gr_svn42_189"

 onmouseover="gutterOver(189)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',189);">&nbsp;</span
></td><td id="189"><a href="#189">189</a></td></tr
><tr id="gr_svn42_190"

 onmouseover="gutterOver(190)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',190);">&nbsp;</span
></td><td id="190"><a href="#190">190</a></td></tr
><tr id="gr_svn42_191"

 onmouseover="gutterOver(191)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',191);">&nbsp;</span
></td><td id="191"><a href="#191">191</a></td></tr
><tr id="gr_svn42_192"

 onmouseover="gutterOver(192)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',192);">&nbsp;</span
></td><td id="192"><a href="#192">192</a></td></tr
><tr id="gr_svn42_193"

 onmouseover="gutterOver(193)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',193);">&nbsp;</span
></td><td id="193"><a href="#193">193</a></td></tr
><tr id="gr_svn42_194"

 onmouseover="gutterOver(194)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',194);">&nbsp;</span
></td><td id="194"><a href="#194">194</a></td></tr
><tr id="gr_svn42_195"

 onmouseover="gutterOver(195)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',195);">&nbsp;</span
></td><td id="195"><a href="#195">195</a></td></tr
><tr id="gr_svn42_196"

 onmouseover="gutterOver(196)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',196);">&nbsp;</span
></td><td id="196"><a href="#196">196</a></td></tr
><tr id="gr_svn42_197"

 onmouseover="gutterOver(197)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',197);">&nbsp;</span
></td><td id="197"><a href="#197">197</a></td></tr
><tr id="gr_svn42_198"

 onmouseover="gutterOver(198)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',198);">&nbsp;</span
></td><td id="198"><a href="#198">198</a></td></tr
><tr id="gr_svn42_199"

 onmouseover="gutterOver(199)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',199);">&nbsp;</span
></td><td id="199"><a href="#199">199</a></td></tr
><tr id="gr_svn42_200"

 onmouseover="gutterOver(200)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',200);">&nbsp;</span
></td><td id="200"><a href="#200">200</a></td></tr
><tr id="gr_svn42_201"

 onmouseover="gutterOver(201)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',201);">&nbsp;</span
></td><td id="201"><a href="#201">201</a></td></tr
><tr id="gr_svn42_202"

 onmouseover="gutterOver(202)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',202);">&nbsp;</span
></td><td id="202"><a href="#202">202</a></td></tr
><tr id="gr_svn42_203"

 onmouseover="gutterOver(203)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',203);">&nbsp;</span
></td><td id="203"><a href="#203">203</a></td></tr
><tr id="gr_svn42_204"

 onmouseover="gutterOver(204)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',204);">&nbsp;</span
></td><td id="204"><a href="#204">204</a></td></tr
><tr id="gr_svn42_205"

 onmouseover="gutterOver(205)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',205);">&nbsp;</span
></td><td id="205"><a href="#205">205</a></td></tr
><tr id="gr_svn42_206"

 onmouseover="gutterOver(206)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',206);">&nbsp;</span
></td><td id="206"><a href="#206">206</a></td></tr
><tr id="gr_svn42_207"

 onmouseover="gutterOver(207)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',207);">&nbsp;</span
></td><td id="207"><a href="#207">207</a></td></tr
><tr id="gr_svn42_208"

 onmouseover="gutterOver(208)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',208);">&nbsp;</span
></td><td id="208"><a href="#208">208</a></td></tr
><tr id="gr_svn42_209"

 onmouseover="gutterOver(209)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',209);">&nbsp;</span
></td><td id="209"><a href="#209">209</a></td></tr
><tr id="gr_svn42_210"

 onmouseover="gutterOver(210)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',210);">&nbsp;</span
></td><td id="210"><a href="#210">210</a></td></tr
><tr id="gr_svn42_211"

 onmouseover="gutterOver(211)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',211);">&nbsp;</span
></td><td id="211"><a href="#211">211</a></td></tr
><tr id="gr_svn42_212"

 onmouseover="gutterOver(212)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',212);">&nbsp;</span
></td><td id="212"><a href="#212">212</a></td></tr
><tr id="gr_svn42_213"

 onmouseover="gutterOver(213)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',213);">&nbsp;</span
></td><td id="213"><a href="#213">213</a></td></tr
><tr id="gr_svn42_214"

 onmouseover="gutterOver(214)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',214);">&nbsp;</span
></td><td id="214"><a href="#214">214</a></td></tr
><tr id="gr_svn42_215"

 onmouseover="gutterOver(215)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',215);">&nbsp;</span
></td><td id="215"><a href="#215">215</a></td></tr
><tr id="gr_svn42_216"

 onmouseover="gutterOver(216)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',216);">&nbsp;</span
></td><td id="216"><a href="#216">216</a></td></tr
><tr id="gr_svn42_217"

 onmouseover="gutterOver(217)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',217);">&nbsp;</span
></td><td id="217"><a href="#217">217</a></td></tr
><tr id="gr_svn42_218"

 onmouseover="gutterOver(218)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',218);">&nbsp;</span
></td><td id="218"><a href="#218">218</a></td></tr
><tr id="gr_svn42_219"

 onmouseover="gutterOver(219)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',219);">&nbsp;</span
></td><td id="219"><a href="#219">219</a></td></tr
><tr id="gr_svn42_220"

 onmouseover="gutterOver(220)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',220);">&nbsp;</span
></td><td id="220"><a href="#220">220</a></td></tr
><tr id="gr_svn42_221"

 onmouseover="gutterOver(221)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',221);">&nbsp;</span
></td><td id="221"><a href="#221">221</a></td></tr
><tr id="gr_svn42_222"

 onmouseover="gutterOver(222)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',222);">&nbsp;</span
></td><td id="222"><a href="#222">222</a></td></tr
><tr id="gr_svn42_223"

 onmouseover="gutterOver(223)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',223);">&nbsp;</span
></td><td id="223"><a href="#223">223</a></td></tr
><tr id="gr_svn42_224"

 onmouseover="gutterOver(224)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',224);">&nbsp;</span
></td><td id="224"><a href="#224">224</a></td></tr
><tr id="gr_svn42_225"

 onmouseover="gutterOver(225)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',225);">&nbsp;</span
></td><td id="225"><a href="#225">225</a></td></tr
><tr id="gr_svn42_226"

 onmouseover="gutterOver(226)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',226);">&nbsp;</span
></td><td id="226"><a href="#226">226</a></td></tr
><tr id="gr_svn42_227"

 onmouseover="gutterOver(227)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',227);">&nbsp;</span
></td><td id="227"><a href="#227">227</a></td></tr
><tr id="gr_svn42_228"

 onmouseover="gutterOver(228)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',228);">&nbsp;</span
></td><td id="228"><a href="#228">228</a></td></tr
><tr id="gr_svn42_229"

 onmouseover="gutterOver(229)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',229);">&nbsp;</span
></td><td id="229"><a href="#229">229</a></td></tr
><tr id="gr_svn42_230"

 onmouseover="gutterOver(230)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',230);">&nbsp;</span
></td><td id="230"><a href="#230">230</a></td></tr
><tr id="gr_svn42_231"

 onmouseover="gutterOver(231)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',231);">&nbsp;</span
></td><td id="231"><a href="#231">231</a></td></tr
><tr id="gr_svn42_232"

 onmouseover="gutterOver(232)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',232);">&nbsp;</span
></td><td id="232"><a href="#232">232</a></td></tr
><tr id="gr_svn42_233"

 onmouseover="gutterOver(233)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',233);">&nbsp;</span
></td><td id="233"><a href="#233">233</a></td></tr
><tr id="gr_svn42_234"

 onmouseover="gutterOver(234)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',234);">&nbsp;</span
></td><td id="234"><a href="#234">234</a></td></tr
><tr id="gr_svn42_235"

 onmouseover="gutterOver(235)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',235);">&nbsp;</span
></td><td id="235"><a href="#235">235</a></td></tr
><tr id="gr_svn42_236"

 onmouseover="gutterOver(236)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',236);">&nbsp;</span
></td><td id="236"><a href="#236">236</a></td></tr
><tr id="gr_svn42_237"

 onmouseover="gutterOver(237)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',237);">&nbsp;</span
></td><td id="237"><a href="#237">237</a></td></tr
><tr id="gr_svn42_238"

 onmouseover="gutterOver(238)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',238);">&nbsp;</span
></td><td id="238"><a href="#238">238</a></td></tr
><tr id="gr_svn42_239"

 onmouseover="gutterOver(239)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',239);">&nbsp;</span
></td><td id="239"><a href="#239">239</a></td></tr
><tr id="gr_svn42_240"

 onmouseover="gutterOver(240)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',240);">&nbsp;</span
></td><td id="240"><a href="#240">240</a></td></tr
><tr id="gr_svn42_241"

 onmouseover="gutterOver(241)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',241);">&nbsp;</span
></td><td id="241"><a href="#241">241</a></td></tr
><tr id="gr_svn42_242"

 onmouseover="gutterOver(242)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',242);">&nbsp;</span
></td><td id="242"><a href="#242">242</a></td></tr
><tr id="gr_svn42_243"

 onmouseover="gutterOver(243)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',243);">&nbsp;</span
></td><td id="243"><a href="#243">243</a></td></tr
><tr id="gr_svn42_244"

 onmouseover="gutterOver(244)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',244);">&nbsp;</span
></td><td id="244"><a href="#244">244</a></td></tr
><tr id="gr_svn42_245"

 onmouseover="gutterOver(245)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',245);">&nbsp;</span
></td><td id="245"><a href="#245">245</a></td></tr
><tr id="gr_svn42_246"

 onmouseover="gutterOver(246)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',246);">&nbsp;</span
></td><td id="246"><a href="#246">246</a></td></tr
><tr id="gr_svn42_247"

 onmouseover="gutterOver(247)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',247);">&nbsp;</span
></td><td id="247"><a href="#247">247</a></td></tr
><tr id="gr_svn42_248"

 onmouseover="gutterOver(248)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',248);">&nbsp;</span
></td><td id="248"><a href="#248">248</a></td></tr
><tr id="gr_svn42_249"

 onmouseover="gutterOver(249)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',249);">&nbsp;</span
></td><td id="249"><a href="#249">249</a></td></tr
><tr id="gr_svn42_250"

 onmouseover="gutterOver(250)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',250);">&nbsp;</span
></td><td id="250"><a href="#250">250</a></td></tr
><tr id="gr_svn42_251"

 onmouseover="gutterOver(251)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',251);">&nbsp;</span
></td><td id="251"><a href="#251">251</a></td></tr
><tr id="gr_svn42_252"

 onmouseover="gutterOver(252)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',252);">&nbsp;</span
></td><td id="252"><a href="#252">252</a></td></tr
><tr id="gr_svn42_253"

 onmouseover="gutterOver(253)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',253);">&nbsp;</span
></td><td id="253"><a href="#253">253</a></td></tr
><tr id="gr_svn42_254"

 onmouseover="gutterOver(254)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',254);">&nbsp;</span
></td><td id="254"><a href="#254">254</a></td></tr
><tr id="gr_svn42_255"

 onmouseover="gutterOver(255)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',255);">&nbsp;</span
></td><td id="255"><a href="#255">255</a></td></tr
><tr id="gr_svn42_256"

 onmouseover="gutterOver(256)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',256);">&nbsp;</span
></td><td id="256"><a href="#256">256</a></td></tr
><tr id="gr_svn42_257"

 onmouseover="gutterOver(257)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',257);">&nbsp;</span
></td><td id="257"><a href="#257">257</a></td></tr
><tr id="gr_svn42_258"

 onmouseover="gutterOver(258)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',258);">&nbsp;</span
></td><td id="258"><a href="#258">258</a></td></tr
><tr id="gr_svn42_259"

 onmouseover="gutterOver(259)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',259);">&nbsp;</span
></td><td id="259"><a href="#259">259</a></td></tr
><tr id="gr_svn42_260"

 onmouseover="gutterOver(260)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',260);">&nbsp;</span
></td><td id="260"><a href="#260">260</a></td></tr
><tr id="gr_svn42_261"

 onmouseover="gutterOver(261)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',261);">&nbsp;</span
></td><td id="261"><a href="#261">261</a></td></tr
><tr id="gr_svn42_262"

 onmouseover="gutterOver(262)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',262);">&nbsp;</span
></td><td id="262"><a href="#262">262</a></td></tr
><tr id="gr_svn42_263"

 onmouseover="gutterOver(263)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',263);">&nbsp;</span
></td><td id="263"><a href="#263">263</a></td></tr
><tr id="gr_svn42_264"

 onmouseover="gutterOver(264)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',264);">&nbsp;</span
></td><td id="264"><a href="#264">264</a></td></tr
><tr id="gr_svn42_265"

 onmouseover="gutterOver(265)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',265);">&nbsp;</span
></td><td id="265"><a href="#265">265</a></td></tr
><tr id="gr_svn42_266"

 onmouseover="gutterOver(266)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',266);">&nbsp;</span
></td><td id="266"><a href="#266">266</a></td></tr
><tr id="gr_svn42_267"

 onmouseover="gutterOver(267)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',267);">&nbsp;</span
></td><td id="267"><a href="#267">267</a></td></tr
><tr id="gr_svn42_268"

 onmouseover="gutterOver(268)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',268);">&nbsp;</span
></td><td id="268"><a href="#268">268</a></td></tr
><tr id="gr_svn42_269"

 onmouseover="gutterOver(269)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',269);">&nbsp;</span
></td><td id="269"><a href="#269">269</a></td></tr
><tr id="gr_svn42_270"

 onmouseover="gutterOver(270)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',270);">&nbsp;</span
></td><td id="270"><a href="#270">270</a></td></tr
><tr id="gr_svn42_271"

 onmouseover="gutterOver(271)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',271);">&nbsp;</span
></td><td id="271"><a href="#271">271</a></td></tr
><tr id="gr_svn42_272"

 onmouseover="gutterOver(272)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',272);">&nbsp;</span
></td><td id="272"><a href="#272">272</a></td></tr
><tr id="gr_svn42_273"

 onmouseover="gutterOver(273)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',273);">&nbsp;</span
></td><td id="273"><a href="#273">273</a></td></tr
><tr id="gr_svn42_274"

 onmouseover="gutterOver(274)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',274);">&nbsp;</span
></td><td id="274"><a href="#274">274</a></td></tr
><tr id="gr_svn42_275"

 onmouseover="gutterOver(275)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',275);">&nbsp;</span
></td><td id="275"><a href="#275">275</a></td></tr
><tr id="gr_svn42_276"

 onmouseover="gutterOver(276)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',276);">&nbsp;</span
></td><td id="276"><a href="#276">276</a></td></tr
><tr id="gr_svn42_277"

 onmouseover="gutterOver(277)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',277);">&nbsp;</span
></td><td id="277"><a href="#277">277</a></td></tr
><tr id="gr_svn42_278"

 onmouseover="gutterOver(278)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',278);">&nbsp;</span
></td><td id="278"><a href="#278">278</a></td></tr
><tr id="gr_svn42_279"

 onmouseover="gutterOver(279)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',279);">&nbsp;</span
></td><td id="279"><a href="#279">279</a></td></tr
><tr id="gr_svn42_280"

 onmouseover="gutterOver(280)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',280);">&nbsp;</span
></td><td id="280"><a href="#280">280</a></td></tr
><tr id="gr_svn42_281"

 onmouseover="gutterOver(281)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',281);">&nbsp;</span
></td><td id="281"><a href="#281">281</a></td></tr
><tr id="gr_svn42_282"

 onmouseover="gutterOver(282)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',282);">&nbsp;</span
></td><td id="282"><a href="#282">282</a></td></tr
><tr id="gr_svn42_283"

 onmouseover="gutterOver(283)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',283);">&nbsp;</span
></td><td id="283"><a href="#283">283</a></td></tr
><tr id="gr_svn42_284"

 onmouseover="gutterOver(284)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',284);">&nbsp;</span
></td><td id="284"><a href="#284">284</a></td></tr
><tr id="gr_svn42_285"

 onmouseover="gutterOver(285)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',285);">&nbsp;</span
></td><td id="285"><a href="#285">285</a></td></tr
><tr id="gr_svn42_286"

 onmouseover="gutterOver(286)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',286);">&nbsp;</span
></td><td id="286"><a href="#286">286</a></td></tr
><tr id="gr_svn42_287"

 onmouseover="gutterOver(287)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',287);">&nbsp;</span
></td><td id="287"><a href="#287">287</a></td></tr
><tr id="gr_svn42_288"

 onmouseover="gutterOver(288)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',288);">&nbsp;</span
></td><td id="288"><a href="#288">288</a></td></tr
><tr id="gr_svn42_289"

 onmouseover="gutterOver(289)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',289);">&nbsp;</span
></td><td id="289"><a href="#289">289</a></td></tr
><tr id="gr_svn42_290"

 onmouseover="gutterOver(290)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',290);">&nbsp;</span
></td><td id="290"><a href="#290">290</a></td></tr
><tr id="gr_svn42_291"

 onmouseover="gutterOver(291)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',291);">&nbsp;</span
></td><td id="291"><a href="#291">291</a></td></tr
><tr id="gr_svn42_292"

 onmouseover="gutterOver(292)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',292);">&nbsp;</span
></td><td id="292"><a href="#292">292</a></td></tr
><tr id="gr_svn42_293"

 onmouseover="gutterOver(293)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',293);">&nbsp;</span
></td><td id="293"><a href="#293">293</a></td></tr
><tr id="gr_svn42_294"

 onmouseover="gutterOver(294)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',294);">&nbsp;</span
></td><td id="294"><a href="#294">294</a></td></tr
><tr id="gr_svn42_295"

 onmouseover="gutterOver(295)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',295);">&nbsp;</span
></td><td id="295"><a href="#295">295</a></td></tr
><tr id="gr_svn42_296"

 onmouseover="gutterOver(296)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',296);">&nbsp;</span
></td><td id="296"><a href="#296">296</a></td></tr
><tr id="gr_svn42_297"

 onmouseover="gutterOver(297)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',297);">&nbsp;</span
></td><td id="297"><a href="#297">297</a></td></tr
><tr id="gr_svn42_298"

 onmouseover="gutterOver(298)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',298);">&nbsp;</span
></td><td id="298"><a href="#298">298</a></td></tr
><tr id="gr_svn42_299"

 onmouseover="gutterOver(299)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',299);">&nbsp;</span
></td><td id="299"><a href="#299">299</a></td></tr
><tr id="gr_svn42_300"

 onmouseover="gutterOver(300)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',300);">&nbsp;</span
></td><td id="300"><a href="#300">300</a></td></tr
><tr id="gr_svn42_301"

 onmouseover="gutterOver(301)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',301);">&nbsp;</span
></td><td id="301"><a href="#301">301</a></td></tr
><tr id="gr_svn42_302"

 onmouseover="gutterOver(302)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',302);">&nbsp;</span
></td><td id="302"><a href="#302">302</a></td></tr
><tr id="gr_svn42_303"

 onmouseover="gutterOver(303)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',303);">&nbsp;</span
></td><td id="303"><a href="#303">303</a></td></tr
><tr id="gr_svn42_304"

 onmouseover="gutterOver(304)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',304);">&nbsp;</span
></td><td id="304"><a href="#304">304</a></td></tr
><tr id="gr_svn42_305"

 onmouseover="gutterOver(305)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',305);">&nbsp;</span
></td><td id="305"><a href="#305">305</a></td></tr
><tr id="gr_svn42_306"

 onmouseover="gutterOver(306)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',306);">&nbsp;</span
></td><td id="306"><a href="#306">306</a></td></tr
><tr id="gr_svn42_307"

 onmouseover="gutterOver(307)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',307);">&nbsp;</span
></td><td id="307"><a href="#307">307</a></td></tr
><tr id="gr_svn42_308"

 onmouseover="gutterOver(308)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',308);">&nbsp;</span
></td><td id="308"><a href="#308">308</a></td></tr
><tr id="gr_svn42_309"

 onmouseover="gutterOver(309)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',309);">&nbsp;</span
></td><td id="309"><a href="#309">309</a></td></tr
><tr id="gr_svn42_310"

 onmouseover="gutterOver(310)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',310);">&nbsp;</span
></td><td id="310"><a href="#310">310</a></td></tr
><tr id="gr_svn42_311"

 onmouseover="gutterOver(311)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',311);">&nbsp;</span
></td><td id="311"><a href="#311">311</a></td></tr
><tr id="gr_svn42_312"

 onmouseover="gutterOver(312)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',312);">&nbsp;</span
></td><td id="312"><a href="#312">312</a></td></tr
><tr id="gr_svn42_313"

 onmouseover="gutterOver(313)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',313);">&nbsp;</span
></td><td id="313"><a href="#313">313</a></td></tr
><tr id="gr_svn42_314"

 onmouseover="gutterOver(314)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',314);">&nbsp;</span
></td><td id="314"><a href="#314">314</a></td></tr
><tr id="gr_svn42_315"

 onmouseover="gutterOver(315)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',315);">&nbsp;</span
></td><td id="315"><a href="#315">315</a></td></tr
><tr id="gr_svn42_316"

 onmouseover="gutterOver(316)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',316);">&nbsp;</span
></td><td id="316"><a href="#316">316</a></td></tr
><tr id="gr_svn42_317"

 onmouseover="gutterOver(317)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',317);">&nbsp;</span
></td><td id="317"><a href="#317">317</a></td></tr
><tr id="gr_svn42_318"

 onmouseover="gutterOver(318)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',318);">&nbsp;</span
></td><td id="318"><a href="#318">318</a></td></tr
><tr id="gr_svn42_319"

 onmouseover="gutterOver(319)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',319);">&nbsp;</span
></td><td id="319"><a href="#319">319</a></td></tr
><tr id="gr_svn42_320"

 onmouseover="gutterOver(320)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',320);">&nbsp;</span
></td><td id="320"><a href="#320">320</a></td></tr
><tr id="gr_svn42_321"

 onmouseover="gutterOver(321)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',321);">&nbsp;</span
></td><td id="321"><a href="#321">321</a></td></tr
><tr id="gr_svn42_322"

 onmouseover="gutterOver(322)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',322);">&nbsp;</span
></td><td id="322"><a href="#322">322</a></td></tr
><tr id="gr_svn42_323"

 onmouseover="gutterOver(323)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',323);">&nbsp;</span
></td><td id="323"><a href="#323">323</a></td></tr
><tr id="gr_svn42_324"

 onmouseover="gutterOver(324)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',324);">&nbsp;</span
></td><td id="324"><a href="#324">324</a></td></tr
><tr id="gr_svn42_325"

 onmouseover="gutterOver(325)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',325);">&nbsp;</span
></td><td id="325"><a href="#325">325</a></td></tr
><tr id="gr_svn42_326"

 onmouseover="gutterOver(326)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',326);">&nbsp;</span
></td><td id="326"><a href="#326">326</a></td></tr
><tr id="gr_svn42_327"

 onmouseover="gutterOver(327)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',327);">&nbsp;</span
></td><td id="327"><a href="#327">327</a></td></tr
><tr id="gr_svn42_328"

 onmouseover="gutterOver(328)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',328);">&nbsp;</span
></td><td id="328"><a href="#328">328</a></td></tr
><tr id="gr_svn42_329"

 onmouseover="gutterOver(329)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',329);">&nbsp;</span
></td><td id="329"><a href="#329">329</a></td></tr
><tr id="gr_svn42_330"

 onmouseover="gutterOver(330)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',330);">&nbsp;</span
></td><td id="330"><a href="#330">330</a></td></tr
><tr id="gr_svn42_331"

 onmouseover="gutterOver(331)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',331);">&nbsp;</span
></td><td id="331"><a href="#331">331</a></td></tr
><tr id="gr_svn42_332"

 onmouseover="gutterOver(332)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',332);">&nbsp;</span
></td><td id="332"><a href="#332">332</a></td></tr
><tr id="gr_svn42_333"

 onmouseover="gutterOver(333)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',333);">&nbsp;</span
></td><td id="333"><a href="#333">333</a></td></tr
><tr id="gr_svn42_334"

 onmouseover="gutterOver(334)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',334);">&nbsp;</span
></td><td id="334"><a href="#334">334</a></td></tr
><tr id="gr_svn42_335"

 onmouseover="gutterOver(335)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',335);">&nbsp;</span
></td><td id="335"><a href="#335">335</a></td></tr
><tr id="gr_svn42_336"

 onmouseover="gutterOver(336)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',336);">&nbsp;</span
></td><td id="336"><a href="#336">336</a></td></tr
><tr id="gr_svn42_337"

 onmouseover="gutterOver(337)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',337);">&nbsp;</span
></td><td id="337"><a href="#337">337</a></td></tr
><tr id="gr_svn42_338"

 onmouseover="gutterOver(338)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',338);">&nbsp;</span
></td><td id="338"><a href="#338">338</a></td></tr
><tr id="gr_svn42_339"

 onmouseover="gutterOver(339)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',339);">&nbsp;</span
></td><td id="339"><a href="#339">339</a></td></tr
><tr id="gr_svn42_340"

 onmouseover="gutterOver(340)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',340);">&nbsp;</span
></td><td id="340"><a href="#340">340</a></td></tr
><tr id="gr_svn42_341"

 onmouseover="gutterOver(341)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',341);">&nbsp;</span
></td><td id="341"><a href="#341">341</a></td></tr
><tr id="gr_svn42_342"

 onmouseover="gutterOver(342)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',342);">&nbsp;</span
></td><td id="342"><a href="#342">342</a></td></tr
><tr id="gr_svn42_343"

 onmouseover="gutterOver(343)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',343);">&nbsp;</span
></td><td id="343"><a href="#343">343</a></td></tr
><tr id="gr_svn42_344"

 onmouseover="gutterOver(344)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',344);">&nbsp;</span
></td><td id="344"><a href="#344">344</a></td></tr
><tr id="gr_svn42_345"

 onmouseover="gutterOver(345)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',345);">&nbsp;</span
></td><td id="345"><a href="#345">345</a></td></tr
><tr id="gr_svn42_346"

 onmouseover="gutterOver(346)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',346);">&nbsp;</span
></td><td id="346"><a href="#346">346</a></td></tr
><tr id="gr_svn42_347"

 onmouseover="gutterOver(347)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',347);">&nbsp;</span
></td><td id="347"><a href="#347">347</a></td></tr
><tr id="gr_svn42_348"

 onmouseover="gutterOver(348)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',348);">&nbsp;</span
></td><td id="348"><a href="#348">348</a></td></tr
><tr id="gr_svn42_349"

 onmouseover="gutterOver(349)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',349);">&nbsp;</span
></td><td id="349"><a href="#349">349</a></td></tr
><tr id="gr_svn42_350"

 onmouseover="gutterOver(350)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',350);">&nbsp;</span
></td><td id="350"><a href="#350">350</a></td></tr
><tr id="gr_svn42_351"

 onmouseover="gutterOver(351)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',351);">&nbsp;</span
></td><td id="351"><a href="#351">351</a></td></tr
><tr id="gr_svn42_352"

 onmouseover="gutterOver(352)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',352);">&nbsp;</span
></td><td id="352"><a href="#352">352</a></td></tr
><tr id="gr_svn42_353"

 onmouseover="gutterOver(353)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',353);">&nbsp;</span
></td><td id="353"><a href="#353">353</a></td></tr
><tr id="gr_svn42_354"

 onmouseover="gutterOver(354)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',354);">&nbsp;</span
></td><td id="354"><a href="#354">354</a></td></tr
><tr id="gr_svn42_355"

 onmouseover="gutterOver(355)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',355);">&nbsp;</span
></td><td id="355"><a href="#355">355</a></td></tr
><tr id="gr_svn42_356"

 onmouseover="gutterOver(356)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',356);">&nbsp;</span
></td><td id="356"><a href="#356">356</a></td></tr
><tr id="gr_svn42_357"

 onmouseover="gutterOver(357)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',357);">&nbsp;</span
></td><td id="357"><a href="#357">357</a></td></tr
><tr id="gr_svn42_358"

 onmouseover="gutterOver(358)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',358);">&nbsp;</span
></td><td id="358"><a href="#358">358</a></td></tr
><tr id="gr_svn42_359"

 onmouseover="gutterOver(359)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',359);">&nbsp;</span
></td><td id="359"><a href="#359">359</a></td></tr
><tr id="gr_svn42_360"

 onmouseover="gutterOver(360)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',360);">&nbsp;</span
></td><td id="360"><a href="#360">360</a></td></tr
><tr id="gr_svn42_361"

 onmouseover="gutterOver(361)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',361);">&nbsp;</span
></td><td id="361"><a href="#361">361</a></td></tr
><tr id="gr_svn42_362"

 onmouseover="gutterOver(362)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',362);">&nbsp;</span
></td><td id="362"><a href="#362">362</a></td></tr
><tr id="gr_svn42_363"

 onmouseover="gutterOver(363)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',363);">&nbsp;</span
></td><td id="363"><a href="#363">363</a></td></tr
><tr id="gr_svn42_364"

 onmouseover="gutterOver(364)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',364);">&nbsp;</span
></td><td id="364"><a href="#364">364</a></td></tr
><tr id="gr_svn42_365"

 onmouseover="gutterOver(365)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',365);">&nbsp;</span
></td><td id="365"><a href="#365">365</a></td></tr
><tr id="gr_svn42_366"

 onmouseover="gutterOver(366)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',366);">&nbsp;</span
></td><td id="366"><a href="#366">366</a></td></tr
><tr id="gr_svn42_367"

 onmouseover="gutterOver(367)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',367);">&nbsp;</span
></td><td id="367"><a href="#367">367</a></td></tr
><tr id="gr_svn42_368"

 onmouseover="gutterOver(368)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',368);">&nbsp;</span
></td><td id="368"><a href="#368">368</a></td></tr
><tr id="gr_svn42_369"

 onmouseover="gutterOver(369)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',369);">&nbsp;</span
></td><td id="369"><a href="#369">369</a></td></tr
><tr id="gr_svn42_370"

 onmouseover="gutterOver(370)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',370);">&nbsp;</span
></td><td id="370"><a href="#370">370</a></td></tr
><tr id="gr_svn42_371"

 onmouseover="gutterOver(371)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',371);">&nbsp;</span
></td><td id="371"><a href="#371">371</a></td></tr
><tr id="gr_svn42_372"

 onmouseover="gutterOver(372)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',372);">&nbsp;</span
></td><td id="372"><a href="#372">372</a></td></tr
><tr id="gr_svn42_373"

 onmouseover="gutterOver(373)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',373);">&nbsp;</span
></td><td id="373"><a href="#373">373</a></td></tr
><tr id="gr_svn42_374"

 onmouseover="gutterOver(374)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',374);">&nbsp;</span
></td><td id="374"><a href="#374">374</a></td></tr
><tr id="gr_svn42_375"

 onmouseover="gutterOver(375)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',375);">&nbsp;</span
></td><td id="375"><a href="#375">375</a></td></tr
><tr id="gr_svn42_376"

 onmouseover="gutterOver(376)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',376);">&nbsp;</span
></td><td id="376"><a href="#376">376</a></td></tr
><tr id="gr_svn42_377"

 onmouseover="gutterOver(377)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',377);">&nbsp;</span
></td><td id="377"><a href="#377">377</a></td></tr
><tr id="gr_svn42_378"

 onmouseover="gutterOver(378)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',378);">&nbsp;</span
></td><td id="378"><a href="#378">378</a></td></tr
><tr id="gr_svn42_379"

 onmouseover="gutterOver(379)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',379);">&nbsp;</span
></td><td id="379"><a href="#379">379</a></td></tr
><tr id="gr_svn42_380"

 onmouseover="gutterOver(380)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',380);">&nbsp;</span
></td><td id="380"><a href="#380">380</a></td></tr
><tr id="gr_svn42_381"

 onmouseover="gutterOver(381)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',381);">&nbsp;</span
></td><td id="381"><a href="#381">381</a></td></tr
><tr id="gr_svn42_382"

 onmouseover="gutterOver(382)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',382);">&nbsp;</span
></td><td id="382"><a href="#382">382</a></td></tr
><tr id="gr_svn42_383"

 onmouseover="gutterOver(383)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',383);">&nbsp;</span
></td><td id="383"><a href="#383">383</a></td></tr
><tr id="gr_svn42_384"

 onmouseover="gutterOver(384)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',384);">&nbsp;</span
></td><td id="384"><a href="#384">384</a></td></tr
><tr id="gr_svn42_385"

 onmouseover="gutterOver(385)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',385);">&nbsp;</span
></td><td id="385"><a href="#385">385</a></td></tr
><tr id="gr_svn42_386"

 onmouseover="gutterOver(386)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',386);">&nbsp;</span
></td><td id="386"><a href="#386">386</a></td></tr
><tr id="gr_svn42_387"

 onmouseover="gutterOver(387)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',387);">&nbsp;</span
></td><td id="387"><a href="#387">387</a></td></tr
><tr id="gr_svn42_388"

 onmouseover="gutterOver(388)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',388);">&nbsp;</span
></td><td id="388"><a href="#388">388</a></td></tr
><tr id="gr_svn42_389"

 onmouseover="gutterOver(389)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',389);">&nbsp;</span
></td><td id="389"><a href="#389">389</a></td></tr
><tr id="gr_svn42_390"

 onmouseover="gutterOver(390)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',390);">&nbsp;</span
></td><td id="390"><a href="#390">390</a></td></tr
><tr id="gr_svn42_391"

 onmouseover="gutterOver(391)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',391);">&nbsp;</span
></td><td id="391"><a href="#391">391</a></td></tr
><tr id="gr_svn42_392"

 onmouseover="gutterOver(392)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',392);">&nbsp;</span
></td><td id="392"><a href="#392">392</a></td></tr
><tr id="gr_svn42_393"

 onmouseover="gutterOver(393)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',393);">&nbsp;</span
></td><td id="393"><a href="#393">393</a></td></tr
><tr id="gr_svn42_394"

 onmouseover="gutterOver(394)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',394);">&nbsp;</span
></td><td id="394"><a href="#394">394</a></td></tr
><tr id="gr_svn42_395"

 onmouseover="gutterOver(395)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',395);">&nbsp;</span
></td><td id="395"><a href="#395">395</a></td></tr
><tr id="gr_svn42_396"

 onmouseover="gutterOver(396)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',396);">&nbsp;</span
></td><td id="396"><a href="#396">396</a></td></tr
><tr id="gr_svn42_397"

 onmouseover="gutterOver(397)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',397);">&nbsp;</span
></td><td id="397"><a href="#397">397</a></td></tr
><tr id="gr_svn42_398"

 onmouseover="gutterOver(398)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',398);">&nbsp;</span
></td><td id="398"><a href="#398">398</a></td></tr
><tr id="gr_svn42_399"

 onmouseover="gutterOver(399)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',399);">&nbsp;</span
></td><td id="399"><a href="#399">399</a></td></tr
><tr id="gr_svn42_400"

 onmouseover="gutterOver(400)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',400);">&nbsp;</span
></td><td id="400"><a href="#400">400</a></td></tr
><tr id="gr_svn42_401"

 onmouseover="gutterOver(401)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',401);">&nbsp;</span
></td><td id="401"><a href="#401">401</a></td></tr
><tr id="gr_svn42_402"

 onmouseover="gutterOver(402)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',402);">&nbsp;</span
></td><td id="402"><a href="#402">402</a></td></tr
><tr id="gr_svn42_403"

 onmouseover="gutterOver(403)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',403);">&nbsp;</span
></td><td id="403"><a href="#403">403</a></td></tr
><tr id="gr_svn42_404"

 onmouseover="gutterOver(404)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',404);">&nbsp;</span
></td><td id="404"><a href="#404">404</a></td></tr
><tr id="gr_svn42_405"

 onmouseover="gutterOver(405)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',405);">&nbsp;</span
></td><td id="405"><a href="#405">405</a></td></tr
><tr id="gr_svn42_406"

 onmouseover="gutterOver(406)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',406);">&nbsp;</span
></td><td id="406"><a href="#406">406</a></td></tr
><tr id="gr_svn42_407"

 onmouseover="gutterOver(407)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',407);">&nbsp;</span
></td><td id="407"><a href="#407">407</a></td></tr
><tr id="gr_svn42_408"

 onmouseover="gutterOver(408)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',408);">&nbsp;</span
></td><td id="408"><a href="#408">408</a></td></tr
><tr id="gr_svn42_409"

 onmouseover="gutterOver(409)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',409);">&nbsp;</span
></td><td id="409"><a href="#409">409</a></td></tr
><tr id="gr_svn42_410"

 onmouseover="gutterOver(410)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',410);">&nbsp;</span
></td><td id="410"><a href="#410">410</a></td></tr
><tr id="gr_svn42_411"

 onmouseover="gutterOver(411)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',411);">&nbsp;</span
></td><td id="411"><a href="#411">411</a></td></tr
><tr id="gr_svn42_412"

 onmouseover="gutterOver(412)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',412);">&nbsp;</span
></td><td id="412"><a href="#412">412</a></td></tr
><tr id="gr_svn42_413"

 onmouseover="gutterOver(413)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',413);">&nbsp;</span
></td><td id="413"><a href="#413">413</a></td></tr
><tr id="gr_svn42_414"

 onmouseover="gutterOver(414)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',414);">&nbsp;</span
></td><td id="414"><a href="#414">414</a></td></tr
><tr id="gr_svn42_415"

 onmouseover="gutterOver(415)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',415);">&nbsp;</span
></td><td id="415"><a href="#415">415</a></td></tr
><tr id="gr_svn42_416"

 onmouseover="gutterOver(416)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',416);">&nbsp;</span
></td><td id="416"><a href="#416">416</a></td></tr
><tr id="gr_svn42_417"

 onmouseover="gutterOver(417)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',417);">&nbsp;</span
></td><td id="417"><a href="#417">417</a></td></tr
><tr id="gr_svn42_418"

 onmouseover="gutterOver(418)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',418);">&nbsp;</span
></td><td id="418"><a href="#418">418</a></td></tr
><tr id="gr_svn42_419"

 onmouseover="gutterOver(419)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',419);">&nbsp;</span
></td><td id="419"><a href="#419">419</a></td></tr
><tr id="gr_svn42_420"

 onmouseover="gutterOver(420)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',420);">&nbsp;</span
></td><td id="420"><a href="#420">420</a></td></tr
><tr id="gr_svn42_421"

 onmouseover="gutterOver(421)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',421);">&nbsp;</span
></td><td id="421"><a href="#421">421</a></td></tr
><tr id="gr_svn42_422"

 onmouseover="gutterOver(422)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',422);">&nbsp;</span
></td><td id="422"><a href="#422">422</a></td></tr
><tr id="gr_svn42_423"

 onmouseover="gutterOver(423)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',423);">&nbsp;</span
></td><td id="423"><a href="#423">423</a></td></tr
><tr id="gr_svn42_424"

 onmouseover="gutterOver(424)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',424);">&nbsp;</span
></td><td id="424"><a href="#424">424</a></td></tr
><tr id="gr_svn42_425"

 onmouseover="gutterOver(425)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',425);">&nbsp;</span
></td><td id="425"><a href="#425">425</a></td></tr
><tr id="gr_svn42_426"

 onmouseover="gutterOver(426)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',426);">&nbsp;</span
></td><td id="426"><a href="#426">426</a></td></tr
><tr id="gr_svn42_427"

 onmouseover="gutterOver(427)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',427);">&nbsp;</span
></td><td id="427"><a href="#427">427</a></td></tr
><tr id="gr_svn42_428"

 onmouseover="gutterOver(428)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',428);">&nbsp;</span
></td><td id="428"><a href="#428">428</a></td></tr
><tr id="gr_svn42_429"

 onmouseover="gutterOver(429)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',429);">&nbsp;</span
></td><td id="429"><a href="#429">429</a></td></tr
><tr id="gr_svn42_430"

 onmouseover="gutterOver(430)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',430);">&nbsp;</span
></td><td id="430"><a href="#430">430</a></td></tr
><tr id="gr_svn42_431"

 onmouseover="gutterOver(431)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',431);">&nbsp;</span
></td><td id="431"><a href="#431">431</a></td></tr
><tr id="gr_svn42_432"

 onmouseover="gutterOver(432)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',432);">&nbsp;</span
></td><td id="432"><a href="#432">432</a></td></tr
><tr id="gr_svn42_433"

 onmouseover="gutterOver(433)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',433);">&nbsp;</span
></td><td id="433"><a href="#433">433</a></td></tr
><tr id="gr_svn42_434"

 onmouseover="gutterOver(434)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',434);">&nbsp;</span
></td><td id="434"><a href="#434">434</a></td></tr
><tr id="gr_svn42_435"

 onmouseover="gutterOver(435)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',435);">&nbsp;</span
></td><td id="435"><a href="#435">435</a></td></tr
><tr id="gr_svn42_436"

 onmouseover="gutterOver(436)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',436);">&nbsp;</span
></td><td id="436"><a href="#436">436</a></td></tr
><tr id="gr_svn42_437"

 onmouseover="gutterOver(437)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',437);">&nbsp;</span
></td><td id="437"><a href="#437">437</a></td></tr
><tr id="gr_svn42_438"

 onmouseover="gutterOver(438)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',438);">&nbsp;</span
></td><td id="438"><a href="#438">438</a></td></tr
><tr id="gr_svn42_439"

 onmouseover="gutterOver(439)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',439);">&nbsp;</span
></td><td id="439"><a href="#439">439</a></td></tr
><tr id="gr_svn42_440"

 onmouseover="gutterOver(440)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',440);">&nbsp;</span
></td><td id="440"><a href="#440">440</a></td></tr
><tr id="gr_svn42_441"

 onmouseover="gutterOver(441)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',441);">&nbsp;</span
></td><td id="441"><a href="#441">441</a></td></tr
><tr id="gr_svn42_442"

 onmouseover="gutterOver(442)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',442);">&nbsp;</span
></td><td id="442"><a href="#442">442</a></td></tr
><tr id="gr_svn42_443"

 onmouseover="gutterOver(443)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',443);">&nbsp;</span
></td><td id="443"><a href="#443">443</a></td></tr
><tr id="gr_svn42_444"

 onmouseover="gutterOver(444)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',444);">&nbsp;</span
></td><td id="444"><a href="#444">444</a></td></tr
><tr id="gr_svn42_445"

 onmouseover="gutterOver(445)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',445);">&nbsp;</span
></td><td id="445"><a href="#445">445</a></td></tr
><tr id="gr_svn42_446"

 onmouseover="gutterOver(446)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',446);">&nbsp;</span
></td><td id="446"><a href="#446">446</a></td></tr
><tr id="gr_svn42_447"

 onmouseover="gutterOver(447)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',447);">&nbsp;</span
></td><td id="447"><a href="#447">447</a></td></tr
><tr id="gr_svn42_448"

 onmouseover="gutterOver(448)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',448);">&nbsp;</span
></td><td id="448"><a href="#448">448</a></td></tr
><tr id="gr_svn42_449"

 onmouseover="gutterOver(449)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',449);">&nbsp;</span
></td><td id="449"><a href="#449">449</a></td></tr
><tr id="gr_svn42_450"

 onmouseover="gutterOver(450)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',450);">&nbsp;</span
></td><td id="450"><a href="#450">450</a></td></tr
><tr id="gr_svn42_451"

 onmouseover="gutterOver(451)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',451);">&nbsp;</span
></td><td id="451"><a href="#451">451</a></td></tr
><tr id="gr_svn42_452"

 onmouseover="gutterOver(452)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',452);">&nbsp;</span
></td><td id="452"><a href="#452">452</a></td></tr
><tr id="gr_svn42_453"

 onmouseover="gutterOver(453)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',453);">&nbsp;</span
></td><td id="453"><a href="#453">453</a></td></tr
><tr id="gr_svn42_454"

 onmouseover="gutterOver(454)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',454);">&nbsp;</span
></td><td id="454"><a href="#454">454</a></td></tr
><tr id="gr_svn42_455"

 onmouseover="gutterOver(455)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',455);">&nbsp;</span
></td><td id="455"><a href="#455">455</a></td></tr
><tr id="gr_svn42_456"

 onmouseover="gutterOver(456)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',456);">&nbsp;</span
></td><td id="456"><a href="#456">456</a></td></tr
><tr id="gr_svn42_457"

 onmouseover="gutterOver(457)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',457);">&nbsp;</span
></td><td id="457"><a href="#457">457</a></td></tr
><tr id="gr_svn42_458"

 onmouseover="gutterOver(458)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',458);">&nbsp;</span
></td><td id="458"><a href="#458">458</a></td></tr
><tr id="gr_svn42_459"

 onmouseover="gutterOver(459)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',459);">&nbsp;</span
></td><td id="459"><a href="#459">459</a></td></tr
><tr id="gr_svn42_460"

 onmouseover="gutterOver(460)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',460);">&nbsp;</span
></td><td id="460"><a href="#460">460</a></td></tr
><tr id="gr_svn42_461"

 onmouseover="gutterOver(461)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',461);">&nbsp;</span
></td><td id="461"><a href="#461">461</a></td></tr
><tr id="gr_svn42_462"

 onmouseover="gutterOver(462)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',462);">&nbsp;</span
></td><td id="462"><a href="#462">462</a></td></tr
><tr id="gr_svn42_463"

 onmouseover="gutterOver(463)"

><td><span title="Add comment" onclick="CR_startEdit('svn42',463);">&nbsp;</span
></td><td id="463"><a href="#463">463</a></td></tr
></table></pre>
<pre><table width="100%"><tr class="nocursor"><td></td></tr></table></pre>
</td>
<td id="lines">
<pre class="prettyprint"><table width="100%"><tr class="cursor_stop cursor_hidden"><td></td></tr></table></pre>
<pre class="prettyprint lang-js"><table id="src_table_0"><tr
id=sl_svn42_1

 onmouseover="gutterOver(1)"

><td class="source">/*<br></td></tr
><tr
id=sl_svn42_2

 onmouseover="gutterOver(2)"

><td class="source"> * --------------------------------------------------------------------<br></td></tr
><tr
id=sl_svn42_3

 onmouseover="gutterOver(3)"

><td class="source"> * jQuery inputToButton plugin<br></td></tr
><tr
id=sl_svn42_4

 onmouseover="gutterOver(4)"

><td class="source"> * Author: Scott Jehl, scott@filamentgroup.com<br></td></tr
><tr
id=sl_svn42_5

 onmouseover="gutterOver(5)"

><td class="source"> * Copyright (c) 2009 Filament Group <br></td></tr
><tr
id=sl_svn42_6

 onmouseover="gutterOver(6)"

><td class="source"> * licensed under MIT (filamentgroup.com/examples/mit-license.txt)<br></td></tr
><tr
id=sl_svn42_7

 onmouseover="gutterOver(7)"

><td class="source"> * --------------------------------------------------------------------<br></td></tr
><tr
id=sl_svn42_8

 onmouseover="gutterOver(8)"

><td class="source">*/<br></td></tr
><tr
id=sl_svn42_9

 onmouseover="gutterOver(9)"

><td class="source">(function($) { <br></td></tr
><tr
id=sl_svn42_10

 onmouseover="gutterOver(10)"

><td class="source">$.fn.visualize = function(options, container){<br></td></tr
><tr
id=sl_svn42_11

 onmouseover="gutterOver(11)"

><td class="source">	return $(this).each(function(){<br></td></tr
><tr
id=sl_svn42_12

 onmouseover="gutterOver(12)"

><td class="source">		//configuration<br></td></tr
><tr
id=sl_svn42_13

 onmouseover="gutterOver(13)"

><td class="source">		var o = $.extend({<br></td></tr
><tr
id=sl_svn42_14

 onmouseover="gutterOver(14)"

><td class="source">			type: &#39;bar&#39;, //also available: area, pie, line<br></td></tr
><tr
id=sl_svn42_15

 onmouseover="gutterOver(15)"

><td class="source">			width: $(this).width(), //height of canvas - defaults to table height<br></td></tr
><tr
id=sl_svn42_16

 onmouseover="gutterOver(16)"

><td class="source">			height: $(this).height(), //height of canvas - defaults to table height<br></td></tr
><tr
id=sl_svn42_17

 onmouseover="gutterOver(17)"

><td class="source">			appendTitle: true, //table caption text is added to chart<br></td></tr
><tr
id=sl_svn42_18

 onmouseover="gutterOver(18)"

><td class="source">			title: null, //grabs from table caption if null<br></td></tr
><tr
id=sl_svn42_19

 onmouseover="gutterOver(19)"

><td class="source">			appendKey: true, //color key is added to chart<br></td></tr
><tr
id=sl_svn42_20

 onmouseover="gutterOver(20)"

><td class="source">			rowFilter: &#39; &#39;,<br></td></tr
><tr
id=sl_svn42_21

 onmouseover="gutterOver(21)"

><td class="source">			colFilter: &#39; &#39;,<br></td></tr
><tr
id=sl_svn42_22

 onmouseover="gutterOver(22)"

><td class="source">			colors: [&#39;#be1e2d&#39;,&#39;#666699&#39;,&#39;#92d5ea&#39;,&#39;#ee8310&#39;,&#39;#8d10ee&#39;,&#39;#5a3b16&#39;,&#39;#26a4ed&#39;,&#39;#f45a90&#39;,&#39;#e9e744&#39;],<br></td></tr
><tr
id=sl_svn42_23

 onmouseover="gutterOver(23)"

><td class="source">			textColors: [], //corresponds with colors array. null/undefined items will fall back to CSS<br></td></tr
><tr
id=sl_svn42_24

 onmouseover="gutterOver(24)"

><td class="source">			parseDirection: &#39;x&#39;, //which direction to parse the table data<br></td></tr
><tr
id=sl_svn42_25

 onmouseover="gutterOver(25)"

><td class="source">			pieMargin: 20, //pie charts only - spacing around pie<br></td></tr
><tr
id=sl_svn42_26

 onmouseover="gutterOver(26)"

><td class="source">			pieLabelsAsPercent: true,<br></td></tr
><tr
id=sl_svn42_27

 onmouseover="gutterOver(27)"

><td class="source">			pieLabelPos: &#39;inside&#39;,<br></td></tr
><tr
id=sl_svn42_28

 onmouseover="gutterOver(28)"

><td class="source">			lineWeight: 4, //for line and area - stroke weight<br></td></tr
><tr
id=sl_svn42_29

 onmouseover="gutterOver(29)"

><td class="source">			barGroupMargin: 10,<br></td></tr
><tr
id=sl_svn42_30

 onmouseover="gutterOver(30)"

><td class="source">			barMargin: 1, //space around bars in bar chart (added to both sides of bar)<br></td></tr
><tr
id=sl_svn42_31

 onmouseover="gutterOver(31)"

><td class="source">			yLabelInterval: 30 //distance between y labels<br></td></tr
><tr
id=sl_svn42_32

 onmouseover="gutterOver(32)"

><td class="source">		},options);<br></td></tr
><tr
id=sl_svn42_33

 onmouseover="gutterOver(33)"

><td class="source">		<br></td></tr
><tr
id=sl_svn42_34

 onmouseover="gutterOver(34)"

><td class="source">		//reset width, height to numbers<br></td></tr
><tr
id=sl_svn42_35

 onmouseover="gutterOver(35)"

><td class="source">		o.width = parseFloat(o.width);<br></td></tr
><tr
id=sl_svn42_36

 onmouseover="gutterOver(36)"

><td class="source">		o.height = parseFloat(o.height);<br></td></tr
><tr
id=sl_svn42_37

 onmouseover="gutterOver(37)"

><td class="source">		<br></td></tr
><tr
id=sl_svn42_38

 onmouseover="gutterOver(38)"

><td class="source">		<br></td></tr
><tr
id=sl_svn42_39

 onmouseover="gutterOver(39)"

><td class="source">		var self = $(this);<br></td></tr
><tr
id=sl_svn42_40

 onmouseover="gutterOver(40)"

><td class="source">		<br></td></tr
><tr
id=sl_svn42_41

 onmouseover="gutterOver(41)"

><td class="source">		//function to scrape data from html table<br></td></tr
><tr
id=sl_svn42_42

 onmouseover="gutterOver(42)"

><td class="source">		function scrapeTable(){<br></td></tr
><tr
id=sl_svn42_43

 onmouseover="gutterOver(43)"

><td class="source">			var colors = o.colors;<br></td></tr
><tr
id=sl_svn42_44

 onmouseover="gutterOver(44)"

><td class="source">			var textColors = o.textColors;<br></td></tr
><tr
id=sl_svn42_45

 onmouseover="gutterOver(45)"

><td class="source">			var tableData = {<br></td></tr
><tr
id=sl_svn42_46

 onmouseover="gutterOver(46)"

><td class="source">				dataGroups: function(){<br></td></tr
><tr
id=sl_svn42_47

 onmouseover="gutterOver(47)"

><td class="source">					var dataGroups = [];<br></td></tr
><tr
id=sl_svn42_48

 onmouseover="gutterOver(48)"

><td class="source">					if(o.parseDirection == &#39;x&#39;){<br></td></tr
><tr
id=sl_svn42_49

 onmouseover="gutterOver(49)"

><td class="source">						self.find(&#39;tr:gt(0)&#39;).filter(o.rowFilter).each(function(i){<br></td></tr
><tr
id=sl_svn42_50

 onmouseover="gutterOver(50)"

><td class="source">							dataGroups[i] = {};<br></td></tr
><tr
id=sl_svn42_51

 onmouseover="gutterOver(51)"

><td class="source">							dataGroups[i].points = [];<br></td></tr
><tr
id=sl_svn42_52

 onmouseover="gutterOver(52)"

><td class="source">							dataGroups[i].color = colors[i];<br></td></tr
><tr
id=sl_svn42_53

 onmouseover="gutterOver(53)"

><td class="source">							if(textColors[i]){ dataGroups[i].textColor = textColors[i]; }<br></td></tr
><tr
id=sl_svn42_54

 onmouseover="gutterOver(54)"

><td class="source">							$(this).find(&#39;td&#39;).filter(o.colFilter).each(function(){<br></td></tr
><tr
id=sl_svn42_55

 onmouseover="gutterOver(55)"

><td class="source">								dataGroups[i].points.push( parseFloat($(this).text()) );<br></td></tr
><tr
id=sl_svn42_56

 onmouseover="gutterOver(56)"

><td class="source">							});<br></td></tr
><tr
id=sl_svn42_57

 onmouseover="gutterOver(57)"

><td class="source">						});<br></td></tr
><tr
id=sl_svn42_58

 onmouseover="gutterOver(58)"

><td class="source">					}<br></td></tr
><tr
id=sl_svn42_59

 onmouseover="gutterOver(59)"

><td class="source">					else {<br></td></tr
><tr
id=sl_svn42_60

 onmouseover="gutterOver(60)"

><td class="source">						var cols = self.find(&#39;tr:eq(1) td&#39;).filter(o.colFilter).size();<br></td></tr
><tr
id=sl_svn42_61

 onmouseover="gutterOver(61)"

><td class="source">						for(var i=0; i&lt;cols; i++){<br></td></tr
><tr
id=sl_svn42_62

 onmouseover="gutterOver(62)"

><td class="source">							dataGroups[i] = {};<br></td></tr
><tr
id=sl_svn42_63

 onmouseover="gutterOver(63)"

><td class="source">							dataGroups[i].points = [];<br></td></tr
><tr
id=sl_svn42_64

 onmouseover="gutterOver(64)"

><td class="source">							dataGroups[i].color = colors[i];<br></td></tr
><tr
id=sl_svn42_65

 onmouseover="gutterOver(65)"

><td class="source">							if(textColors[i]){ dataGroups[i].textColor = textColors[i]; }<br></td></tr
><tr
id=sl_svn42_66

 onmouseover="gutterOver(66)"

><td class="source">							self.find(&#39;tr:gt(0)&#39;).filter(o.rowFilter).each(function(){<br></td></tr
><tr
id=sl_svn42_67

 onmouseover="gutterOver(67)"

><td class="source">								dataGroups[i].points.push( $(this).find(&#39;td&#39;).filter(o.colFilter).eq(i).text()*1 );<br></td></tr
><tr
id=sl_svn42_68

 onmouseover="gutterOver(68)"

><td class="source">							});<br></td></tr
><tr
id=sl_svn42_69

 onmouseover="gutterOver(69)"

><td class="source">						};<br></td></tr
><tr
id=sl_svn42_70

 onmouseover="gutterOver(70)"

><td class="source">					}<br></td></tr
><tr
id=sl_svn42_71

 onmouseover="gutterOver(71)"

><td class="source">					return dataGroups;<br></td></tr
><tr
id=sl_svn42_72

 onmouseover="gutterOver(72)"

><td class="source">				},<br></td></tr
><tr
id=sl_svn42_73

 onmouseover="gutterOver(73)"

><td class="source">				allData: function(){<br></td></tr
><tr
id=sl_svn42_74

 onmouseover="gutterOver(74)"

><td class="source">					var allData = [];<br></td></tr
><tr
id=sl_svn42_75

 onmouseover="gutterOver(75)"

><td class="source">					$(this.dataGroups()).each(function(){<br></td></tr
><tr
id=sl_svn42_76

 onmouseover="gutterOver(76)"

><td class="source">						allData.push(this.points);<br></td></tr
><tr
id=sl_svn42_77

 onmouseover="gutterOver(77)"

><td class="source">					});<br></td></tr
><tr
id=sl_svn42_78

 onmouseover="gutterOver(78)"

><td class="source">					return allData;<br></td></tr
><tr
id=sl_svn42_79

 onmouseover="gutterOver(79)"

><td class="source">				},<br></td></tr
><tr
id=sl_svn42_80

 onmouseover="gutterOver(80)"

><td class="source">				dataSum: function(){<br></td></tr
><tr
id=sl_svn42_81

 onmouseover="gutterOver(81)"

><td class="source">					var dataSum = 0;<br></td></tr
><tr
id=sl_svn42_82

 onmouseover="gutterOver(82)"

><td class="source">					var allData = this.allData().join(&#39;,&#39;).split(&#39;,&#39;);<br></td></tr
><tr
id=sl_svn42_83

 onmouseover="gutterOver(83)"

><td class="source">					$(allData).each(function(){<br></td></tr
><tr
id=sl_svn42_84

 onmouseover="gutterOver(84)"

><td class="source">						dataSum += parseFloat(this);<br></td></tr
><tr
id=sl_svn42_85

 onmouseover="gutterOver(85)"

><td class="source">					});<br></td></tr
><tr
id=sl_svn42_86

 onmouseover="gutterOver(86)"

><td class="source">					return dataSum<br></td></tr
><tr
id=sl_svn42_87

 onmouseover="gutterOver(87)"

><td class="source">				},	<br></td></tr
><tr
id=sl_svn42_88

 onmouseover="gutterOver(88)"

><td class="source">				topValue: function(){<br></td></tr
><tr
id=sl_svn42_89

 onmouseover="gutterOver(89)"

><td class="source">						var topValue = 0;<br></td></tr
><tr
id=sl_svn42_90

 onmouseover="gutterOver(90)"

><td class="source">						var allData = this.allData().join(&#39;,&#39;).split(&#39;,&#39;);<br></td></tr
><tr
id=sl_svn42_91

 onmouseover="gutterOver(91)"

><td class="source">						$(allData).each(function(){<br></td></tr
><tr
id=sl_svn42_92

 onmouseover="gutterOver(92)"

><td class="source">							if(parseFloat(this,10)&gt;topValue) topValue = parseFloat(this);<br></td></tr
><tr
id=sl_svn42_93

 onmouseover="gutterOver(93)"

><td class="source">						});<br></td></tr
><tr
id=sl_svn42_94

 onmouseover="gutterOver(94)"

><td class="source">						return topValue;<br></td></tr
><tr
id=sl_svn42_95

 onmouseover="gutterOver(95)"

><td class="source">				},<br></td></tr
><tr
id=sl_svn42_96

 onmouseover="gutterOver(96)"

><td class="source">				bottomValue: function(){<br></td></tr
><tr
id=sl_svn42_97

 onmouseover="gutterOver(97)"

><td class="source">						var bottomValue = 0;<br></td></tr
><tr
id=sl_svn42_98

 onmouseover="gutterOver(98)"

><td class="source">						var allData = this.allData().join(&#39;,&#39;).split(&#39;,&#39;);<br></td></tr
><tr
id=sl_svn42_99

 onmouseover="gutterOver(99)"

><td class="source">						$(allData).each(function(){<br></td></tr
><tr
id=sl_svn42_100

 onmouseover="gutterOver(100)"

><td class="source">							if(this&lt;bottomValue) bottomValue = parseFloat(this);<br></td></tr
><tr
id=sl_svn42_101

 onmouseover="gutterOver(101)"

><td class="source">						});<br></td></tr
><tr
id=sl_svn42_102

 onmouseover="gutterOver(102)"

><td class="source">						return bottomValue;<br></td></tr
><tr
id=sl_svn42_103

 onmouseover="gutterOver(103)"

><td class="source">				},<br></td></tr
><tr
id=sl_svn42_104

 onmouseover="gutterOver(104)"

><td class="source">				memberTotals: function(){<br></td></tr
><tr
id=sl_svn42_105

 onmouseover="gutterOver(105)"

><td class="source">					var memberTotals = [];<br></td></tr
><tr
id=sl_svn42_106

 onmouseover="gutterOver(106)"

><td class="source">					var dataGroups = this.dataGroups();<br></td></tr
><tr
id=sl_svn42_107

 onmouseover="gutterOver(107)"

><td class="source">					$(dataGroups).each(function(l){<br></td></tr
><tr
id=sl_svn42_108

 onmouseover="gutterOver(108)"

><td class="source">						var count = 0;<br></td></tr
><tr
id=sl_svn42_109

 onmouseover="gutterOver(109)"

><td class="source">						$(dataGroups[l].points).each(function(m){<br></td></tr
><tr
id=sl_svn42_110

 onmouseover="gutterOver(110)"

><td class="source">							count +=dataGroups[l].points[m];<br></td></tr
><tr
id=sl_svn42_111

 onmouseover="gutterOver(111)"

><td class="source">						});<br></td></tr
><tr
id=sl_svn42_112

 onmouseover="gutterOver(112)"

><td class="source">						memberTotals.push(count);<br></td></tr
><tr
id=sl_svn42_113

 onmouseover="gutterOver(113)"

><td class="source">					});<br></td></tr
><tr
id=sl_svn42_114

 onmouseover="gutterOver(114)"

><td class="source">					return memberTotals;<br></td></tr
><tr
id=sl_svn42_115

 onmouseover="gutterOver(115)"

><td class="source">				},<br></td></tr
><tr
id=sl_svn42_116

 onmouseover="gutterOver(116)"

><td class="source">				yTotals: function(){<br></td></tr
><tr
id=sl_svn42_117

 onmouseover="gutterOver(117)"

><td class="source">					var yTotals = [];<br></td></tr
><tr
id=sl_svn42_118

 onmouseover="gutterOver(118)"

><td class="source">					var dataGroups = this.dataGroups();<br></td></tr
><tr
id=sl_svn42_119

 onmouseover="gutterOver(119)"

><td class="source">					var loopLength = this.xLabels().length;<br></td></tr
><tr
id=sl_svn42_120

 onmouseover="gutterOver(120)"

><td class="source">					for(var i = 0; i&lt;loopLength; i++){<br></td></tr
><tr
id=sl_svn42_121

 onmouseover="gutterOver(121)"

><td class="source">						yTotals[i] =[];<br></td></tr
><tr
id=sl_svn42_122

 onmouseover="gutterOver(122)"

><td class="source">						var thisTotal = 0;<br></td></tr
><tr
id=sl_svn42_123

 onmouseover="gutterOver(123)"

><td class="source">						$(dataGroups).each(function(l){<br></td></tr
><tr
id=sl_svn42_124

 onmouseover="gutterOver(124)"

><td class="source">							yTotals[i].push(this.points[i]);<br></td></tr
><tr
id=sl_svn42_125

 onmouseover="gutterOver(125)"

><td class="source">						});<br></td></tr
><tr
id=sl_svn42_126

 onmouseover="gutterOver(126)"

><td class="source">						yTotals[i].join(&#39;,&#39;).split(&#39;,&#39;);<br></td></tr
><tr
id=sl_svn42_127

 onmouseover="gutterOver(127)"

><td class="source">						$(yTotals[i]).each(function(){<br></td></tr
><tr
id=sl_svn42_128

 onmouseover="gutterOver(128)"

><td class="source">							thisTotal += parseFloat(this);<br></td></tr
><tr
id=sl_svn42_129

 onmouseover="gutterOver(129)"

><td class="source">						});<br></td></tr
><tr
id=sl_svn42_130

 onmouseover="gutterOver(130)"

><td class="source">						yTotals[i] = thisTotal;<br></td></tr
><tr
id=sl_svn42_131

 onmouseover="gutterOver(131)"

><td class="source">						<br></td></tr
><tr
id=sl_svn42_132

 onmouseover="gutterOver(132)"

><td class="source">					}<br></td></tr
><tr
id=sl_svn42_133

 onmouseover="gutterOver(133)"

><td class="source">					return yTotals;<br></td></tr
><tr
id=sl_svn42_134

 onmouseover="gutterOver(134)"

><td class="source">				},<br></td></tr
><tr
id=sl_svn42_135

 onmouseover="gutterOver(135)"

><td class="source">				topYtotal: function(){<br></td></tr
><tr
id=sl_svn42_136

 onmouseover="gutterOver(136)"

><td class="source">					var topYtotal = 0;<br></td></tr
><tr
id=sl_svn42_137

 onmouseover="gutterOver(137)"

><td class="source">						var yTotals = this.yTotals().join(&#39;,&#39;).split(&#39;,&#39;);<br></td></tr
><tr
id=sl_svn42_138

 onmouseover="gutterOver(138)"

><td class="source">						$(yTotals).each(function(){<br></td></tr
><tr
id=sl_svn42_139

 onmouseover="gutterOver(139)"

><td class="source">							if(parseFloat(this,10)&gt;topYtotal) topYtotal = parseFloat(this);<br></td></tr
><tr
id=sl_svn42_140

 onmouseover="gutterOver(140)"

><td class="source">						});<br></td></tr
><tr
id=sl_svn42_141

 onmouseover="gutterOver(141)"

><td class="source">						return topYtotal;<br></td></tr
><tr
id=sl_svn42_142

 onmouseover="gutterOver(142)"

><td class="source">				},<br></td></tr
><tr
id=sl_svn42_143

 onmouseover="gutterOver(143)"

><td class="source">				totalYRange: function(){<br></td></tr
><tr
id=sl_svn42_144

 onmouseover="gutterOver(144)"

><td class="source">					return this.topValue() - this.bottomValue();<br></td></tr
><tr
id=sl_svn42_145

 onmouseover="gutterOver(145)"

><td class="source">				},<br></td></tr
><tr
id=sl_svn42_146

 onmouseover="gutterOver(146)"

><td class="source">				xLabels: function(){<br></td></tr
><tr
id=sl_svn42_147

 onmouseover="gutterOver(147)"

><td class="source">					var xLabels = [];<br></td></tr
><tr
id=sl_svn42_148

 onmouseover="gutterOver(148)"

><td class="source">					if(o.parseDirection == &#39;x&#39;){<br></td></tr
><tr
id=sl_svn42_149

 onmouseover="gutterOver(149)"

><td class="source">						self.find(&#39;tr:eq(0) th&#39;).filter(o.colFilter).each(function(){<br></td></tr
><tr
id=sl_svn42_150

 onmouseover="gutterOver(150)"

><td class="source">							xLabels.push($(this).html());<br></td></tr
><tr
id=sl_svn42_151

 onmouseover="gutterOver(151)"

><td class="source">						});<br></td></tr
><tr
id=sl_svn42_152

 onmouseover="gutterOver(152)"

><td class="source">					}<br></td></tr
><tr
id=sl_svn42_153

 onmouseover="gutterOver(153)"

><td class="source">					else {<br></td></tr
><tr
id=sl_svn42_154

 onmouseover="gutterOver(154)"

><td class="source">						self.find(&#39;tr:gt(0) th&#39;).filter(o.rowFilter).each(function(){<br></td></tr
><tr
id=sl_svn42_155

 onmouseover="gutterOver(155)"

><td class="source">							xLabels.push($(this).html());<br></td></tr
><tr
id=sl_svn42_156

 onmouseover="gutterOver(156)"

><td class="source">						});<br></td></tr
><tr
id=sl_svn42_157

 onmouseover="gutterOver(157)"

><td class="source">					}<br></td></tr
><tr
id=sl_svn42_158

 onmouseover="gutterOver(158)"

><td class="source">					return xLabels;<br></td></tr
><tr
id=sl_svn42_159

 onmouseover="gutterOver(159)"

><td class="source">				},<br></td></tr
><tr
id=sl_svn42_160

 onmouseover="gutterOver(160)"

><td class="source">				yLabels: function(){<br></td></tr
><tr
id=sl_svn42_161

 onmouseover="gutterOver(161)"

><td class="source">					var yLabels = [];<br></td></tr
><tr
id=sl_svn42_162

 onmouseover="gutterOver(162)"

><td class="source">					yLabels.push(bottomValue); <br></td></tr
><tr
id=sl_svn42_163

 onmouseover="gutterOver(163)"

><td class="source">					var numLabels = Math.round(o.height / o.yLabelInterval);<br></td></tr
><tr
id=sl_svn42_164

 onmouseover="gutterOver(164)"

><td class="source">					var loopInterval = Math.ceil(totalYRange / numLabels) || 1;<br></td></tr
><tr
id=sl_svn42_165

 onmouseover="gutterOver(165)"

><td class="source">					while( yLabels[yLabels.length-1] &lt; topValue - loopInterval){<br></td></tr
><tr
id=sl_svn42_166

 onmouseover="gutterOver(166)"

><td class="source">						yLabels.push(yLabels[yLabels.length-1] + loopInterval); <br></td></tr
><tr
id=sl_svn42_167

 onmouseover="gutterOver(167)"

><td class="source">					}<br></td></tr
><tr
id=sl_svn42_168

 onmouseover="gutterOver(168)"

><td class="source">					yLabels.push(topValue); <br></td></tr
><tr
id=sl_svn42_169

 onmouseover="gutterOver(169)"

><td class="source">					return yLabels;<br></td></tr
><tr
id=sl_svn42_170

 onmouseover="gutterOver(170)"

><td class="source">				}			<br></td></tr
><tr
id=sl_svn42_171

 onmouseover="gutterOver(171)"

><td class="source">			};<br></td></tr
><tr
id=sl_svn42_172

 onmouseover="gutterOver(172)"

><td class="source">			<br></td></tr
><tr
id=sl_svn42_173

 onmouseover="gutterOver(173)"

><td class="source">			return tableData;<br></td></tr
><tr
id=sl_svn42_174

 onmouseover="gutterOver(174)"

><td class="source">		};<br></td></tr
><tr
id=sl_svn42_175

 onmouseover="gutterOver(175)"

><td class="source">		<br></td></tr
><tr
id=sl_svn42_176

 onmouseover="gutterOver(176)"

><td class="source">		<br></td></tr
><tr
id=sl_svn42_177

 onmouseover="gutterOver(177)"

><td class="source">		//function to create a chart<br></td></tr
><tr
id=sl_svn42_178

 onmouseover="gutterOver(178)"

><td class="source">		var createChart = {<br></td></tr
><tr
id=sl_svn42_179

 onmouseover="gutterOver(179)"

><td class="source">			pie: function(){	<br></td></tr
><tr
id=sl_svn42_180

 onmouseover="gutterOver(180)"

><td class="source">				<br></td></tr
><tr
id=sl_svn42_181

 onmouseover="gutterOver(181)"

><td class="source">				canvasContain.addClass(&#39;visualize-pie&#39;);<br></td></tr
><tr
id=sl_svn42_182

 onmouseover="gutterOver(182)"

><td class="source">				<br></td></tr
><tr
id=sl_svn42_183

 onmouseover="gutterOver(183)"

><td class="source">				if(o.pieLabelPos == &#39;outside&#39;){ canvasContain.addClass(&#39;visualize-pie-outside&#39;); }	<br></td></tr
><tr
id=sl_svn42_184

 onmouseover="gutterOver(184)"

><td class="source">						<br></td></tr
><tr
id=sl_svn42_185

 onmouseover="gutterOver(185)"

><td class="source">				var centerx = Math.round(canvas.width()/2);<br></td></tr
><tr
id=sl_svn42_186

 onmouseover="gutterOver(186)"

><td class="source">				var centery = Math.round(canvas.height()/2);<br></td></tr
><tr
id=sl_svn42_187

 onmouseover="gutterOver(187)"

><td class="source">				var radius = centery - o.pieMargin;				<br></td></tr
><tr
id=sl_svn42_188

 onmouseover="gutterOver(188)"

><td class="source">				var counter = 0.0;<br></td></tr
><tr
id=sl_svn42_189

 onmouseover="gutterOver(189)"

><td class="source">				var toRad = function(integer){ return (Math.PI/180)*integer; };<br></td></tr
><tr
id=sl_svn42_190

 onmouseover="gutterOver(190)"

><td class="source">				var labels = $(&#39;&lt;ul class=&quot;visualize-labels&quot;&gt;&lt;/ul&gt;&#39;)<br></td></tr
><tr
id=sl_svn42_191

 onmouseover="gutterOver(191)"

><td class="source">					.insertAfter(canvas);<br></td></tr
><tr
id=sl_svn42_192

 onmouseover="gutterOver(192)"

><td class="source"><br></td></tr
><tr
id=sl_svn42_193

 onmouseover="gutterOver(193)"

><td class="source">				//draw the pie pieces<br></td></tr
><tr
id=sl_svn42_194

 onmouseover="gutterOver(194)"

><td class="source">				$.each(memberTotals, function(i){<br></td></tr
><tr
id=sl_svn42_195

 onmouseover="gutterOver(195)"

><td class="source">					var fraction = (this &lt;= 0 || isNaN(this))? 0 : this / dataSum;<br></td></tr
><tr
id=sl_svn42_196

 onmouseover="gutterOver(196)"

><td class="source">					ctx.beginPath();<br></td></tr
><tr
id=sl_svn42_197

 onmouseover="gutterOver(197)"

><td class="source">					ctx.moveTo(centerx, centery);<br></td></tr
><tr
id=sl_svn42_198

 onmouseover="gutterOver(198)"

><td class="source">					ctx.arc(centerx, centery, radius, <br></td></tr
><tr
id=sl_svn42_199

 onmouseover="gutterOver(199)"

><td class="source">						counter * Math.PI * 2 - Math.PI * 0.5,<br></td></tr
><tr
id=sl_svn42_200

 onmouseover="gutterOver(200)"

><td class="source">						(counter + fraction) * Math.PI * 2 - Math.PI * 0.5,<br></td></tr
><tr
id=sl_svn42_201

 onmouseover="gutterOver(201)"

><td class="source">		                false);<br></td></tr
><tr
id=sl_svn42_202

 onmouseover="gutterOver(202)"

><td class="source">			        ctx.lineTo(centerx, centery);<br></td></tr
><tr
id=sl_svn42_203

 onmouseover="gutterOver(203)"

><td class="source">			        ctx.closePath();<br></td></tr
><tr
id=sl_svn42_204

 onmouseover="gutterOver(204)"

><td class="source">			        ctx.fillStyle = dataGroups[i].color;<br></td></tr
><tr
id=sl_svn42_205

 onmouseover="gutterOver(205)"

><td class="source">			        ctx.fill();<br></td></tr
><tr
id=sl_svn42_206

 onmouseover="gutterOver(206)"

><td class="source">			        // draw labels<br></td></tr
><tr
id=sl_svn42_207

 onmouseover="gutterOver(207)"

><td class="source">			       	var sliceMiddle = (counter + fraction/2);<br></td></tr
><tr
id=sl_svn42_208

 onmouseover="gutterOver(208)"

><td class="source">			       	var distance = o.pieLabelPos == &#39;inside&#39; ? radius/1.5 : radius +  radius / 5;<br></td></tr
><tr
id=sl_svn42_209

 onmouseover="gutterOver(209)"

><td class="source">			        var labelx = Math.round(centerx + Math.sin(sliceMiddle * Math.PI * 2) * (distance));<br></td></tr
><tr
id=sl_svn42_210

 onmouseover="gutterOver(210)"

><td class="source">			        var labely = Math.round(centery - Math.cos(sliceMiddle * Math.PI * 2) * (distance));<br></td></tr
><tr
id=sl_svn42_211

 onmouseover="gutterOver(211)"

><td class="source">			        var leftRight = (labelx &gt; centerx) ? &#39;right&#39; : &#39;left&#39;;<br></td></tr
><tr
id=sl_svn42_212

 onmouseover="gutterOver(212)"

><td class="source">			        var topBottom = (labely &gt; centery) ? &#39;bottom&#39; : &#39;top&#39;;<br></td></tr
><tr
id=sl_svn42_213

 onmouseover="gutterOver(213)"

><td class="source">			        var percentage = parseFloat((fraction*100).toFixed(2));<br></td></tr
><tr
id=sl_svn42_214

 onmouseover="gutterOver(214)"

><td class="source"><br></td></tr
><tr
id=sl_svn42_215

 onmouseover="gutterOver(215)"

><td class="source">			        if(percentage){<br></td></tr
><tr
id=sl_svn42_216

 onmouseover="gutterOver(216)"

><td class="source">			        	var labelval = (o.pieLabelsAsPercent) ? percentage + &#39;%&#39; : this;<br></td></tr
><tr
id=sl_svn42_217

 onmouseover="gutterOver(217)"

><td class="source">				        var labeltext = $(&#39;&lt;span class=&quot;visualize-label&quot;&gt;&#39; + labelval +&#39;&lt;/span&gt;&#39;)<br></td></tr
><tr
id=sl_svn42_218

 onmouseover="gutterOver(218)"

><td class="source">				        	.css(leftRight, 0)<br></td></tr
><tr
id=sl_svn42_219

 onmouseover="gutterOver(219)"

><td class="source">				        	.css(topBottom, 0);<br></td></tr
><tr
id=sl_svn42_220

 onmouseover="gutterOver(220)"

><td class="source">				        	if(labeltext)<br></td></tr
><tr
id=sl_svn42_221

 onmouseover="gutterOver(221)"

><td class="source">				        var label = $(&#39;&lt;li class=&quot;visualize-label-pos&quot;&gt;&lt;/li&gt;&#39;)<br></td></tr
><tr
id=sl_svn42_222

 onmouseover="gutterOver(222)"

><td class="source">				       			.appendTo(labels)<br></td></tr
><tr
id=sl_svn42_223

 onmouseover="gutterOver(223)"

><td class="source">				        		.css({left: labelx, top: labely})<br></td></tr
><tr
id=sl_svn42_224

 onmouseover="gutterOver(224)"

><td class="source">				        		.append(labeltext);	<br></td></tr
><tr
id=sl_svn42_225

 onmouseover="gutterOver(225)"

><td class="source">				        labeltext<br></td></tr
><tr
id=sl_svn42_226

 onmouseover="gutterOver(226)"

><td class="source">				        	.css(&#39;font-size&#39;, radius / 8)		<br></td></tr
><tr
id=sl_svn42_227

 onmouseover="gutterOver(227)"

><td class="source">				        	.css(&#39;margin-&#39;+leftRight, -labeltext.width()/2)<br></td></tr
><tr
id=sl_svn42_228

 onmouseover="gutterOver(228)"

><td class="source">				        	.css(&#39;margin-&#39;+topBottom, -labeltext.outerHeight()/2);<br></td></tr
><tr
id=sl_svn42_229

 onmouseover="gutterOver(229)"

><td class="source">				        	<br></td></tr
><tr
id=sl_svn42_230

 onmouseover="gutterOver(230)"

><td class="source">				        if(dataGroups[i].textColor){ labeltext.css(&#39;color&#39;, dataGroups[i].textColor); }	<br></td></tr
><tr
id=sl_svn42_231

 onmouseover="gutterOver(231)"

><td class="source">			        }<br></td></tr
><tr
id=sl_svn42_232

 onmouseover="gutterOver(232)"

><td class="source">			      	counter+=fraction;<br></td></tr
><tr
id=sl_svn42_233

 onmouseover="gutterOver(233)"

><td class="source">				});<br></td></tr
><tr
id=sl_svn42_234

 onmouseover="gutterOver(234)"

><td class="source">			},<br></td></tr
><tr
id=sl_svn42_235

 onmouseover="gutterOver(235)"

><td class="source">			<br></td></tr
><tr
id=sl_svn42_236

 onmouseover="gutterOver(236)"

><td class="source">			line: function(area){<br></td></tr
><tr
id=sl_svn42_237

 onmouseover="gutterOver(237)"

><td class="source">			<br></td></tr
><tr
id=sl_svn42_238

 onmouseover="gutterOver(238)"

><td class="source">				if(area){ canvasContain.addClass(&#39;visualize-area&#39;); }<br></td></tr
><tr
id=sl_svn42_239

 onmouseover="gutterOver(239)"

><td class="source">				else{ canvasContain.addClass(&#39;visualize-line&#39;); }<br></td></tr
><tr
id=sl_svn42_240

 onmouseover="gutterOver(240)"

><td class="source">			<br></td></tr
><tr
id=sl_svn42_241

 onmouseover="gutterOver(241)"

><td class="source">				//write X labels<br></td></tr
><tr
id=sl_svn42_242

 onmouseover="gutterOver(242)"

><td class="source">				var xInterval = canvas.width() / (xLabels.length -1);<br></td></tr
><tr
id=sl_svn42_243

 onmouseover="gutterOver(243)"

><td class="source">				var xlabelsUL = $(&#39;&lt;ul class=&quot;visualize-labels-x&quot;&gt;&lt;/ul&gt;&#39;)<br></td></tr
><tr
id=sl_svn42_244

 onmouseover="gutterOver(244)"

><td class="source">					.width(canvas.width())<br></td></tr
><tr
id=sl_svn42_245

 onmouseover="gutterOver(245)"

><td class="source">					.height(canvas.height())<br></td></tr
><tr
id=sl_svn42_246

 onmouseover="gutterOver(246)"

><td class="source">					.insertBefore(canvas);<br></td></tr
><tr
id=sl_svn42_247

 onmouseover="gutterOver(247)"

><td class="source">				$.each(xLabels, function(i){ <br></td></tr
><tr
id=sl_svn42_248

 onmouseover="gutterOver(248)"

><td class="source">					var thisLi = $(&#39;&lt;li&gt;&lt;span&gt;&#39;+this+&#39;&lt;/span&gt;&lt;/li&gt;&#39;)<br></td></tr
><tr
id=sl_svn42_249

 onmouseover="gutterOver(249)"

><td class="source">						.prepend(&#39;&lt;span class=&quot;line&quot; /&gt;&#39;)<br></td></tr
><tr
id=sl_svn42_250

 onmouseover="gutterOver(250)"

><td class="source">						.css(&#39;left&#39;, xInterval * i)<br></td></tr
><tr
id=sl_svn42_251

 onmouseover="gutterOver(251)"

><td class="source">						.appendTo(xlabelsUL);						<br></td></tr
><tr
id=sl_svn42_252

 onmouseover="gutterOver(252)"

><td class="source">					var label = thisLi.find(&#39;span:not(.line)&#39;);<br></td></tr
><tr
id=sl_svn42_253

 onmouseover="gutterOver(253)"

><td class="source">					var leftOffset = label.width()/-2;<br></td></tr
><tr
id=sl_svn42_254

 onmouseover="gutterOver(254)"

><td class="source">					if(i == 0){ leftOffset = 0; }<br></td></tr
><tr
id=sl_svn42_255

 onmouseover="gutterOver(255)"

><td class="source">					else if(i== xLabels.length-1){ leftOffset = -label.width(); }<br></td></tr
><tr
id=sl_svn42_256

 onmouseover="gutterOver(256)"

><td class="source">					label<br></td></tr
><tr
id=sl_svn42_257

 onmouseover="gutterOver(257)"

><td class="source">						.css(&#39;margin-left&#39;, leftOffset)<br></td></tr
><tr
id=sl_svn42_258

 onmouseover="gutterOver(258)"

><td class="source">						.addClass(&#39;label&#39;);<br></td></tr
><tr
id=sl_svn42_259

 onmouseover="gutterOver(259)"

><td class="source">				});<br></td></tr
><tr
id=sl_svn42_260

 onmouseover="gutterOver(260)"

><td class="source"><br></td></tr
><tr
id=sl_svn42_261

 onmouseover="gutterOver(261)"

><td class="source">				//write Y labels<br></td></tr
><tr
id=sl_svn42_262

 onmouseover="gutterOver(262)"

><td class="source">				var yScale = canvas.height() / totalYRange;<br></td></tr
><tr
id=sl_svn42_263

 onmouseover="gutterOver(263)"

><td class="source">				var liBottom = canvas.height() / (yLabels.length-1);<br></td></tr
><tr
id=sl_svn42_264

 onmouseover="gutterOver(264)"

><td class="source">				var ylabelsUL = $(&#39;&lt;ul class=&quot;visualize-labels-y&quot;&gt;&lt;/ul&gt;&#39;)<br></td></tr
><tr
id=sl_svn42_265

 onmouseover="gutterOver(265)"

><td class="source">					.width(canvas.width())<br></td></tr
><tr
id=sl_svn42_266

 onmouseover="gutterOver(266)"

><td class="source">					.height(canvas.height())<br></td></tr
><tr
id=sl_svn42_267

 onmouseover="gutterOver(267)"

><td class="source">					.insertBefore(canvas);<br></td></tr
><tr
id=sl_svn42_268

 onmouseover="gutterOver(268)"

><td class="source">					<br></td></tr
><tr
id=sl_svn42_269

 onmouseover="gutterOver(269)"

><td class="source">				$.each(yLabels, function(i){  <br></td></tr
><tr
id=sl_svn42_270

 onmouseover="gutterOver(270)"

><td class="source">					var thisLi = $(&#39;&lt;li&gt;&lt;span&gt;&#39;+this+&#39;&lt;/span&gt;&lt;/li&gt;&#39;)<br></td></tr
><tr
id=sl_svn42_271

 onmouseover="gutterOver(271)"

><td class="source">						.prepend(&#39;&lt;span class=&quot;line&quot;  /&gt;&#39;)<br></td></tr
><tr
id=sl_svn42_272

 onmouseover="gutterOver(272)"

><td class="source">						.css(&#39;bottom&#39;,liBottom*i)<br></td></tr
><tr
id=sl_svn42_273

 onmouseover="gutterOver(273)"

><td class="source">						.prependTo(ylabelsUL);<br></td></tr
><tr
id=sl_svn42_274

 onmouseover="gutterOver(274)"

><td class="source">					var label = thisLi.find(&#39;span:not(.line)&#39;);<br></td></tr
><tr
id=sl_svn42_275

 onmouseover="gutterOver(275)"

><td class="source">					var topOffset = label.height()/-2;<br></td></tr
><tr
id=sl_svn42_276

 onmouseover="gutterOver(276)"

><td class="source">					if(i == 0){ topOffset = -label.height(); }<br></td></tr
><tr
id=sl_svn42_277

 onmouseover="gutterOver(277)"

><td class="source">					else if(i== yLabels.length-1){ topOffset = 0; }<br></td></tr
><tr
id=sl_svn42_278

 onmouseover="gutterOver(278)"

><td class="source">					label<br></td></tr
><tr
id=sl_svn42_279

 onmouseover="gutterOver(279)"

><td class="source">						.css(&#39;margin-top&#39;, topOffset)<br></td></tr
><tr
id=sl_svn42_280

 onmouseover="gutterOver(280)"

><td class="source">						.addClass(&#39;label&#39;);<br></td></tr
><tr
id=sl_svn42_281

 onmouseover="gutterOver(281)"

><td class="source">				});<br></td></tr
><tr
id=sl_svn42_282

 onmouseover="gutterOver(282)"

><td class="source"><br></td></tr
><tr
id=sl_svn42_283

 onmouseover="gutterOver(283)"

><td class="source">				//start from the bottom left<br></td></tr
><tr
id=sl_svn42_284

 onmouseover="gutterOver(284)"

><td class="source">				ctx.translate(0,zeroLoc);<br></td></tr
><tr
id=sl_svn42_285

 onmouseover="gutterOver(285)"

><td class="source">				//iterate and draw<br></td></tr
><tr
id=sl_svn42_286

 onmouseover="gutterOver(286)"

><td class="source">				$.each(dataGroups,function(h){<br></td></tr
><tr
id=sl_svn42_287

 onmouseover="gutterOver(287)"

><td class="source">					ctx.beginPath();<br></td></tr
><tr
id=sl_svn42_288

 onmouseover="gutterOver(288)"

><td class="source">					ctx.lineWidth = o.lineWeight;<br></td></tr
><tr
id=sl_svn42_289

 onmouseover="gutterOver(289)"

><td class="source">					ctx.lineJoin = &#39;round&#39;;<br></td></tr
><tr
id=sl_svn42_290

 onmouseover="gutterOver(290)"

><td class="source">					var points = this.points;<br></td></tr
><tr
id=sl_svn42_291

 onmouseover="gutterOver(291)"

><td class="source">					var integer = 0;<br></td></tr
><tr
id=sl_svn42_292

 onmouseover="gutterOver(292)"

><td class="source">					ctx.moveTo(0,-(points[0]*yScale));<br></td></tr
><tr
id=sl_svn42_293

 onmouseover="gutterOver(293)"

><td class="source">					$.each(points, function(){<br></td></tr
><tr
id=sl_svn42_294

 onmouseover="gutterOver(294)"

><td class="source">						ctx.lineTo(integer,-(this*yScale));<br></td></tr
><tr
id=sl_svn42_295

 onmouseover="gutterOver(295)"

><td class="source">						integer+=xInterval;<br></td></tr
><tr
id=sl_svn42_296

 onmouseover="gutterOver(296)"

><td class="source">					});<br></td></tr
><tr
id=sl_svn42_297

 onmouseover="gutterOver(297)"

><td class="source">					ctx.strokeStyle = this.color;<br></td></tr
><tr
id=sl_svn42_298

 onmouseover="gutterOver(298)"

><td class="source">					ctx.stroke();<br></td></tr
><tr
id=sl_svn42_299

 onmouseover="gutterOver(299)"

><td class="source">					if(area){<br></td></tr
><tr
id=sl_svn42_300

 onmouseover="gutterOver(300)"

><td class="source">						ctx.lineTo(integer,0);<br></td></tr
><tr
id=sl_svn42_301

 onmouseover="gutterOver(301)"

><td class="source">						ctx.lineTo(0,0);<br></td></tr
><tr
id=sl_svn42_302

 onmouseover="gutterOver(302)"

><td class="source">						ctx.closePath();<br></td></tr
><tr
id=sl_svn42_303

 onmouseover="gutterOver(303)"

><td class="source">						ctx.fillStyle = this.color;<br></td></tr
><tr
id=sl_svn42_304

 onmouseover="gutterOver(304)"

><td class="source">						ctx.globalAlpha = .3;<br></td></tr
><tr
id=sl_svn42_305

 onmouseover="gutterOver(305)"

><td class="source">						ctx.fill();<br></td></tr
><tr
id=sl_svn42_306

 onmouseover="gutterOver(306)"

><td class="source">						ctx.globalAlpha = 1.0;<br></td></tr
><tr
id=sl_svn42_307

 onmouseover="gutterOver(307)"

><td class="source">					}<br></td></tr
><tr
id=sl_svn42_308

 onmouseover="gutterOver(308)"

><td class="source">					else {ctx.closePath();}<br></td></tr
><tr
id=sl_svn42_309

 onmouseover="gutterOver(309)"

><td class="source">				});<br></td></tr
><tr
id=sl_svn42_310

 onmouseover="gutterOver(310)"

><td class="source">			},<br></td></tr
><tr
id=sl_svn42_311

 onmouseover="gutterOver(311)"

><td class="source">			<br></td></tr
><tr
id=sl_svn42_312

 onmouseover="gutterOver(312)"

><td class="source">			area: function(){<br></td></tr
><tr
id=sl_svn42_313

 onmouseover="gutterOver(313)"

><td class="source">				createChart.line(true);<br></td></tr
><tr
id=sl_svn42_314

 onmouseover="gutterOver(314)"

><td class="source">			},<br></td></tr
><tr
id=sl_svn42_315

 onmouseover="gutterOver(315)"

><td class="source">			<br></td></tr
><tr
id=sl_svn42_316

 onmouseover="gutterOver(316)"

><td class="source">			bar: function(){<br></td></tr
><tr
id=sl_svn42_317

 onmouseover="gutterOver(317)"

><td class="source">				<br></td></tr
><tr
id=sl_svn42_318

 onmouseover="gutterOver(318)"

><td class="source">				canvasContain.addClass(&#39;visualize-bar&#39;);<br></td></tr
><tr
id=sl_svn42_319

 onmouseover="gutterOver(319)"

><td class="source">			<br></td></tr
><tr
id=sl_svn42_320

 onmouseover="gutterOver(320)"

><td class="source">				//write X labels<br></td></tr
><tr
id=sl_svn42_321

 onmouseover="gutterOver(321)"

><td class="source">				var xInterval = canvas.width() / (xLabels.length);<br></td></tr
><tr
id=sl_svn42_322

 onmouseover="gutterOver(322)"

><td class="source">				var xlabelsUL = $(&#39;&lt;ul class=&quot;visualize-labels-x&quot;&gt;&lt;/ul&gt;&#39;)<br></td></tr
><tr
id=sl_svn42_323

 onmouseover="gutterOver(323)"

><td class="source">					.width(canvas.width())<br></td></tr
><tr
id=sl_svn42_324

 onmouseover="gutterOver(324)"

><td class="source">					.height(canvas.height())<br></td></tr
><tr
id=sl_svn42_325

 onmouseover="gutterOver(325)"

><td class="source">					.insertBefore(canvas);<br></td></tr
><tr
id=sl_svn42_326

 onmouseover="gutterOver(326)"

><td class="source">				$.each(xLabels, function(i){ <br></td></tr
><tr
id=sl_svn42_327

 onmouseover="gutterOver(327)"

><td class="source">					var thisLi = $(&#39;&lt;li&gt;&lt;span class=&quot;label&quot;&gt;&#39;+this+&#39;&lt;/span&gt;&lt;/li&gt;&#39;)<br></td></tr
><tr
id=sl_svn42_328

 onmouseover="gutterOver(328)"

><td class="source">						.prepend(&#39;&lt;span class=&quot;line&quot; /&gt;&#39;)<br></td></tr
><tr
id=sl_svn42_329

 onmouseover="gutterOver(329)"

><td class="source">						.css(&#39;left&#39;, xInterval * i)<br></td></tr
><tr
id=sl_svn42_330

 onmouseover="gutterOver(330)"

><td class="source">						.width(xInterval)<br></td></tr
><tr
id=sl_svn42_331

 onmouseover="gutterOver(331)"

><td class="source">						.appendTo(xlabelsUL);<br></td></tr
><tr
id=sl_svn42_332

 onmouseover="gutterOver(332)"

><td class="source">					var label = thisLi.find(&#39;span.label&#39;);<br></td></tr
><tr
id=sl_svn42_333

 onmouseover="gutterOver(333)"

><td class="source">					label.addClass(&#39;label&#39;);<br></td></tr
><tr
id=sl_svn42_334

 onmouseover="gutterOver(334)"

><td class="source">				});<br></td></tr
><tr
id=sl_svn42_335

 onmouseover="gutterOver(335)"

><td class="source"><br></td></tr
><tr
id=sl_svn42_336

 onmouseover="gutterOver(336)"

><td class="source">				//write Y labels<br></td></tr
><tr
id=sl_svn42_337

 onmouseover="gutterOver(337)"

><td class="source">				var yScale = canvas.height() / totalYRange;<br></td></tr
><tr
id=sl_svn42_338

 onmouseover="gutterOver(338)"

><td class="source">				var liBottom = canvas.height() / (yLabels.length-1);<br></td></tr
><tr
id=sl_svn42_339

 onmouseover="gutterOver(339)"

><td class="source">				var ylabelsUL = $(&#39;&lt;ul class=&quot;visualize-labels-y&quot;&gt;&lt;/ul&gt;&#39;)<br></td></tr
><tr
id=sl_svn42_340

 onmouseover="gutterOver(340)"

><td class="source">					.width(canvas.width())<br></td></tr
><tr
id=sl_svn42_341

 onmouseover="gutterOver(341)"

><td class="source">					.height(canvas.height())<br></td></tr
><tr
id=sl_svn42_342

 onmouseover="gutterOver(342)"

><td class="source">					.insertBefore(canvas);<br></td></tr
><tr
id=sl_svn42_343

 onmouseover="gutterOver(343)"

><td class="source">				$.each(yLabels, function(i){  <br></td></tr
><tr
id=sl_svn42_344

 onmouseover="gutterOver(344)"

><td class="source">					var thisLi = $(&#39;&lt;li&gt;&lt;span&gt;&#39;+this+&#39;&lt;/span&gt;&lt;/li&gt;&#39;)<br></td></tr
><tr
id=sl_svn42_345

 onmouseover="gutterOver(345)"

><td class="source">						.prepend(&#39;&lt;span class=&quot;line&quot;  /&gt;&#39;)<br></td></tr
><tr
id=sl_svn42_346

 onmouseover="gutterOver(346)"

><td class="source">						.css(&#39;bottom&#39;,liBottom*i)<br></td></tr
><tr
id=sl_svn42_347

 onmouseover="gutterOver(347)"

><td class="source">						.prependTo(ylabelsUL);<br></td></tr
><tr
id=sl_svn42_348

 onmouseover="gutterOver(348)"

><td class="source">						var label = thisLi.find(&#39;span:not(.line)&#39;);<br></td></tr
><tr
id=sl_svn42_349

 onmouseover="gutterOver(349)"

><td class="source">						var topOffset = label.height()/-2;<br></td></tr
><tr
id=sl_svn42_350

 onmouseover="gutterOver(350)"

><td class="source">						if(i == 0){ topOffset = -label.height(); }<br></td></tr
><tr
id=sl_svn42_351

 onmouseover="gutterOver(351)"

><td class="source">						else if(i== yLabels.length-1){ topOffset = 0; }<br></td></tr
><tr
id=sl_svn42_352

 onmouseover="gutterOver(352)"

><td class="source">						label<br></td></tr
><tr
id=sl_svn42_353

 onmouseover="gutterOver(353)"

><td class="source">							.css(&#39;margin-top&#39;, topOffset)<br></td></tr
><tr
id=sl_svn42_354

 onmouseover="gutterOver(354)"

><td class="source">							.addClass(&#39;label&#39;);<br></td></tr
><tr
id=sl_svn42_355

 onmouseover="gutterOver(355)"

><td class="source">				});<br></td></tr
><tr
id=sl_svn42_356

 onmouseover="gutterOver(356)"

><td class="source"><br></td></tr
><tr
id=sl_svn42_357

 onmouseover="gutterOver(357)"

><td class="source">				//start from the bottom left<br></td></tr
><tr
id=sl_svn42_358

 onmouseover="gutterOver(358)"

><td class="source">				ctx.translate(0,zeroLoc);<br></td></tr
><tr
id=sl_svn42_359

 onmouseover="gutterOver(359)"

><td class="source">				//iterate and draw<br></td></tr
><tr
id=sl_svn42_360

 onmouseover="gutterOver(360)"

><td class="source">				for(var h=0; h&lt;dataGroups.length; h++){<br></td></tr
><tr
id=sl_svn42_361

 onmouseover="gutterOver(361)"

><td class="source">					ctx.beginPath();<br></td></tr
><tr
id=sl_svn42_362

 onmouseover="gutterOver(362)"

><td class="source">					var linewidth = (xInterval-o.barGroupMargin*2) / dataGroups.length; //removed +1 <br></td></tr
><tr
id=sl_svn42_363

 onmouseover="gutterOver(363)"

><td class="source">					var strokeWidth = linewidth - (o.barMargin*2);<br></td></tr
><tr
id=sl_svn42_364

 onmouseover="gutterOver(364)"

><td class="source">					ctx.lineWidth = strokeWidth;<br></td></tr
><tr
id=sl_svn42_365

 onmouseover="gutterOver(365)"

><td class="source">					var points = dataGroups[h].points;<br></td></tr
><tr
id=sl_svn42_366

 onmouseover="gutterOver(366)"

><td class="source">					var integer = 0;<br></td></tr
><tr
id=sl_svn42_367

 onmouseover="gutterOver(367)"

><td class="source">					for(var i=0; i&lt;points.length; i++){<br></td></tr
><tr
id=sl_svn42_368

 onmouseover="gutterOver(368)"

><td class="source">						var xVal = (integer-o.barGroupMargin)+(h*linewidth)+linewidth/2;<br></td></tr
><tr
id=sl_svn42_369

 onmouseover="gutterOver(369)"

><td class="source">						xVal += o.barGroupMargin*2;<br></td></tr
><tr
id=sl_svn42_370

 onmouseover="gutterOver(370)"

><td class="source">						<br></td></tr
><tr
id=sl_svn42_371

 onmouseover="gutterOver(371)"

><td class="source">						ctx.moveTo(xVal, 0);<br></td></tr
><tr
id=sl_svn42_372

 onmouseover="gutterOver(372)"

><td class="source">						ctx.lineTo(xVal, Math.round(-points[i]*yScale));<br></td></tr
><tr
id=sl_svn42_373

 onmouseover="gutterOver(373)"

><td class="source">						integer+=xInterval;<br></td></tr
><tr
id=sl_svn42_374

 onmouseover="gutterOver(374)"

><td class="source">					}<br></td></tr
><tr
id=sl_svn42_375

 onmouseover="gutterOver(375)"

><td class="source">					ctx.strokeStyle = dataGroups[h].color;<br></td></tr
><tr
id=sl_svn42_376

 onmouseover="gutterOver(376)"

><td class="source">					ctx.stroke();<br></td></tr
><tr
id=sl_svn42_377

 onmouseover="gutterOver(377)"

><td class="source">					ctx.closePath();<br></td></tr
><tr
id=sl_svn42_378

 onmouseover="gutterOver(378)"

><td class="source">				}<br></td></tr
><tr
id=sl_svn42_379

 onmouseover="gutterOver(379)"

><td class="source">			}<br></td></tr
><tr
id=sl_svn42_380

 onmouseover="gutterOver(380)"

><td class="source">		};<br></td></tr
><tr
id=sl_svn42_381

 onmouseover="gutterOver(381)"

><td class="source">	<br></td></tr
><tr
id=sl_svn42_382

 onmouseover="gutterOver(382)"

><td class="source">		//create new canvas, set w&amp;h attrs (not inline styles)<br></td></tr
><tr
id=sl_svn42_383

 onmouseover="gutterOver(383)"

><td class="source">		var canvasNode = document.createElement(&quot;canvas&quot;); <br></td></tr
><tr
id=sl_svn42_384

 onmouseover="gutterOver(384)"

><td class="source">		canvasNode.setAttribute(&#39;height&#39;,o.height);<br></td></tr
><tr
id=sl_svn42_385

 onmouseover="gutterOver(385)"

><td class="source">		canvasNode.setAttribute(&#39;width&#39;,o.width);<br></td></tr
><tr
id=sl_svn42_386

 onmouseover="gutterOver(386)"

><td class="source">		var canvas = $(canvasNode);<br></td></tr
><tr
id=sl_svn42_387

 onmouseover="gutterOver(387)"

><td class="source">			<br></td></tr
><tr
id=sl_svn42_388

 onmouseover="gutterOver(388)"

><td class="source">		//get title for chart<br></td></tr
><tr
id=sl_svn42_389

 onmouseover="gutterOver(389)"

><td class="source">		var title = o.title || self.find(&#39;caption&#39;).text();<br></td></tr
><tr
id=sl_svn42_390

 onmouseover="gutterOver(390)"

><td class="source">		<br></td></tr
><tr
id=sl_svn42_391

 onmouseover="gutterOver(391)"

><td class="source">		//create canvas wrapper div, set inline w&amp;h, append<br></td></tr
><tr
id=sl_svn42_392

 onmouseover="gutterOver(392)"

><td class="source">		var canvasContain = (container || $(&#39;&lt;div class=&quot;visualize&quot; role=&quot;img&quot; aria-label=&quot;Chart representing data from the table: &#39;+ title +&#39;&quot; /&gt;&#39;))<br></td></tr
><tr
id=sl_svn42_393

 onmouseover="gutterOver(393)"

><td class="source">			.height(o.height)<br></td></tr
><tr
id=sl_svn42_394

 onmouseover="gutterOver(394)"

><td class="source">			.width(o.width)<br></td></tr
><tr
id=sl_svn42_395

 onmouseover="gutterOver(395)"

><td class="source">			.append(canvas);<br></td></tr
><tr
id=sl_svn42_396

 onmouseover="gutterOver(396)"

><td class="source"><br></td></tr
><tr
id=sl_svn42_397

 onmouseover="gutterOver(397)"

><td class="source">		//scrape table (this should be cleaned up into an obj)<br></td></tr
><tr
id=sl_svn42_398

 onmouseover="gutterOver(398)"

><td class="source">		var tableData = scrapeTable();<br></td></tr
><tr
id=sl_svn42_399

 onmouseover="gutterOver(399)"

><td class="source">		var dataGroups = tableData.dataGroups();<br></td></tr
><tr
id=sl_svn42_400

 onmouseover="gutterOver(400)"

><td class="source">		var allData = tableData.allData();<br></td></tr
><tr
id=sl_svn42_401

 onmouseover="gutterOver(401)"

><td class="source">		var dataSum = tableData.dataSum();<br></td></tr
><tr
id=sl_svn42_402

 onmouseover="gutterOver(402)"

><td class="source">		var topValue = tableData.topValue();<br></td></tr
><tr
id=sl_svn42_403

 onmouseover="gutterOver(403)"

><td class="source">		var bottomValue = tableData.bottomValue();<br></td></tr
><tr
id=sl_svn42_404

 onmouseover="gutterOver(404)"

><td class="source">		var memberTotals = tableData.memberTotals();<br></td></tr
><tr
id=sl_svn42_405

 onmouseover="gutterOver(405)"

><td class="source">		var totalYRange = tableData.totalYRange();<br></td></tr
><tr
id=sl_svn42_406

 onmouseover="gutterOver(406)"

><td class="source">		var zeroLoc = o.height * (topValue/totalYRange);<br></td></tr
><tr
id=sl_svn42_407

 onmouseover="gutterOver(407)"

><td class="source">		var xLabels = tableData.xLabels();<br></td></tr
><tr
id=sl_svn42_408

 onmouseover="gutterOver(408)"

><td class="source">		var yLabels = tableData.yLabels();<br></td></tr
><tr
id=sl_svn42_409

 onmouseover="gutterOver(409)"

><td class="source">								<br></td></tr
><tr
id=sl_svn42_410

 onmouseover="gutterOver(410)"

><td class="source">		//title/key container<br></td></tr
><tr
id=sl_svn42_411

 onmouseover="gutterOver(411)"

><td class="source">		if(o.appendTitle || o.appendKey){<br></td></tr
><tr
id=sl_svn42_412

 onmouseover="gutterOver(412)"

><td class="source">			var infoContain = $(&#39;&lt;div class=&quot;visualize-info&quot;&gt;&lt;/div&gt;&#39;)<br></td></tr
><tr
id=sl_svn42_413

 onmouseover="gutterOver(413)"

><td class="source">				.appendTo(canvasContain);<br></td></tr
><tr
id=sl_svn42_414

 onmouseover="gutterOver(414)"

><td class="source">		}<br></td></tr
><tr
id=sl_svn42_415

 onmouseover="gutterOver(415)"

><td class="source">		<br></td></tr
><tr
id=sl_svn42_416

 onmouseover="gutterOver(416)"

><td class="source">		//append title<br></td></tr
><tr
id=sl_svn42_417

 onmouseover="gutterOver(417)"

><td class="source">		if(o.appendTitle){<br></td></tr
><tr
id=sl_svn42_418

 onmouseover="gutterOver(418)"

><td class="source">			$(&#39;&lt;div class=&quot;visualize-title&quot;&gt;&#39;+ title +&#39;&lt;/div&gt;&#39;).appendTo(infoContain);<br></td></tr
><tr
id=sl_svn42_419

 onmouseover="gutterOver(419)"

><td class="source">		}<br></td></tr
><tr
id=sl_svn42_420

 onmouseover="gutterOver(420)"

><td class="source">		<br></td></tr
><tr
id=sl_svn42_421

 onmouseover="gutterOver(421)"

><td class="source">		<br></td></tr
><tr
id=sl_svn42_422

 onmouseover="gutterOver(422)"

><td class="source">		//append key<br></td></tr
><tr
id=sl_svn42_423

 onmouseover="gutterOver(423)"

><td class="source">		if(o.appendKey){<br></td></tr
><tr
id=sl_svn42_424

 onmouseover="gutterOver(424)"

><td class="source">			var newKey = $(&#39;&lt;ul class=&quot;visualize-key&quot;&gt;&lt;/ul&gt;&#39;);<br></td></tr
><tr
id=sl_svn42_425

 onmouseover="gutterOver(425)"

><td class="source">			var selector;<br></td></tr
><tr
id=sl_svn42_426

 onmouseover="gutterOver(426)"

><td class="source">			if(o.parseDirection == &#39;x&#39;){<br></td></tr
><tr
id=sl_svn42_427

 onmouseover="gutterOver(427)"

><td class="source">				selector = self.find(&#39;tr:gt(0) th&#39;).filter(o.rowFilter);<br></td></tr
><tr
id=sl_svn42_428

 onmouseover="gutterOver(428)"

><td class="source">			}<br></td></tr
><tr
id=sl_svn42_429

 onmouseover="gutterOver(429)"

><td class="source">			else{<br></td></tr
><tr
id=sl_svn42_430

 onmouseover="gutterOver(430)"

><td class="source">				selector = self.find(&#39;tr:eq(0) th&#39;).filter(o.colFilter);<br></td></tr
><tr
id=sl_svn42_431

 onmouseover="gutterOver(431)"

><td class="source">			}<br></td></tr
><tr
id=sl_svn42_432

 onmouseover="gutterOver(432)"

><td class="source">			<br></td></tr
><tr
id=sl_svn42_433

 onmouseover="gutterOver(433)"

><td class="source">			selector.each(function(i){<br></td></tr
><tr
id=sl_svn42_434

 onmouseover="gutterOver(434)"

><td class="source">				$(&#39;&lt;li&gt;&lt;span class=&quot;visualize-key-color&quot; style=&quot;background: &#39;+dataGroups[i].color+&#39;&quot;&gt;&lt;/span&gt;&lt;span class=&quot;visualize-key-label&quot;&gt;&#39;+ $(this).text() +&#39;&lt;/span&gt;&lt;/li&gt;&#39;)<br></td></tr
><tr
id=sl_svn42_435

 onmouseover="gutterOver(435)"

><td class="source">					.appendTo(newKey);<br></td></tr
><tr
id=sl_svn42_436

 onmouseover="gutterOver(436)"

><td class="source">			});<br></td></tr
><tr
id=sl_svn42_437

 onmouseover="gutterOver(437)"

><td class="source">			newKey.appendTo(infoContain);<br></td></tr
><tr
id=sl_svn42_438

 onmouseover="gutterOver(438)"

><td class="source">		};		<br></td></tr
><tr
id=sl_svn42_439

 onmouseover="gutterOver(439)"

><td class="source">		<br></td></tr
><tr
id=sl_svn42_440

 onmouseover="gutterOver(440)"

><td class="source">		//append new canvas to page<br></td></tr
><tr
id=sl_svn42_441

 onmouseover="gutterOver(441)"

><td class="source">		<br></td></tr
><tr
id=sl_svn42_442

 onmouseover="gutterOver(442)"

><td class="source">		if(!container){canvasContain.insertAfter(this); }<br></td></tr
><tr
id=sl_svn42_443

 onmouseover="gutterOver(443)"

><td class="source">		if( typeof(G_vmlCanvasManager) != &#39;undefined&#39; ){ G_vmlCanvasManager.init(); G_vmlCanvasManager.initElement(canvas[0]); }	<br></td></tr
><tr
id=sl_svn42_444

 onmouseover="gutterOver(444)"

><td class="source">		<br></td></tr
><tr
id=sl_svn42_445

 onmouseover="gutterOver(445)"

><td class="source">		//set up the drawing board	<br></td></tr
><tr
id=sl_svn42_446

 onmouseover="gutterOver(446)"

><td class="source">		var ctx = canvas[0].getContext(&#39;2d&#39;);<br></td></tr
><tr
id=sl_svn42_447

 onmouseover="gutterOver(447)"

><td class="source">		<br></td></tr
><tr
id=sl_svn42_448

 onmouseover="gutterOver(448)"

><td class="source">		//create chart<br></td></tr
><tr
id=sl_svn42_449

 onmouseover="gutterOver(449)"

><td class="source">		createChart[o.type]();<br></td></tr
><tr
id=sl_svn42_450

 onmouseover="gutterOver(450)"

><td class="source">		<br></td></tr
><tr
id=sl_svn42_451

 onmouseover="gutterOver(451)"

><td class="source">		//clean up some doubled lines that sit on top of canvas borders (done via JS due to IE)<br></td></tr
><tr
id=sl_svn42_452

 onmouseover="gutterOver(452)"

><td class="source">		$(&#39;.visualize-line li:first-child span.line, .visualize-line li:last-child span.line, .visualize-area li:first-child span.line, .visualize-area li:last-child span.line, .visualize-bar li:first-child span.line,.visualize-bar .visualize-labels-y li:last-child span.line&#39;).css(&#39;border&#39;,&#39;none&#39;);<br></td></tr
><tr
id=sl_svn42_453

 onmouseover="gutterOver(453)"

><td class="source">		if(!container){<br></td></tr
><tr
id=sl_svn42_454

 onmouseover="gutterOver(454)"

><td class="source">		//add event for updating<br></td></tr
><tr
id=sl_svn42_455

 onmouseover="gutterOver(455)"

><td class="source">		canvasContain.bind(&#39;visualizeRefresh&#39;, function(){<br></td></tr
><tr
id=sl_svn42_456

 onmouseover="gutterOver(456)"

><td class="source">			self.visualize(o, $(this).empty()); <br></td></tr
><tr
id=sl_svn42_457

 onmouseover="gutterOver(457)"

><td class="source">		});<br></td></tr
><tr
id=sl_svn42_458

 onmouseover="gutterOver(458)"

><td class="source">		}<br></td></tr
><tr
id=sl_svn42_459

 onmouseover="gutterOver(459)"

><td class="source">	}).next(); //returns canvas(es)<br></td></tr
><tr
id=sl_svn42_460

 onmouseover="gutterOver(460)"

><td class="source">};<br></td></tr
><tr
id=sl_svn42_461

 onmouseover="gutterOver(461)"

><td class="source">})(jQuery);<br></td></tr
><tr
id=sl_svn42_462

 onmouseover="gutterOver(462)"

><td class="source"><br></td></tr
><tr
id=sl_svn42_463

 onmouseover="gutterOver(463)"

><td class="source"><br></td></tr
></table></pre>
<pre class="prettyprint"><table width="100%"><tr class="cursor_stop cursor_hidden"><td></td></tr></table></pre>
</td>
</tr></table>
<script type="text/javascript">
 var lineNumUnderMouse = -1;
 
 function gutterOver(num) {
 gutterOut();
 var newTR = document.getElementById('gr_svn42_' + num);
 if (newTR) {
 newTR.className = 'undermouse';
 }
 lineNumUnderMouse = num;
 }
 function gutterOut() {
 if (lineNumUnderMouse != -1) {
 var oldTR = document.getElementById(
 'gr_svn42_' + lineNumUnderMouse);
 if (oldTR) {
 oldTR.className = '';
 }
 lineNumUnderMouse = -1;
 }
 }
 var numsGenState = {table_base_id: 'nums_table_'};
 var srcGenState = {table_base_id: 'src_table_'};
 var alignerRunning = false;
 var startOver = false;
 function setLineNumberHeights() {
 if (alignerRunning) {
 startOver = true;
 return;
 }
 numsGenState.chunk_id = 0;
 numsGenState.table = document.getElementById('nums_table_0');
 numsGenState.row_num = 0;
 srcGenState.chunk_id = 0;
 srcGenState.table = document.getElementById('src_table_0');
 srcGenState.row_num = 0;
 alignerRunning = true;
 continueToSetLineNumberHeights();
 }
 function rowGenerator(genState) {
 if (genState.row_num < genState.table.rows.length) {
 var currentRow = genState.table.rows[genState.row_num];
 genState.row_num++;
 return currentRow;
 }
 var newTable = document.getElementById(
 genState.table_base_id + (genState.chunk_id + 1));
 if (newTable) {
 genState.chunk_id++;
 genState.row_num = 0;
 genState.table = newTable;
 return genState.table.rows[0];
 }
 return null;
 }
 var MAX_ROWS_PER_PASS = 1000;
 function continueToSetLineNumberHeights() {
 var rowsInThisPass = 0;
 var numRow = 1;
 var srcRow = 1;
 while (numRow && srcRow && rowsInThisPass < MAX_ROWS_PER_PASS) {
 numRow = rowGenerator(numsGenState);
 srcRow = rowGenerator(srcGenState);
 rowsInThisPass++;
 if (numRow && srcRow) {
 if (numRow.offsetHeight != srcRow.offsetHeight) {
 numRow.firstChild.style.height = srcRow.offsetHeight + 'px';
 }
 }
 }
 if (rowsInThisPass >= MAX_ROWS_PER_PASS) {
 setTimeout(continueToSetLineNumberHeights, 10);
 } else {
 alignerRunning = false;
 if (startOver) {
 startOver = false;
 setTimeout(setLineNumberHeights, 500);
 }
 }
 }
 // Do 2 complete passes, because there can be races
 // between this code and prettify.
 startOver = true;
 setTimeout(setLineNumberHeights, 250);
 window.onresize = setLineNumberHeights;
</script>

 
 
 <div id="log">
 <div style="text-align:right">
 <a class="ifCollapse" href="#" onclick="_toggleMeta('', 'p', 'dwpe', this)">Show details</a>
 <a class="ifExpand" href="#" onclick="_toggleMeta('', 'p', 'dwpe', this)">Hide details</a>
 </div>
 <div class="ifExpand">
 
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="changelog">
 <p>Change log</p>
 <div>
 <a href="/p/dwpe/source/detail?spec=svn42&r=23">r23</a>
 by sc...@scottjehl.com
 on Apr 23, 2010
 &nbsp; <a href="/p/dwpe/source/diff?spec=svn42&r=23&amp;format=side&amp;path=/trunk/charting/js/visualize.jQuery.js&amp;old_path=/trunk/charting/js/visualize.jQuery.js&amp;old=22">Diff</a>
 </div>
 <pre>Added a new feature for charting subsets
of a data table, addressing <a title="Add support for drawing a chart from a data subset (specific columns or rows)" class=closed_ref href="/p/dwpe/issues/detail?id=3"> issue #3 </a>.

Two new options:
rowFilter
colFilter

Both of these accept jQuery selector
strings to filter rows and columns by any
selectors you'd like. The :eq(), :gt(),
and :lt() selectors will probably be most
useful, but any selectors are accepted.
...</pre>
 </div>
 
 
 
 
 
 
 <script type="text/javascript">
 var detail_url = '/p/dwpe/source/detail?r=23&spec=svn42';
 var publish_url = '/p/dwpe/source/detail?r=23&spec=svn42#publish';
 // describe the paths of this revision in javascript.
 var changed_paths = [];
 var changed_urls = [];
 
 changed_paths.push('/trunk/charting/js/visualize.jQuery.js');
 changed_urls.push('/p/dwpe/source/browse/trunk/charting/js/visualize.jQuery.js?r\x3d23\x26spec\x3dsvn42');
 
 var selected_path = '/trunk/charting/js/visualize.jQuery.js';
 
 
 function getCurrentPageIndex() {
 for (var i = 0; i < changed_paths.length; i++) {
 if (selected_path == changed_paths[i]) {
 return i;
 }
 }
 }
 function getNextPage() {
 var i = getCurrentPageIndex();
 if (i < changed_paths.length - 1) {
 return changed_urls[i + 1];
 }
 return null;
 }
 function getPreviousPage() {
 var i = getCurrentPageIndex();
 if (i > 0) {
 return changed_urls[i - 1];
 }
 return null;
 }
 function gotoNextPage() {
 var page = getNextPage();
 if (!page) {
 page = detail_url;
 }
 window.location = page;
 }
 function gotoPreviousPage() {
 var page = getPreviousPage();
 if (!page) {
 page = detail_url;
 }
 window.location = page;
 }
 function gotoDetailPage() {
 window.location = detail_url;
 }
 function gotoPublishPage() {
 window.location = publish_url;
 }
</script>

 
 <style type="text/css">
 #review_nav {
 border-top: 3px solid white;
 padding-top: 6px;
 margin-top: 1em;
 }
 #review_nav td {
 vertical-align: middle;
 }
 #review_nav select {
 margin: .5em 0;
 }
 </style>
 <div id="review_nav">
 <table><tr><td>Go to:&nbsp;</td><td>
 <select name="files_in_rev" onchange="window.location=this.value">
 
 <option value="/p/dwpe/source/browse/trunk/charting/js/visualize.jQuery.js?r=23&amp;spec=svn42"
 selected="selected"
 >.../charting/js/visualize.jQuery.js</option>
 
 </select>
 </td></tr></table>
 
 
 
 <div id="review_instr" class="closed">
 <a class="ifOpened" href="/p/dwpe/source/detail?r=23&spec=svn42#publish">Publish your comments</a>
 <div class="ifClosed">Double click a line to add a comment</div>
 </div>
 
 </div>
 
 
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="older_bubble">
 <p>Older revisions</p>
 
 
 <div class="closed" style="margin-bottom:3px;" >
 <img class="ifClosed" onclick="_toggleHidden(this)" src="http://www.gstatic.com/codesite/ph/images/plus.gif" >
 <img class="ifOpened" onclick="_toggleHidden(this)" src="http://www.gstatic.com/codesite/ph/images/minus.gif" >
 <a href="/p/dwpe/source/detail?spec=svn42&r=22">r22</a>
 by sc...@scottjehl.com
 on Apr 23, 2010
 &nbsp; <a href="/p/dwpe/source/diff?spec=svn42&r=22&amp;format=side&amp;path=/trunk/charting/js/visualize.jQuery.js&amp;old_path=/trunk/charting/js/visualize.jQuery.js&amp;old=21">Diff</a>
 <br>
 <pre class="ifOpened">added a new option:
pieLabelsAsPercent: true/false

true means pie labels will be %'s
false means actual sums will be
...</pre>
 </div>
 
 <div class="closed" style="margin-bottom:3px;" >
 <img class="ifClosed" onclick="_toggleHidden(this)" src="http://www.gstatic.com/codesite/ph/images/plus.gif" >
 <img class="ifOpened" onclick="_toggleHidden(this)" src="http://www.gstatic.com/codesite/ph/images/minus.gif" >
 <a href="/p/dwpe/source/detail?spec=svn42&r=21">r21</a>
 by sc...@scottjehl.com
 on Apr 23, 2010
 &nbsp; <a href="/p/dwpe/source/diff?spec=svn42&r=21&amp;format=side&amp;path=/trunk/charting/js/visualize.jQuery.js&amp;old_path=/trunk/charting/js/visualize.jQuery.js&amp;old=12">Diff</a>
 <br>
 <pre class="ifOpened">fixed up the pie chart rounding so it
rounds to hundredths when necessary.
Addressed <a title="Occasional rounding error in pie charts" class=closed_ref href="/p/dwpe/issues/detail?id=19"> issue #19 </a></pre>
 </div>
 
 <div class="closed" style="margin-bottom:3px;" >
 <img class="ifClosed" onclick="_toggleHidden(this)" src="http://www.gstatic.com/codesite/ph/images/plus.gif" >
 <img class="ifOpened" onclick="_toggleHidden(this)" src="http://www.gstatic.com/codesite/ph/images/minus.gif" >
 <a href="/p/dwpe/source/detail?spec=svn42&r=12">r12</a>
 by sc...@scottjehl.com
 on Mar 17, 2010
 &nbsp; <a href="/p/dwpe/source/diff?spec=svn42&r=12&amp;format=side&amp;path=/trunk/charting/js/visualize.jQuery.js&amp;old_path=/trunk/charting/js/visualize.jQuery.js&amp;old=0">Diff</a>
 <br>
 <pre class="ifOpened">added updated Visualize plugin with 2
new themes to open-sourced DWPE book
code repo</pre>
 </div>
 
 
 <a href="/p/dwpe/source/list?path=/trunk/charting/js/visualize.jQuery.js&start=23">All revisions of this file</a>
 </div>
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="fileinfo_bubble">
 <p>File info</p>
 
 <div>Size: 15324 bytes,
 463 lines</div>
 
 <div><a href="http://dwpe.googlecode.com/svn/trunk/charting/js/visualize.jQuery.js">View raw file</a></div>
 </div>
 
 <div id="props">
 <p>File properties</p>
 <dl>
 
 <dt>svn:mime-type</dt>
 <dd>text/javascript</dd>
 
 <dt>svn:eol-style</dt>
 <dd>native</dd>
 
 <dt>svn:executable</dt>
 <dd>*</dd>
 
 </dl>
 </div>
 
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 </div>
 </div>


</div>

</div>
</div>

<script src="http://www.gstatic.com/codesite/ph/9881438163762621917/js/prettify/prettify.js"></script>
<script type="text/javascript">prettyPrint();</script>


<script src="http://www.gstatic.com/codesite/ph/9881438163762621917/js/source_file_scripts.js"></script>

 <script type="text/javascript" src="https://kibbles.googlecode.com/files/kibbles-1.3.3.comp.js"></script>
 <script type="text/javascript">
 var lastStop = null;
 var initilized = false;
 
 function updateCursor(next, prev) {
 if (prev && prev.element) {
 prev.element.className = 'cursor_stop cursor_hidden';
 }
 if (next && next.element) {
 next.element.className = 'cursor_stop cursor';
 lastStop = next.index;
 }
 }
 
 function pubRevealed(data) {
 updateCursorForCell(data.cellId, 'cursor_stop cursor_hidden');
 if (initilized) {
 reloadCursors();
 }
 }
 
 function draftRevealed(data) {
 updateCursorForCell(data.cellId, 'cursor_stop cursor_hidden');
 if (initilized) {
 reloadCursors();
 }
 }
 
 function draftDestroyed(data) {
 updateCursorForCell(data.cellId, 'nocursor');
 if (initilized) {
 reloadCursors();
 }
 }
 function reloadCursors() {
 kibbles.skipper.reset();
 loadCursors();
 if (lastStop != null) {
 kibbles.skipper.setCurrentStop(lastStop);
 }
 }
 // possibly the simplest way to insert any newly added comments
 // is to update the class of the corresponding cursor row,
 // then refresh the entire list of rows.
 function updateCursorForCell(cellId, className) {
 var cell = document.getElementById(cellId);
 // we have to go two rows back to find the cursor location
 var row = getPreviousElement(cell.parentNode);
 row.className = className;
 }
 // returns the previous element, ignores text nodes.
 function getPreviousElement(e) {
 var element = e.previousSibling;
 if (element.nodeType == 3) {
 element = element.previousSibling;
 }
 if (element && element.tagName) {
 return element;
 }
 }
 function loadCursors() {
 // register our elements with skipper
 var elements = CR_getElements('*', 'cursor_stop');
 var len = elements.length;
 for (var i = 0; i < len; i++) {
 var element = elements[i]; 
 element.className = 'cursor_stop cursor_hidden';
 kibbles.skipper.append(element);
 }
 }
 function toggleComments() {
 CR_toggleCommentDisplay();
 reloadCursors();
 }
 function keysOnLoadHandler() {
 // setup skipper
 kibbles.skipper.addStopListener(
 kibbles.skipper.LISTENER_TYPE.PRE, updateCursor);
 // Set the 'offset' option to return the middle of the client area
 // an option can be a static value, or a callback
 kibbles.skipper.setOption('padding_top', 50);
 // Set the 'offset' option to return the middle of the client area
 // an option can be a static value, or a callback
 kibbles.skipper.setOption('padding_bottom', 100);
 // Register our keys
 kibbles.skipper.addFwdKey("n");
 kibbles.skipper.addRevKey("p");
 kibbles.keys.addKeyPressListener(
 'u', function() { window.location = detail_url; });
 kibbles.keys.addKeyPressListener(
 'r', function() { window.location = detail_url + '#publish'; });
 
 kibbles.keys.addKeyPressListener('j', gotoNextPage);
 kibbles.keys.addKeyPressListener('k', gotoPreviousPage);
 
 
 kibbles.keys.addKeyPressListener('h', toggleComments);
 
 }
 </script>
<script src="http://www.gstatic.com/codesite/ph/9881438163762621917/js/code_review_scripts.js"></script>
<script type="text/javascript">
 
 // the comment form template
 var form = '<div class="draft"><div class="header"><span class="title">Draft comment:</span></div>' +
 '<div class="body"><form onsubmit="return false;"><textarea id="$ID">$BODY</textarea><br>$ACTIONS</form></div>' +
 '</div>';
 // the comment "plate" template used for both draft and published comment "plates".
 var draft_comment = '<div class="draft" ondblclick="$ONDBLCLICK">' +
 '<div class="header"><span class="title">Draft comment:</span><span class="actions">$ACTIONS</span></div>' +
 '<pre id="$ID" class="body">$BODY</pre>' +
 '</div>';
 var published_comment = '<div class="published">' +
 '<div class="header"><span class="title"><a href="$PROFILE_URL">$AUTHOR:</a></span><div>' +
 '<pre id="$ID" class="body">$BODY</pre>' +
 '</div>';

 function showPublishInstructions() {
 var element = document.getElementById('review_instr');
 if (element) {
 element.className = 'opened';
 }
 }
 function revsOnLoadHandler() {
 // register our source container with the commenting code
 var paths = {'svn42': '/trunk/charting/js/visualize.jQuery.js'}
 CR_setup('', 'p', 'dwpe', '', 'svn42', paths,
 'e42cd23ceab47a8f0a06ab012fa3c5cc', CR_BrowseIntegrationFactory);
 // register our hidden ui elements with the code commenting code ui builder.
 CR_registerLayoutElement('form', form);
 CR_registerLayoutElement('draft_comment', draft_comment);
 CR_registerLayoutElement('published_comment', published_comment);
 
 // register our source container with the commenting code
 // in this case we're registering the container and the revison
 // associated with the contianer which may be the primary revision
 // or may be a previous revision against which the primary revision
 // of the file is being compared.
 CR_registerSourceContainer(document.getElementById('lines'), 'svn42');
 
 CR_registerActivityListener(CR_ACTIVITY_TYPE.REVEAL_DRAFT_PLATE, showPublishInstructions);
 
 CR_registerActivityListener(CR_ACTIVITY_TYPE.REVEAL_PUB_PLATE, pubRevealed);
 CR_registerActivityListener(CR_ACTIVITY_TYPE.REVEAL_DRAFT_PLATE, draftRevealed);
 CR_registerActivityListener(CR_ACTIVITY_TYPE.DISCARD_DRAFT_COMMENT, draftDestroyed);
 
 
 
 
 
 
 
 var initilized = true;
 reloadCursors();
 }
 window.onload = function() {keysOnLoadHandler(); revsOnLoadHandler();};

</script>
<script type="text/javascript" src="http://www.gstatic.com/codesite/ph/9881438163762621917/js/dit_scripts.js"></script>

 
 
 <script type="text/javascript" src="http://www.gstatic.com/codesite/ph/9881438163762621917/js/core_scripts.js"></script>
 <script type="text/javascript" src="/js/codesite_product_dictionary_ph.pack.04102009.js"></script>
</div> 
<div id="footer" dir="ltr">
 
 <div class="text">
 
 &copy;2011 Google -
 <a href="/projecthosting/terms.html">Terms</a> -
 <a href="http://www.google.com/privacy.html">Privacy</a> -
 <a href="/p/support/">Project Hosting Help</a>
 
 </div>
</div>
 <div class="hostedBy" style="margin-top: -20px;">
 <span style="vertical-align: top;">Powered by <a href="http://code.google.com/projecthosting/">Google Project Hosting</a></span>
 </div>
 
 


 
 </body>
</html>

