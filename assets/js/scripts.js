// 移动端菜单切换
document.getElementById('mobile-menu-button').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
            
            // 如果是移动端，点击后关闭菜单
            const mobileMenu = document.getElementById('mobile-menu');
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        }
    });
});

// 项目过滤功能
document.addEventListener('DOMContentLoaded', function() {
    // 检查是否在项目页面
    if (window.location.pathname.includes('projects.html')) {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const langFilterButtons = document.querySelectorAll('.lang-filter-btn');
        const projectCards = document.querySelectorAll('.project-card');
        
        let activeFilter = 'all';
        let activeLangFilter = 'all';
        
        // 过滤项目
        function filterProjects() {
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                const language = card.getAttribute('data-language');
                
                const categoryMatch = activeFilter === 'all' || category === activeFilter;
                const langMatch = activeLangFilter === 'all' || language === activeLangFilter;
                
                if (categoryMatch && langMatch) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        }
        
        // 芯片类型过滤
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // 移除所有按钮的活跃状态
                filterButtons.forEach(btn => {
                    btn.classList.remove('filter-active');
                    btn.classList.add('bg-gray-100');
                });
                
                // 设置当前按钮为活跃状态
                this.classList.add('filter-active');
                this.classList.remove('bg-gray-100');
                
                activeFilter = this.getAttribute('data-filter');
                filterProjects();
            });
        });
        
        // 编程语言过滤
        langFilterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // 移除所有按钮的活跃状态
                langFilterButtons.forEach(btn => {
                    btn.classList.remove('filter-active');
                    btn.classList.add('bg-gray-100');
                });
                
                // 设置当前按钮为活跃状态
                this.classList.add('filter-active');
                this.classList.remove('bg-gray-100');
                
                activeLangFilter = this.getAttribute('data-lang');
                filterProjects();
            });
        });
    }
    
    // 联系表单处理
    if (window.location.pathname.includes('contact.html')) {
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // 简单的表单验证
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const message = document.getElementById('message').value;
                
                if (name && email && message) {
                    // 显示提交成功消息（实际项目中这里会发送数据到服务器）
                    alert('消息发送成功！感谢您的联系。');
                    contactForm.reset();
                } else {
                    alert('请填写所有必填字段。');
                }
            });
        }
    }
});

// 页面加载时的动画效果
window.addEventListener('load', function() {
    // 为技能条添加动画
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 300);
    });
});