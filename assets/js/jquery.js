// jQuery implementation for portfolio functionality
window.$ = window.jQuery = function(selector) {
    if (typeof selector === 'function') {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', selector);
        } else {
            selector();
        }
        return;
    }
    
    if (selector === window) {
        return {
            on: function(event, handler) {
                window.addEventListener(event, handler);
                return this;
            },
            scroll: function(handler) {
                if (handler) {
                    window.addEventListener('scroll', handler);
                    handler(); // Call immediately
                }
                return this;
            },
            scrollTop: function() {
                return window.pageYOffset;
            }
        };
    }
    
    if (selector === document) {
        return {
            ready: function(handler) {
                if (document.readyState === 'loading') {
                    document.addEventListener('DOMContentLoaded', handler);
                } else {
                    handler();
                }
                return this;
            },
            on: function(event, sel, handler) {
                document.addEventListener(event, function(e) {
                    if (e.target.matches(sel) || e.target.closest(sel)) {
                        handler.call(e.target, e);
                    }
                });
                return this;
            }
        };
    }
    
    const elements = typeof selector === 'string' ? document.querySelectorAll(selector) : [selector];
    
    return {
        length: elements.length,
        each: function(callback) {
            elements.forEach((el, index) => callback.call(el, index, el));
            return this;
        },
        on: function(event, handler) {
            elements.forEach(el => el && el.addEventListener(event, handler));
            return this;
        },
        click: function(handler) {
            if (handler) {
                elements.forEach(el => el && el.addEventListener('click', handler));
            } else {
                elements.forEach(el => el && el.click());
            }
            return this;
        },
        addClass: function(className) {
            elements.forEach(el => el && el.classList.add(className));
            return this;
        },
        removeClass: function(className) {
            elements.forEach(el => el && el.classList.remove(className));
            return this;
        },
        fadeOut: function(duration) {
            elements.forEach(el => {
                if (el) {
                    el.style.transition = `opacity ${duration}ms`;
                    el.style.opacity = '0';
                    setTimeout(() => el.style.display = 'none', duration);
                }
            });
            return this;
        },
        delay: function(duration) {
            return this;
        },
        eq: function(index) {
            return $(elements[index]);
        },
        position: function() {
            return elements[0] ? elements[0].getBoundingClientRect() : {top: 0};
        },
        scrollTop: function() {
            return window.pageYOffset;
        },
        scroll: function(handler) {
            if (handler) {
                window.addEventListener('scroll', handler);
                handler();
            }
            return this;
        }
    };
};

$.extend = function(target, ...sources) {
    sources.forEach(source => Object.assign(target, source));
    return target;
};

console.log('jQuery implementation loaded');