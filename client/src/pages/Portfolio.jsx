import React, { useEffect } from 'react'
import project1 from '../Image/work_projects2/project1.jpeg'
import project2 from '../Image/work_projects2/project2.jpeg'
import project3 from '../Image/work_projects2/project3.jpeg'
import project4 from '../Image/work_projects2/project4.jpeg'
import project5 from '../Image/work_projects2/project5.jpeg'
import project6 from '../Image/work_projects2/project6.jpeg'
import project7 from '../Image/work_projects2/project7.jpeg'
import project8 from '../Image/work_projects2/project8.jpeg'

export default function Portfolio() {
  
  useEffect(() => {
    const workBtnContainer = document.querySelector('.work__categories');
    const projectContainer = document.querySelector('.work__projects');
    const projects = document.querySelectorAll('.project');
  
  workBtnContainer.addEventListener('click', (e) => {
      const filter = e.target.dataset.filter ||
          e.target.parentNode.dataset.filter;
  
      if (filter == null) {
          return;
      }
  
      //remove previous selection and select new one
      const active = document.querySelector('.category__btn.selected');
      active.classList.remove('selected');
      const target = e.target.nodeName === 'BUTTON' ? e.target :
          e.target.parentNode;
      target.classList.add('selected');
  
      projectContainer.classList.add('anim-out');
      setTimeout(() => {
          projects.forEach((project) => {
              if (filter === '*' || filter === project.dataset.type) {
                  project.classList.remove('invisible');
              } else {
                  project.classList.add('invisible');
              }
          });
          projectContainer.classList.remove('anim-out');
      }, 300);
  });
  }, [])
  
  return (
    <div>
      <section id="about" class="section section__container">
        <h1 class="about__title">네일 델루나의 약속</h1>
        <p class="about__description">안녕하세요 네일델루나입니다!<br/>
          2019년, 저희 부부가 조그만하게 오픈했던 네일샵이 많은 분들의 사랑 덕분에<br/>
          현재는 직원까지 두게 될 만큼 성장하게 되었습니다.<br/>
          앞으로도 고객님들께 최상의 서비스를 제공하기 위해<br/>
          저희 '네일 델루나'는 다음 세 가지를 반드시 약속드립니다!

        </p>
        <div class="about__majors">
            <div class="major">
                <div class="about__icon">
                  <i class="fa-solid fa-dollar-sign"></i>
                </div>
                <h2 class="about__skills__title">Price</h2>
                <p class="about__skills__description">정가제 실시로 <br/>거품 없는 서비스</p>
            </div>
            <div class="major">
                <div class="about__icon">
                  <i class="fa-solid fa-user"></i>
                </div>
                <h2 class="about__skills__title">Personal</h2>
                <p class="about__skills__description">철저한 개인 관리로 <br/>프라이빗한 서비스</p>
            </div>
            <div class="major">
                <div class="about__icon">
                  <i class="fa-solid fa-hand-sparkles"></i>
                </div>
                <h2 class="about__skills__title">Clean</h2>
                <p class="about__skills__description">매일 소독 및 방역으로<br/>철저한 위생 관리 </p>
            </div>
        </div>
        {/* <div class="about__careers">
            <div class="career">
                <img src="imgs/KAU logo.png" alt="KAU Logo" class="career__logo">
                <div class="career__description">
                    <p class="career__name">
                        한국 직업 능력 교육원
                    </p>
                    <p class="career__period">2018.03 ~ 2018.09</p>
                </div>
            </div>
            <div class="career">
                <img src="imgs/2th Aviation logo.png" alt="Army Logo" class="career__logo">
                <div class="career__description">
                    <p class="career__name">
                        Worked as a member of flight operation department for one and half year.
                    </p>
                    <p class="career__period">2020.03.02 ~ 2021.09.09</p>
                </div>
            </div>
        </div> */}
      </section>

      <section id="work" class="section">
        <h1>Portfolio</h1>
        <p>고객님들께 실제로 작업해드렸던 결과물들입니다~!<br/> 인스타로 오시면 더 많은 작업물들을 보실 수 있어요!!</p>
        <div class="work__categories">
            <button class="category__btn selected" data-filter="*">All <span class="categories__count">8</span></button>
            <button class="category__btn" data-filter="front-end">젤 네일<span
                    class="categories__count">3</span></button>
            <button class="category__btn" data-filter="back-end">일반 네일 <span
                    class="categories__count">3</span></button>
            <button class="category__btn" data-filter="mobile">큐빅 네일 <span class="categories__count">2</span></button>
        </div>

        <div class="work__projects">
            <a href="https://github.com/Blaaake7" class="project" target="_blank" data-type="front-end">
                <img src={project1} alt="Github" class="project__img" data-type="front-end"/>
                <div class="project__description">
                    <h3>젤 네일</h3>
                    <span class="each__description">클릭해 자세히 확인해보세요!</span>
                </div>
            </a>
            <a href="https://github.com/Blaaake7" class="project" target="_blank" data-type="back-end">
                <img src={project2} alt="Github2" class="project__img"/>
                <div class="project__description">
                    <h3>일반 네일</h3>
                    <span class="each__description">클릭해 자세히 확인해보세요!</span>
                </div>
            </a>
            <a href="https://lms.kau.ac.kr/" class="project" target="_blank" data-type="mobile">
                <img src={project3} alt="KAU LMS" class="project__img"/>
                <div class="project__description">
                    <h3>큐빅 네일</h3>
                    <span class="each__description">클릭해 자세히 확인해보세요!</span>
                </div>
            </a>
            <a href="https://blog.naver.com/leesu0229" class="project" target="_blank" data-type="front-end">
                <img src={project4} alt="NAVER blog" class="project__img"/>
                <div class="project__description">
                    <h3>젤 네일</h3>
                    <span class="each__description">클릭해 자세히 확인해보세요!</span>
                </div>
            </a>
            <a href="https://github.com/Blaaake7" class="project" target="_blank" data-type="mobile">
                <img src={project5} alt="Github" class="project__img"/>
                <div class="project__description">
                    <h3>큐빅 네일</h3>
                    <span class="each__description">클릭해 자세히 확인해보세요!</span>
                </div>
            </a>
            <a href="https://github.com/Blaaake7" class="project" target="_blank" data-type="front-end">
                <img src={project6} alt="Github" class="project__img"/>
                <div class="project__description">
                    <h3>젤 네일</h3>
                    <span class="each__description">클릭해 자세히 확인해보세요!</span>
                </div>
            </a>
            <a href="https://github.com/Blaaake7" class="project" target="_blank" data-type="back-end">
                <img src={project7} alt="Github" class="project__img"/>
                <div class="project__description">
                    <h3>일반 네일</h3>
                    <span class="each__description">클릭해 자세히 확인해보세요!</span>
                </div>
            </a>
            <a href="https://github.com/Blaaake7" class="project" target="_blank" data-type="back-end">
                <img src={project8} alt="Github" class="project__img"/>
                <div class="project__description">
                    <h3>일반 네일</h3>
                    <span class="each__description">클릭해 자세히 확인해보세요!</span>
                </div>
            </a>
        </div>
      </section>
    </div>
  )
}
