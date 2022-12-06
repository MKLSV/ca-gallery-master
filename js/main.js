'use strict'

$(document).ready(init)
function init() {
    renderProjs()
}
function renderProjs() {
    var modalId = 1
    const projs = getProjects()

    var strHTML = projs.map(project =>
        `<div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal")" href="#portfolioModal${modalId++}">
        <div class="portfolio-hover">
        <div class="portfolio-hover-content">
        <i class="fa fa-plus fa-3x"></i>
        </div>
        </div>
        <img class="img-fluid" src="img/portfolio/${project.id}-thumbnail.jpg" alt="">
        </a>
        <div class="portfolio-caption">
        <h4>${project.name}</h4>
        <p class="text-muted">${project.title}</p>
        </div>
        </div>`
    )
    $('.my-portfolio').html(strHTML.join(''))

   modalId = 1
   var strModalHTML = projs.map(project =>  `<div class="portfolio-modal modal fade" id="portfolioModal${modalId++}" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="close-modal" data-dismiss="modal">
          <div class="lr">
            <div class="rl"></div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <div class="modal-body">
                <!-- Project Details Go Here -->
                <h2>${project.name}</h2>
                <p class="item-intro text-muted">${project.title}</p>
                <img class="img-fluid d-block mx-auto" src="img/portfolio/${project.id}-full.jpg" alt="">
                <p>${project.desc}</p>
                <a href="${project.url}">${project.url}</a>
                <hr>
                <ul class="list-inline">
                  <li>Date: ${project.publishedAt}</li>
                  <li>Client: ${project.client}</li>
                  <li>Category: ${project.category}</li>
                </ul>
                <button class="btn btn-primary" data-dismiss="modal" type="button">
                    <i class="fa fa-times"></i>
                    Close Project</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`
   )
   $('.modal-box').html(strModalHTML.join(''))
}

function onContact(){
    $('.email-error').hide()
    const elEmail = $(".email").val()
    const elSubject = $(".subject").val()
    const elMessage = $(".message").val()
    if(elEmail.includes('@') && elEmail.includes('.')) {
        window.open(`https://mail.google.com/mail/u/0/?fs=1&to=mkolosov96@gmail.com&su=${elSubject}&body=${elMessage}&bcc=${elEmail}&tf=cm`)
        elEmail =''
        elSubject =''
        elMessage =''
    }
    else $('.email-error').show()
}