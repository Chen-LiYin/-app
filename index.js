const content = document.getElementById('text')
const date = document.getElementById('date')
const time = document.getElementById('time')
const addedBtn = document.getElementById('addedBtn')
const deletBtn = document.getElementById('deletBtn')
const list=document.getElementById('list')

const listContent=[]

function render(){
    let htmlStr = ''

    listContent.forEach(function(item){
        htmlStr = htmlStr + `        
            <div class="item">
                <div>
                    <p>內容:${item.content}</p>
                    <p>時間:${item.date} ${item.time}</p>
                </div>
            </div>
        `                       //模板語法，可以換行 ，''不可換行  
    })
    
    list.innerHTML = htmlStr
}

addedBtn.addEventListener('click',function(){
    console.log(content.value)
    console.log(date.value)
    console.log(time.value)

    listContent.push(   //unshift從前面推進去
        {
            content:content.value,
            date:date.value,
            time:time.value
        }
    )

    let htmlStr = ''

    render()
})

deletBtn.addEventListener('click',function(){
    listContent.pop() // 後面的值拉出來 ，shift從前面刪除

    render()

})