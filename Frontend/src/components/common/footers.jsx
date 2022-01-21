import React, { Component } from "react";
import {Link}               from "react-router-dom";
import $ from "jquery";

//Import Image
import secondLogo           from "../../assets/images/logo-2.png"

class Footers extends Component {
    //Inherited Parent options.
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    //Init Js Scripts
    componentDidMount(){
        this.intiScripts();
    }

    intiScripts(){

        $(document).ready(function() {
            //  custom select input
            var x, i, j, l, ll, selElmnt, a, b, c;
            x = document.getElementsByClassName("custom-select");
            l = x.length;
            for (i = 0; i < l; i++) {
                selElmnt = x[i].getElementsByTagName("select")[0];
                ll = selElmnt.length;
                a = document.createElement("DIV");
                a.setAttribute("class", "select-selected");
                a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
                x[i].appendChild(a);
                b = document.createElement("DIV");
                b.setAttribute("class", "select-items select-hide");
                for (j = 1; j < ll; j++) {
                    c = document.createElement("DIV");
                    c.innerHTML = selElmnt.options[j].innerHTML;
                    c.addEventListener("click", function(e) {
                        var y, i, k, s, h, sl, yl;
                        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                        sl = s.length;
                        h = this.parentNode.previousSibling;
                        for (i = 0; i < sl; i++) {
                            if (s.options[i].innerHTML === this.innerHTML) {
                                s.selectedIndex = i;
                                h.innerHTML = this.innerHTML;
                                y = this.parentNode.getElementsByClassName("same-as-selected");
                                yl = y.length;
                                for (k = 0; k < yl; k++) {
                                    y[k].removeAttribute("class");
                                }
                                this.setAttribute("class", "same-as-selected");
                                break;
                            }
                        }
                        h.click();
                    });
                    b.appendChild(c);
                }
                x[i].appendChild(b);
                a.addEventListener("click", function(e) {
                    /*when the select box is clicked, close any other select boxes,
                    and open/close the current select box:*/
                    e.stopPropagation();
                    closeAllSelect(this);
                    this.nextSibling.classList.toggle("select-hide");
                    this.classList.toggle("select-arrow-active");
                });
            }
            function closeAllSelect(elmnt) {
                var x, y, i, xl, yl, arrNo = [];
                x = document.getElementsByClassName("select-items");
                y = document.getElementsByClassName("select-selected");
                xl = x.length;
                yl = y.length;
                for (i = 0; i < yl; i++) {
                    if (elmnt === y[i]) {
                        arrNo.push(i)
                    } else {
                        y[i].classList.remove("select-arrow-active");
                    }
                }
                for (i = 0; i < xl; i++) {
                    if (arrNo.indexOf(i)) {
                        x[i].classList.add("select-hide");
                    }
                }
            }
            document.addEventListener("click", closeAllSelect);

            // mobile menu
            $('.hamburger').on('click',function (event) {
                $(this).toggleClass('h-active');
                $('.main-nav').toggleClass('slidenav');
            });

            $('.header-home .main-nav ul li  a').on('click',function (event) {
                $('.hamburger').removeClass('h-active');
                $('.main-nav').removeClass('slidenav');
            });

            $(".main-nav .fl").on('click', function(event) {
                var $fl = $(this);
                $(this).parent().siblings().find('.sub-menu').slideUp();
                $(this).parent().siblings().find('.fl').addClass('flaticon-plus').text("+");
                if($fl.hasClass('flaticon-plus')){
                    $fl.removeClass('flaticon-plus').addClass('flaticon-minus').text("-");
                }else{
                    $fl.removeClass('flaticon-minus').addClass('flaticon-plus').text("+");
                }
                $fl.next(".sub-menu").slideToggle();
            });


            //account dropdown
            var accountCard = document.querySelectorAll('.account-dropdown')
            var userIcon = document.querySelectorAll('.user-dropdown-icon i')

            userIcon.forEach((el)=>{
                el.addEventListener('click', ()=>{
                    accountCard.forEach((element)=>{
                        element.classList.toggle("activeCard")
                    })
                })
            });

            // Search Bar js
            var searchOpen = document.querySelectorAll('.searchbar-open i')
            var searchCard = document.querySelectorAll('.main-searchbar')
            var searchClose = document.querySelectorAll('.searchbar-close i')

            searchOpen.forEach((el)=>{
                el.addEventListener('click',()=>{
                    searchCard.forEach((el)=>{
                        el.classList.add('activeSearch')
                    })
                })
            })
            searchClose.forEach((el)=>{
                el.addEventListener('click',()=>{
                    searchCard.forEach((el)=>{
                        el.classList.remove('activeSearch')
                    })
                })
            });

            window.onclick = function(event){
                searchCard.forEach((el)=>{
                    if(event.target === el){
                        el.classList.remove('activeSearch')
                    }
                });
                if(!event.target.matches('.user-dropdown-icon i')){
                    accountCard.forEach((element)=>{
                        if(element.classList.contains('activeCard')){
                            element.classList.remove('activeCard')
                        }
                    })
                }
            };

            // sticky navabr js
            $(window).on('scroll',function () {
                var scroll = $(window).scrollTop();
                if (scroll >= 10) {
                    $(".header-area").addClass("sticky");
                } else {
                    $(".header-area").removeClass("sticky");
                }
            });

            $(".preloader").delay(1000).fadeOut("slow");

        });

    }

    //Set data
    componentWillMount() {

    }
    //Un set data
    componentWillUnmount() {

    }
    scrollTop()
    {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    render() {
        return (
            <>
                {/* ===============  Newsletter area start =============== */}
                
                {/* ===============  Newsletter area end =============== */}

                {/* ==============  Footer area start================= */}
                <div className="footer-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-md-12">
                                <div className="footer-info">
                                    <div className="footer-logo">
                                        <img src={secondLogo} alt="" className="img-fluid" />
                                    </div>
                                    <p>Prevenir doenças, aliviar o sofrimento e curar os doentes:
                                        <br/>- Esse é o nosso trabalho!
                                    </p>
                                    <div className="footer-social-icons">
                                        <h5>Siga-nos:</h5>
                                        <ul>
                                            <li>
                                            <a href={"https://www.facebook.com/mika.junior.1"}> <i className="bx bxl-facebook"/></a>
                                            </li>
                                            <li>
                                            <a href={"https://www.instagram.com/mikamikaus/"}> <i className="bx bxl-instagram"/></a>
                                            </li>
                                            <li>
                                                <Link to={"#"}><i className="bx bxl-twitter" /></Link>
                                            </li>
                                            <li>
                                                <Link to={"#"}><i className="bx bxl-dribbble" /></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-12">
                                <div className="row">
                                    <div className="col-lg-5 col-md-5 col-sm-7">
                                        <div className="footer-links">
                                            <h5 className="widget-title">Contate-nos</h5>
                                            <div className="contact-box">
                                                <span><i className="bx bx-phone" /></span>
                                                <div>
                                                    <a href="tel:+238-580-30-55">+238-580-30-55</a>
                                                    <a href="tel:+238-972-50-79">+238-972-50-79</a>
                                                </div>
                                            </div>
                                            <div className="contact-box">
                                                <span><i className="bx bx-mail-send" /></span>
                                                <div>
                                                    <a href="mailto:amilcarjunior2000@gmail.com">amilcarjunior2000@gmail.com</a>
                                                    <a href="mailto:kevinbaptista321@gmail.com">kevinbaptista321@gmail.com</a>
                                                </div>
                                            </div>
                                            <div className="contact-box">
                                                <span><i className="bx bx-location-plus" /></span>
                                                <div>
                                                    {/* <Link to={"#"}>Praia, Cabo Verde</Link> */}
                                                    <a href="https://www.google.com/maps/d/u/0/viewer?ie=UTF8&t=m&oe=UTF8&msa=0&mid=1_OEJF4hXlrnx8z9tkLOtOgOCcMs&ll=14.923057000000002%2C-23.515548999999993&z=17">Praia, Cabo Verde</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-3 col-sm-5">
                                        <div className="footer-links">
                                            <h5 className="widget-title">Suporte</h5>
                                            <div className="category-list">
                                                <ul>
                                                    <li>
                                                        <Link to={`${process.env.PUBLIC_URL}/contact`} onClick={this.scrollTop} >Contate-nos</Link>
                                                    </li>
                                                    <li>
                                                        <Link to={`${process.env.PUBLIC_URL}/about-us`} onClick={this.scrollTop}>Sobre nós</Link>
                                                    </li>
                                                    <li>
                                                        <Link to={`${process.env.PUBLIC_URL}/list-paciente`} onClick={this.scrollTop} >Paciente</Link>
                                                    </li>
                                                    <li>
                                                        <Link to={`${process.env.PUBLIC_URL}/list-funcionario`} onClick={this.scrollTop}>Funcionario</Link>
                                                    </li>
                                                    <li>
                                                        <Link to={`${process.env.PUBLIC_URL}/list-estoque`} className="sub-item" onClick={this.scrollTop}>Estoque</Link>
                                                        
                                                    </li>
                                                    <li>
                                                        <Link to={`${process.env.PUBLIC_URL}/list-servico`} className="sub-item" onClick={this.scrollTop}>Serviços</Link>
                                                        
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="copyrigth-area">
                                    <p>Copyright 2021 <Link to={`#`}>Centro Saude CV</Link> | Programado por <a href=""></a><Link to={`#`}>Amilcar Júnior / Kevin Delgado</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ==============  Footer area end================= */}
            </>
        );
    }
}

export default Footers;
