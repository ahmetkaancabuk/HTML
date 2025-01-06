    function mesaj(){
    alert("Merhaba \nAdın ne?");


    }
    function mesaj2(){
        prompt("bAŞLIK","Merhaba Adın ne?");

            


    }
    function degisken(){
        let x,y,z ;
        x=10;
        y=5.15;
        z=x+y;
        document.getElementById("kutu1").innerText = z
        meslek ="Aşcı"
        document.getElementById("kutu1").innerText += meslek;
        deger = 67;
        z = x + y + deger;
        document.getElementById("kutu2").innerText = z;
        z = x + y + Number(deger)
        document.getElementById("kutu2").innerText = z;

    }
    function topla(){
        let s1, s2 ,sonuc;
        s1 = document.getElementById("sayi1").value;
        s2 = document.getElementById("sayi2").value;
        sonuc = Number(s1) + Number(s2);
        document.getElementById("Sonuc").innerHTML=sonuc;



    }
    function cikar(){
        let s1, s2 ,sonuc;
        s1 = document.getElementById("sayi1").value;
        s2 = document.getElementById("sayi2").value;
        sonuc = Number(s1) -Number(s2);
        document.getElementById("Sonuc").innerHTML=sonuc;



    }
    function carp(){
        let s1, s2 ,sonuc;
        s1 = document.getElementById("sayi1").value;
        s2 = document.getElementById("sayi2").value;
        sonuc = Number(s1) * Number(s2);
        document.getElementById("Sonuc").innerHTML=sonuc;



    }
    function bol(){
        let s1, s2 ,sonuc;
        s1 = document.getElementById("sayi1").value;
        s2 = document.getElementById("sayi2").value;
        sonuc = Number(s1) / Number(s2);
        document.getElementById("Sonuc").innerHTML=sonuc;



    }

