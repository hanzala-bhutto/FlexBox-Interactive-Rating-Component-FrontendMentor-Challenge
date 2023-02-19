submitButton = document.getElementsByTagName('button');

// button to show container-2 with selected rating 
submitButton[0].addEventListener('click', function(event) {    
    rate = document.getElementsByClassName('active')[0];
    if (!rate){
        alert('Please select a rating');
        return;
    }
    document.getElementsByClassName('dynamic-rate')[0].innerHTML=rate.innerHTML;
    document.getElementsByClassName('Container-1')[0].style.display = 'none';
    document.getElementsByClassName('Container-2')[0].style.display = 'block';

    // function to return back to initial rating selection container after 3 seconds
    setTimeout(function() {
        document.getElementsByClassName('Container-2')[0].style.display = 'none';
        document.getElementsByClassName('Container-1')[0].style.display = 'block';
    },3000);
});

// function to get rating from container-1
var rating = document.getElementsByClassName('rating')[0];
var rates = rating.getElementsByClassName('rate');

// function to select rating and activate it 
for(i = 0; i < rates.length; i++) {
    rates[i].addEventListener('click', function() {
        var rate = document.getElementsByClassName('active');
        if (rate.length > 0) {
            rate[0].className = rate[0].className.replace(" active", "");
        }
        this.className += " active";
    });
};