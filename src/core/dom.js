class Dom {
  constructor(selector) {
    this.$el = typeof selector === 'string'
      ? document.querySelector(selector) : selector
  }
  html(html) {
    if (typeof html === 'string') {
      this.$el.innerHTML = html
      return this
    }
    return this.$el.outerHTML.trim()
  }
  text(val) {
    if (val) {
      this.$el.textContent = val
      return this
    }
    return this.$el.textContent
  }
  clear() {
    this.html('')
    return this
  }
  on(eventType, callback) {
    this.$el.addEventListener(eventType, callback)
    return this
  }
  off(eventType, listener) {
    this.$el.removeEventListener(eventType, listener)
    return this
  }
  append(node) {
    if (node instanceof Dom) {
      node = node.$el
    }
    this.$el.append(node)
    return this
  }
  get data() {
    return this.$el.dataset
  }
  addClass(className) {
    this.$el.classList.add(className)
  }
  removeClass(className) {
    this.$el.classList.remove(className)
  }
  css(styles = {}) {
    Object
      .keys(styles)
      .forEach(key => {
        this.$el.style[key] = styles[key]
    })
    return this
  }
  find(selector) {
    return $(this.$el.querySelector(selector))
  }
  findAll(selector) {
		return this.$el.querySelectorAll(selector)
	}
}

export function $(sel) {
  return new Dom(sel)
}

$.create = function(tagname, classes) {
  const el = document.createElement(tagname)
  if (classes) {
    el.classList.add(classes)
  }
  return $(el)
}

