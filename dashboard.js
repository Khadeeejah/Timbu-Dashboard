const purchasesTab = document.getElementsByClassName("container-list")[0]
const businessTab = document.getElementsByClassName("businesses-container")[0]
const purchaseBtn = document.getElementById("purchase-btn")
const businessBtn = document.getElementById("business-btn")
const addBtn =document.getElementById("add-btn")
const setBtn =document.getElementById("set-Btn")



function showMyBusinessTab(){
    console.log( "hi")
    window.location.href ="/business"
}

function showPurchaseTab(){
    window.location.href ="/dashboard.html"
}

function showStore(){
    window.location.href ="/business/store.html"
}

function showReservations(){
    window.location.href ="/business/reservations.html"
}

function showProducts(){
    window.location.href ="/business/store.html"
}

function showOrders(){
    window.location.href ="/business/orders.html"
}

function showBiz(){
    window.location.href ="/business/newbiz.html"
}


function noOrders(){
    window.location.href = "/business/no-order.html"
}

function noResevations(){
    window.location.href ="/business/no-reserv.html"
}

function noProducts(){
    window.location.href ="/business/no-product.html"
}


function noInfo(){
    window.location.href ="/business/no-info.html"
}


function addProduct(){
    window.location.href ="/business/add-product.html"
}
