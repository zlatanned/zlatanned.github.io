import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Engineer, Assistant Manager at DLT Labs<span> August 2019-present</span></h2>
                        <p>I joined DLT Labs as a Software Engineer Trainee. Post training, I was designated as Software Engineer as a backend developer and have worked in various projects and products. Overseen complete SDLC for a particular product with 100% on-time development delivery.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>B.Tech. at KIET<span> 2015-2019</span></h2>
                        <p>I have completed my under-graduation studies in E.C.E.(Electronics & Communication Engineering).</p>
                      </div>
                    </div>
                  </article>
                  {/*<article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>*/}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
