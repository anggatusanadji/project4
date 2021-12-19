$(document).ready(function(){
    $("select").change(function(){
        $(this).find("option:selected").each(function(){
            var optionValue = $(this).attr("value");
            if(optionValue){
                $(".box").not("." + optionValue).hide();
                $("." + optionValue).show();
            } else{
                $(".box").hide();
            }
        });
    }).change();
});

var luasPersegi;
var panjang;
var lebar;
function hitungLuasPersegi() {
    panjang = parseFloat(document.getElementById("panjang").value);
	lebar = parseFloat(document.getElementById("lebar").value);
	luasPersegi = (panjang * lebar);
	document.getElementById('luasPersegi').value = luasPersegi;
}
function hitungLuasSegitiga() {
    alas = parseFloat(document.getElementById("alas").value);
	tinggi = parseFloat(document.getElementById("tinggi").value);
	luasSegitiga = ((alas * tinggi)/2);
	document.getElementById('luasSegitiga').value = luasSegitiga;
}
function reset(){
    document.getElementById("panjang").reset();
    document.getElementById("lebar").reset();
    document.getElementById("luasPersegi").reset();
    document.getElementById("alas").reset();
    document.getElementById("tinggi").reset();
    document.getElementById("luasSegitiga").reset();
}