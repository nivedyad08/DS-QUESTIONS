var mergeTwoLists = function(list1, list2) {
    let curr1 = list1.head
    let curr2 = list2.head
    let list3 = []
    while(curr1.next!= null && curr2.next != null){
        if(curr1.value <curr2.value){
            list3.push(curr1.value)
            curr1 = curr1.next
        }else{
            list3.push(curr2.value)
            curr2 = curr2.next
        }
    }
    while(curr1.next != null){
        list3.push(curr1.value)
        curr1 = curr1.next
    }
    while(curr2.next != null){
        list3.push(curr2.value)
        curr2 = curr2.next
    }
    console.log(list3);
};

mergeTwoLists([1,2,4],[1,2,4])

