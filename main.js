// P5.js 背景动画 - 创建动态粒子背景效果
// 定义粒子数组，用于存储所有粒子对象
let particles = [];
// 设置粒子数量
let particleCount = 50;

/**
 * P5.js 初始化函数
 * 在页面加载时自动执行一次
 */





function setup() {
    // 创建画布并设置大小为窗口宽高，但不超过视口宽度
    let canvas = createCanvas(windowWidth, windowHeight);
    // 将画布添加到ID为'p5-container'的DOM元素中
    canvas.parent('p5-container');
    // 设置画布位置在页面左上角 (0,0)
    canvas.position(0, 0);
    // 设置画布z-index为-1，使其显示在页面内容底层
    canvas.style('z-index', '-1');
    
    // 初始化粒子系统
    // 循环创建指定数量的粒子对象
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
}

/**
 * P5.js 绘制循环函数
 * 每帧重复执行，用于动画渲染
 */
function draw() {
    // 清空画布（透明背景）
    clear();
    
    // 更新和显示所有粒子
    // 遍历粒子数组，对每个粒子执行更新和绘制操作
    for (let particle of particles) {
        particle.update();
        particle.display();
    }
}

/**
 * 窗口大小调整事件处理
 * 当浏览器窗口大小改变时自动调用
 */
function windowResized() {
    // 重新调整画布大小以适应新窗口尺寸，但不超过视口宽度
    resizeCanvas(windowWidth, windowHeight);
}

/**
 * 粒子类
 * 定义每个粒子的属性和行为
 */
class Particle {
    /**
     * 构造函数 - 初始化粒子属性
     * 每个粒子都有随机位置、速度、大小、透明度和颜色
     */
    constructor() {
        // 随机设置粒子的初始X坐标（0到画布宽度之间）
        this.x = random(width);
        // 随机设置粒子的初始Y坐标（0到画布高度之间）
        this.y = random(height);
        // 随机设置水平速度（-0.5到0.5之间）
        this.vx = random(-0.5, 0.5);
        // 随机设置垂直速度（-0.5到0.5之间）
        this.vy = random(-0.5, 0.5);
        // 随机设置粒子大小（2到6像素之间）
        this.size = random(2, 6);
        // 随机设置不透明度（0.1到0.3之间）
        this.opacity = random(0.1, 0.3);
        // 设置粒子颜色（金色，带透明效果）
        // 颜色值：RGB(212, 175, 55)，alpha值由opacity计算得出
        this.color = color(212, 175, 55, this.opacity * 255);
    }
    
    /**
     * 更新粒子位置
     * 处理粒子移动和边缘回绕逻辑
     */
    update() {
        // 根据速度更新X坐标
        this.x += this.vx;
        // 根据速度更新Y坐标
        this.y += this.vy;
        
        // 边缘回绕效果：当粒子移出画布边界时，从对面边界出现
        // 如果粒子从左侧移出，从右侧重新进入
        if (this.x < 0) this.x = width;
        // 如果粒子从右侧移出，从左侧重新进入
        if (this.x > width) this.x = 0;
        // 如果粒子从上侧移出，从下侧重新进入
        if (this.y < 0) this.y = height;
        // 如果粒子从下侧移出，从上侧重新进入
        if (this.y > height) this.y = 0;
    }
    
    /**
     * 显示粒子
     * 在画布上绘制粒子
     */
    display() {
        // 设置填充颜色为粒子颜色
        fill(this.color);
        // 禁用描边（无边框）
        noStroke();
        // 在粒子位置绘制圆形
        // 参数：X坐标, Y坐标, 直径
        ellipse(this.x, this.y, this.size);
    }
}

// 主JavaScript代码
// 页面DOM加载完成后执行初始化
document.addEventListener('DOMContentLoaded', function() {
    // 初始化英雄区域动画效果
    initHeroAnimations();
    
    // 初始化滚动显示动画（ScrollReveal效果）
    initScrollReveal();
    
    // 初始化轮播图组件（Splide）
    initCarousels();
    
    // 初始化信件交互功能
    initLetterInteraction();
    
    // 初始化统计数据计数器动画
    initStatsCounter();
    
    // 初始化移动端菜单
    initMobileMenu();
    
    // 初始化返回顶部按钮
    initBackToTop();
    
    // 初始化导航功能
    initNavigation();
});

/**
 * 初始化英雄区域动画
 * 使用anime.js创建时间轴动画序列
 */
function initHeroAnimations() {
    // 创建动画时间轴
    anime.timeline({
        // 使用easeOutExpo缓动效果
        easing: 'easeOutExpo',
        // 每个动画持续1秒
        duration: 1000
    })
    // 标题动画：从透明到不透明，从下方50px移动到原位
    .add({
        targets: '#hero-title',
        opacity: [0, 1],
        translateY: [50, 0],
        delay: 500
    })
    // 副标题动画：从透明到不透明，从下方30px移动到原位
    .add({
        targets: '#hero-subtitle',
        opacity: [0, 1],
        translateY: [30, 0],
        delay: 200
    }, '-=700') // 在前一个动画结束前700ms开始
    // 按钮动画：从透明到不透明，从下方20px移动到原位
    .add({
        targets: '#hero-buttons',
        opacity: [0, 1],
        translateY: [20, 0],
        delay: 300
    }, '-=500') // 在前一个动画结束前500ms开始
    // 轮播图动画：从透明到不透明，从下方20px移动到原位
    .add({
        targets: '#hero-carousel',
        opacity: [0, 1],
        translateY: [20, 0],
        delay: 400
    }, '-=300'); // 在前一个动画结束前300ms开始
}

/**
 * 初始化滚动显示动画
 * 使用Intersection Observer API实现元素进入视口时的显示动画
 */
function initScrollReveal() {
    // 观察者配置选项
    const observerOptions = {
        // 元素10%可见时触发
        threshold: 0.1,
        // 底部提前50px触发（元素还在视口外50px时就开始动画）
        rootMargin: '0px 0px -50px 0px'
    };
    
    // 创建交叉观察器
    const observer = new IntersectionObserver((entries) => {
        // 遍历所有被观察的元素
        entries.forEach(entry => {
            // 如果元素进入视口
            if (entry.isIntersecting) {
                // 添加'revealed'类触发动画
                entry.target.classList.add('revealed');
            }
        });
    }, observerOptions);
    
    // 为所有带有'scroll-reveal'类的元素添加观察
    document.querySelectorAll('.scroll-reveal').forEach(el => {
        observer.observe(el);
    });
}

/**
 * 初始化轮播图
 * 使用Splide库创建两个轮播组件
 */
function initCarousels() {
    // 英雄区域轮播图
    if (document.getElementById('hero-splide')) {
        // 创建Splide实例并配置参数
        new Splide('#hero-splide', {
            type: 'loop', // 循环播放
            autoplay: true, // 自动播放
            interval: 3000, // 每3秒切换
            arrows: false, // 隐藏箭头
            pagination: false, // 隐藏分页点
            perPage: 3, // 每页显示3个
            perMove: 1,
            gap: '1rem', // 项目间距1rem
            // 响应式断点
            breakpoints: {
                // 小于768px时显示2个
                768: {
                    perPage: 2
                },
                // 小于480px时显示1个
                480: {
                    perPage: 1
                }
            }
        }).mount(); // 挂载轮播图
    }
    
    // 用户评价轮播图
    if (document.getElementById('reviews-splide')) {
        new Splide('#reviews-splide', {
            type: 'loop',
            autoplay: true,
            interval: 4000, // 每4秒切换
            arrows: true, // 显示箭头
            pagination: true, // 显示分页点
            perPage: 1, // 每页显示1个
            gap: '2rem',
            breakpoints: {
                768: {
                    perPage: 1
                }
            }
        }).mount();
    }
}

/**
 * 初始化信件交互功能
 * 处理信件卡片的点击展示和关闭
 */
function initLetterInteraction() {
    // 获取所有信件卡片元素
    const letterCards = document.querySelectorAll('.letter-card');
    // 获取信件展示区域
    const letterDisplay = document.getElementById('letter-display');
    // 获取关闭按钮
    const closeLetter = document.getElementById('close-letter');
    
    // 预定义信件数据（ID、标题、作者、内容）
    const letters = {
        1: {
            title: '把我的孝移去孝顺大多数痛苦的人类',
            author: '冷少农烈士',
            content: `母亲：
好久没有接着你们的信了，更是好久没有聆着（听）你老人家慈爱亲切的教训了，我的心中是多么的想念哟！我因此曾经写信去向三弟询问过，我因此曾经再三的自省过，我不知道我有什么迁怒家庭？我不知道我有什么迁怒母亲？以致值得你们这样的恼恨我，弃绝我，甚至于不理我。
……
真的，我现在确是成为一个你老人家所骂的不忠不孝、忘恩负义的人儿了。我为什么要这样不忠不孝、忘恩负义呢？在以前没有指责我的人，就是所谓没有人点醒我，所以我只觉我做的都是对的，我就这样尽力做下去，一直做下去以至于现在，已经是牢不可拔了。虽然到今天有你老人家慈爱的呼声，作我的当头棒喝，也恐怕是不可救药吧。
母亲，你们第一急切要知道的，怕是我在南京干的是些什么吧。我的普通情形，也很平常，还是同其他的普通人一样，每月拿八十块钱，办一些不关痛痒的例行公事，此外吃饭睡觉，或者在朋友处去玩。这样的事，在我是一钱不值的，不过因为要生活着，同时还有好多人又在羡慕着而想夺取着，所以我就不得不敷敷衍衍的将就混下去。这样呆板无聊的生活，久过有什么趣味，照理我应该把它丢掉，回家来一家老少团圆地过着，或者在地方上当绅士，或者在省城去活动活动，怎么还老在南京待着呢？这，我有我的想法，在南京虽然呆板无聊，但还可以随时得到新书看，还可以向新的方向进展。老实说，还可以为痛苦的人类尽相当的力量。
人是理智和感情的动物，我现在还是人。虽然你们骂我不叫（是）东西，我自信我还是一个人。我的理智和感情当然还没有失掉，至少是没有完全失掉。你老人家是生我身的母亲，而又是这样的慈爱我；大哥是我同胞共乳的手足，因为父亲早死，对于我的教养也曾相当的负过责任；娴贞是我十余年来同床共枕的妻子，为我抚育儿女，从未有不对的地方……母亲，你就不提及他们，我也是朝夕忘不掉的。在家庭中，我是一个受恩最多而一点未酬的人，照理我应该把家庭中一切的责任负起来，努力的（地）去完成我一个好儿子、好兄弟、好丈夫、好父亲的事业，至少在外面应该努力的（地）做一个显亲扬名的角色，极力的（地）把官做大一点，把钱找（赚）多一点，并且找的钱应该全部送回家来，使得家里的人都享受一点清福，使乡里的人个个都要恭维我家的人。这样，我才能稍稍尽一点忠孝，这样，才不算忘恩负义。但是我竟不这样做，不这样做就算没有尽着责任。没有尽着责任，就不算什么东西，东西都不成，自然更不会叫做人了。我能够想到这个地方，我的良心算尚未丧尽吧。怎么想得到而又不肯这样做呢？这是你老人家急于要知道的，也是我现在要解答的。你老人家和家庭中一切人过去和现在的痛苦，我是知道的，但是无论怎样的苦，总不会比那些挑抬的、讨田耕种的、讨饭的痛苦。他们却一天做到晚，连自己的肚皮装不满，连自己身上都遮不着（住）……
母亲，你看他们是多么的痛苦，是多么的可怜哟！他们愿意受痛苦，愿意受耻辱，愿意受饥寒，愿意丢掉生命吗？是他们贱吗？是他们懒惰吗？不是的，一切的土地都为这些有钱有势的人占去，不给他们找着事情做的机会，尽量想法去剥削他们，不使他们有点积蓄。有钱有势的人却利上生利，钱上找钱的发起财来，财越发得大，这样受苦的人越来得多，这样的人越来得多，使得大家都不安宁。母亲，你老人家已经要到六十了，你见的比我见的多，只要你老人家闭起眼睛想一想，我说的话该不会是假话吧。我因为见着他们这样的痛苦，我心里非常的难过，我想使他们个个都有饭吃，都有衣穿，都有房子住，都有事情做。我又想这些有钱有势的人不要长期的玩格（顽固），长期的把一切都占据着，而使得他们老是受痛苦。所以我现在就是在向这个方向去做。这样的事情是一件最大而又最复杂的事情，我要这样干，非得把全身的力量贯注着，非得把生命贡献。我既把我的力量和生命都交给这一件事情，我怎么能够有工夫回家来，忍心丢着这样重大的事情，看着一般人受痛苦，而自己来独享安逸呢？
母亲，你是很慈爱我的，就是家中的一切老少也很想念我的。因为太过于慈爱和太过于想念我，才会一再要我回家来，但是请你们把这爱我和关注我的精神换一个方向，去爱我上面所说的人。去关注他们，把他们也当作你们的亲儿子和兄弟一样。母亲，我真的是不忠不孝、忘恩负义吗？我是把我的孝移去孝顺大多数痛苦的人类，忠实的去为他们努力。同时我是社会豢养出来的一个分子，我受社会的恩惠也很多，所以我也不敢对她忘恩负义。
……
当父母长者的人，应该使儿女幼小者努力于社会事业，为大多数劳苦民众谋利益，除痛苦，决不要死死的要（他）尽瘁于家庭。革命之火快要延烧到全世界了，旧的污垢（为个人的）以及一切反革命的东西是要会被消灭的。不信，请你等着看一下。
母亲，儿一气写了这样多，中间自然免不了许多冲撞的话，但是我热情的希望你老人家和家中的老少们深深给我以原谅吧。
谨此，敬祝：
健康！
合家安乐！
　　　　　　　　　　　　　　　　　　　　　　二儿 农 三月三十一`
        },
        2: {
            title: '社会之新光在照耀着你',
            author: '冷少农烈士',
            content: `苍儿：
    收到你的信，使我无限的欢欣！使我无限的惭愧！你居然长这样大了，你居然能读书写字，并且能写信给我了。我频年奔走，毫无建白，却得你这一个后继希望，这使我是多么的欢欣啊……
    时代的车轮不息的旋转……希望你好好的努力，以期无负于家庭，无负于社会……一个人除解决自身的问题而外，还须顾及到社会人类，而且个人问题须在解决社会人类整个的问题中去求解决……于此，你除好好的努力读书写字，养成能力而外，还须健全你的身体，每日除读书写字而外，还须作有规则、有益健康之运动与游戏，使智[知]识与体力同时并进，预备着肩负将来之艰巨……
    我之爱你，是望你将来为一极平凡而有能力为一般劳苦民众解决不能解决之各项问题、铲除社会上一切不平等之人物。苍儿！社会之新光在照耀着你，希望你猛进！
    ……苍儿！再会！
    在新年的晨光中，为你祝福！
    你的权哥同此。
　　　　　　　　　　　　　　　　　　　　　　农 元月八日`
        },
        3: {
            title: '你的母亲是为国而牺牲的',
            author: '赵一曼烈士',
            content: `宁儿！
    母亲对于你没有能尽到教育的责任，实在是遗憾的事情。母亲因为坚决地做了反满抗日的斗争，今天已经到了牺牲的前夕了。母亲和你在生前是永久没有再见的机会了。
    希望你，宁儿啊！赶快成人，来安慰你地下的母亲！我最亲爱的孩子啊！母亲不用千言万语来教育你，就用实行来教育你。在你长大成人之后，希望不要忘记你的母亲是为国而牺牲的！                                 　　　　　　　　　　　　　　　　　　　　　　你的母亲赵一曼于车中                                                                                                                   　　　　　　　　　　　　　　　　　　　　　　一九三六年八月二日`
        }
    };
    
    // 为每个信件卡片添加点击事件
    letterCards.forEach(card => {
        card.addEventListener('click', () => {
            // 获取信件ID
            const letterId = card.dataset.letter;
            // 获取对应信件数据
            const letter = letters[letterId];
            
            // 更新信件展示区域内容
            document.getElementById('letter-title').textContent = letter.title;
            document.getElementById('letter-author').textContent = letter.author;
            document.getElementById('letter-text').textContent = letter.content;
            
            // 显示信件展示区域
            letterDisplay.classList.remove('hidden');
            
            // 使用anime.js创建显示动画
            anime({
                targets: '#letter-display .letter-content',
                scale: [0.8, 1], // 从80%缩放到100%
                opacity: [0, 1], // 从透明到不透明
                duration: 500, // 动画持续500ms
                easing: 'easeOutBack' // 使用回弹缓动效果
            });
            
            // 平滑滚动到信件展示区域
            letterDisplay.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    });
    
    // 关闭按钮点击事件
    closeLetter.addEventListener('click', () => {
        // 创建关闭动画
        anime({
            targets: '#letter-display .letter-content',
            scale: [1, 0.8], // 从100%缩放到80%
            opacity: [1, 0], // 从不透明到透明
            duration: 300, // 动画持续300ms
            easing: 'easeInBack', // 使用回弹缓动效果
            complete: () => {
                // 动画完成后隐藏信件展示区域
                letterDisplay.classList.add('hidden');
            }
        });
    });
}

/**
 * 初始化统计计数器动画
 * 当统计区域进入视口时触发数字增长动画
 */
function initStatsCounter() {
    // 定义统计数据配置
    const stats = [
        { id: 'performances-count', target: 16 }, // 演出场次
        { id: 'audience-count', target: 15000 }, // 观众人数
        { id: 'cities-count', target: 4 } // 巡演城市
    ];
    
    // 创建交叉观察器
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // 当统计区域进入视口
            if (entry.isIntersecting) {
                // 为每个统计项启动计数动画
                stats.forEach(stat => {
                    animateCounter(stat.id, stat.target);
                });
                // 停止观察该元素（只触发一次）
                observer.unobserve(entry.target);
            }
        });
    });
    
    // 获取统计区域的父元素并开始观察
    const statsSection = document.querySelector('.stats-card').parentElement;
    if (statsSection) {
        observer.observe(statsSection);
    }
}

/**
 * 计数器动画函数
 * 使用anime.js创建数字增长效果
 * 
 * @param {string} elementId - 目标元素ID
 * @param {number} target - 目标数值
 */
function animateCounter(elementId, target) {
    // 获取目标DOM元素
    const element = document.getElementById(elementId);
    if (!element) return; // 如果元素不存在则返回
    
    // 创建动画
    anime({
        // 使用一个临时对象作为动画目标
        targets: { count: 0 },
        // 目标值
        count: target,
        // 动画持续2秒
        duration: 2000,
        // 缓动效果
        easing: 'easeOutExpo',
        // 每帧更新时调用
        update: function(anim) {
            // 获取当前动画进度值并取整
            const value = Math.floor(anim.animatables[0].target.count);
            // 更新DOM元素内容，使用toLocaleString添加千位分隔符
            element.textContent = value.toLocaleString();
        }
    });
}

/**
 * 初始化移动端菜单
 * 处理移动端菜单的展开/收起
 */
function initMobileMenu() {
    // 获取移动端菜单按钮
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    // 获取移动端菜单内容
    const mobileMenu = document.getElementById('mobile-menu');
    
    // 如果按钮和菜单都存在
    if (mobileMenuBtn && mobileMenu) {
        // 添加点击事件切换菜单显示状态
        mobileMenuBtn.addEventListener('click', () => {
            // 切换'hidden'类（Tailwind CSS类，控制显示/隐藏）
            mobileMenu.classList.toggle('hidden');
        });
    }
}

/**
 * 初始化返回顶部按钮
 * 控制按钮的显示/隐藏和点击行为
 */
function initBackToTop() {
    // 获取返回顶部按钮
    const backToTopBtn = document.getElementById('back-to-top');
    
    // 监听页面滚动事件
    window.addEventListener('scroll', () => {
        // 当滚动超过300px时显示按钮
        if (window.pageYOffset > 300) {
            // 移除透明度和禁用指针事件
            backToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
        } else {
            // 添加透明度和禁用指针事件（隐藏按钮）
            backToTopBtn.classList.add('opacity-0', 'pointer-events-none');
        }
    });
    
    // 点击按钮平滑滚动到顶部
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // 平滑滚动
        });
    });
}

/**
 * 初始化导航功能
 * 处理锚点链接的平滑滚动
 */
function initNavigation() {
    // 获取所有以#开头的锚点链接
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        // 添加点击事件
        anchor.addEventListener('click', function (e) {
            // 阻止默认跳转行为
            e.preventDefault();
            // 获取目标元素
            const target = document.querySelector(this.getAttribute('href'));
            // 如果目标存在，平滑滚动到该位置
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start' // 目标元素与视口顶部对齐
                });
            }
        });
    });
}

/**
 * 滚动到指定区域
 * 全局可访问的辅助函数
 * 
 * @param {string} sectionId - 目标区域ID
 */
function scrollToSection(sectionId) {
    // 获取目标元素
    const section = document.getElementById(sectionId);
    // 如果元素存在，平滑滚动到该位置
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

/**
 * 显示通知消息
 * 全局工具函数，用于显示临时通知
 * 
 * @param {string} message - 通知内容
 * @param {string} type - 通知类型：'info'|'success'|'error'
 */
function showNotification(message, type = 'info') {
    // 创建通知元素
    const notification = document.createElement('div');
    // 设置基础样式和位置
    notification.className = `fixed top-20 right-4 p-4 rounded-lg shadow-lg z-50 ${
        type === 'success' ? 'bg-green-500' : 
        type === 'error' ? 'bg-red-500' : 
        'bg-blue-500'
    } text-white`;
    // 设置通知文本
    notification.textContent = message;
    
    // 将通知添加到页面
    document.body.appendChild(notification);
    
    // 使用anime.js创建进入动画
    anime({
        targets: notification,
        translateX: [300, 0], // 从右侧300px滑入
        opacity: [0, 1], // 从透明到不透明
        duration: 300,
        easing: 'easeOutBack'
    });
    
    // 3秒后自动移除通知
    setTimeout(() => {
        // 创建退出动画
        anime({
            targets: notification,
            translateX: [0, 300], // 向右滑出
            opacity: [1, 0], // 从不透明到透明
            duration: 300,
            easing: 'easeInBack',
            // 动画完成后移除元素
            complete: () => {
                document.body.removeChild(notification);
            }
        });
    }, 3000);
}


// 将函数导出到全局作用域，供其他页面使用
window.scrollToSection = scrollToSection;
window.showNotification = showNotification;