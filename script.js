const selectors = document.querySelectorAll('.selector');
    selectors.forEach((el) => {
        el.addEventListener('click',
            (event) => {
                const selector = event.target.closest('.selector')
                selector.classList.add('clicked')
                selector.onanimationend = () => {
                    selector.classList.remove('clicked')

                }
            })
        el.addEventListener('click', pickAnOption)
    })

    function pickAnOption(event) {
        const selector = event.target.closest('.selector');
        const userPicked = selector.dataset.value;
        console.log(`user picked ${userPicked}`)

        selector.dataset.selected = 'true';

        selectors.forEach((sel) => {
            if (sel != selector) {
                sel.dataset.selected = 'false';
            }
        })

        const map = {
            1: 'rock',
            2: 'paper',
            3: 'scissors'
        }

        const randomKey = Math.ceil(Math.random() * 3)
        const computerPicked = map[randomKey]
        console.log(`computer picked ${computerPicked}`)

        const winner = decideWinner(userPicked, computerPicked)
        let userWins = 0;
        let computerWins = 0;

        if (winner == 'user') userWins++;
        else if (winner = 'computer') computerWins++;



    }

    function decideWinner(userPick, computerPick) {
        if (userPicked == computerPicked) {
            console.log('Tie')
        } else
            switch (computerPicked) {
                case 'rock':
                    switch (userPicked) {
                        case 'paper': return 'user'
                        case 'scissors': return 'computer'
                    }
                    break;
                case 'paper':
                    switch (userPicked) {
                        case 'scissors': return 'user'
                        case 'rock': return 'computer'
                    }
                    break;
                case 'scissors':
                    switch (userPicked) {
                        case 'rock': return 'user'
                        case 'paper': return 'computer'
                    }
                    break;
            }
    }