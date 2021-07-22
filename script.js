class Calculator {
    constructor() {
        this.topdisplayText = document.querySelector('[data-topdiplay]')
        this.bottondisplayText = document.querySelector('[data-bottondisplay]')
        this.numberBtn = document.querySelectorAll('[data-number]')
        this.acBtn = document.querySelector('[data-ac]')
        this.flipBtn = document.querySelector('[data-flip]')
        this.operationBtn = document.querySelectorAll('[data-operation]')
        this.equalsBtn = document.querySelector('[data-equals]')
        this.percentBtn = document.querySelector('[data-percent]')
        this.ac()
        this.createlisteners()
    }

    //methods
    createlisteners() {
        this.numberBtn.forEach(button => {
            button.addEventListener('click', () => {
                this.appendnumber(button.innerText)
                this.updatedisplay()
            })
        })
        this.acBtn.addEventListener('click', () => {
            this.ac()
            this.updatedisplay()
        })
        this.flipBtn.addEventListener('click', () => {
            this.flip()
            this.updatedisplay()
        })
        this.operationBtn.forEach(button => {
            button.addEventListener('click', () => {
                this.pickoperation(button.innerText)
                this.updatedisplay()
            })
        })
        this.equalsBtn.addEventListener('click', () => {
            this.equalto()
            this.updatedisplay()
        })
        this.percentBtn.addEventListener('click', () => {
            this.percent()
            this.updatedisplay()
        })
    }
    appendnumber(number) {
        if (number === ',' && this.bottondisplay.includes(',')) return
        if (number === ',' && this.bottondisplay === "") {
            this.bottondisplay = '0,'
            this.bottondisplay = this.bottondisplay.toString().slice(0, -1)
        }
        /* if (this.bottondisplay === '0,,'){
            this.bottondisplay = this.bottondisplay.toString().slice(0, -1)
        } 
        if (this.bottondisplay == 0) {
            this.bottondisplay = ''
        }*/

        this.bottondisplay = this.bottondisplay.toString() + number.toString()
    }
    ac() {
        this.bottondisplay = ''
        this.topdisplay = ''
        this.operation = ''
    }
    flip() {
        this.bottondisplay *= -1
    }
    pickoperation(operation) {
        if (this.bottondisplay === '') {
            return
        }
        if (this.topdisplay !== '') {
            this.equalto()
        }
        this.operation = operation
        this.topdisplay = this.bottondisplay
        this.bottondisplay = ''
    }
    percent() {
        this.bottondisplay /= 100
    }
    equalto() {
        let result         
        let first = parseFloat(this.topdisplay)
        let second = parseFloat(this.bottondisplay)
        // debugger
        switch (this.operation) {
            case "÷":
                result = first / second
                break
            case "×":
                result = first * second
                break
            case "-":
                result = first - second
                break
            case "+":
                result = first + second
                break
            default:
                break
        }
        this.bottondisplay = result
        this.topdisplay = ''
        this.operation = ''
    }
    updatedisplay() {
        this.bottondisplayText.innerText = this.bottondisplay
        if (this.operation != null) {
            this.topdisplayText.innerText = `${this.topdisplay} ${this.operation}`
        }
    }
}
let calculator = new Calculator()

