/**
 * Created by luizcavalieri on 3/2/17.
 */
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MessageModel } from '../../../model/message.model';
import { GiftModel } from '../../../model/gifts.model';


declare var jQuery: any;

@Component({
    selector: 'message-list-component',
    templateUrl: 'message-list.component.html',
    styleUrls: ['../dashboard.style.scss']

})
export class MessageListComponent implements OnInit {

    giftsToChoose: GiftModel [] = [];

    filteredGifts: any[];

    @Input()
    messagesScheduled: MessageModel[];

    @Output()
    selectedMessage: MessageModel;

    @Input()
    selected: MessageModel;

    giftsTitle: string[];

    constructor() {
        this.initializeGifts();
    }

    ngOnInit(): void {

    }

    onSelect(message: MessageModel): void{

        this.selectedMessage = message;

        console.debug(message.name);
    }


    btnClick(message: MessageModel){

        this.selectedMessage = message;

        console.debug(message.name);

    }

    getGifts(event){

        this.filteredGifts = [];

        for(let i = 0; i < this.giftsToChoose.length; i++) {
            let giftTitle = this.giftsToChoose[i];

            // if(giftTitle.title.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
                this.filteredGifts.push(giftTitle.title);
            // }
        }

    }

    handleDropdownClick() {
        this.filteredGifts = [];

        for(let i = 0; i < this.giftsToChoose.length; i++){

            let giftTittle = this.giftsToChoose[i];

            this.giftsTitle.push(giftTittle.title);
        }

        //mimic remote call
        setTimeout(() => {
            this.filteredGifts = this.giftsTitle;
        }, 100)
    }



    initializeGifts(){

        this.giftsToChoose = [
            {
                title: 'Superhero Knee Socks',
                description: 'Tote bag direct trade umami, mumblecore dreamcatcher marfa mustache poke paleo vice shoreditch small batch bespoke.',
                image: ''
            },
            {
                title: 'Alien Head in a Jar',
                description: '',
                image: ''
            },
            {
                title: 'The Book Of “Unnecessary” Quotation Marks',
                description: 'Listicle bushwick godard kinfolk, tousled stumptown jianbing. Before they sold out chia readymade',
                image: ''
            },
            {
                title: 'Craftlicious Beer',
                description: 'jean shorts tbh paleo vegan butcher banh mi raclette chillwave gluten-free squid coloring',
                image: ''
            },
            {
                title: 'Batman Snuggie',
                description: 'mami single-origin coffee chillwave, craft beer health goth post-ironic marfa ennui offa',
                image: ''
            },
            {
                title: 'Bacon Bandages',
                description: 'Organic hell of helvetica bespoke. Affogato letterpress paleo mixtape meh pabst asymmetrical, kitsch sartorial distillery microdosing. ',
                image: ''
            },
            {
                title: 'BBQ Candles',
                description: 'Umami single-origin coffee chillwave, craft beer health goth post-ironic marfa ennui offal pabst kombucha',
                image: ''
            },
            {
                title: 'The Zombie Survival Guide',
                description: 'Listicle bushwick godard kinfolk, tousled stumptown jianbing. Before they sold out chia readymade,',
                image: ''
            },
            {
                title: 'Canned Unicorn Meat',
                description: 'Ethical fap pitchfork, chartreuse salvia kale chips organic. Raw denim YOLO chicharrones aesthetic freegan, bespoke',
                image: ''
            },
            {
                title: 'Giant Fist Can Holder',
                description: 'Truffaut VHS chillwave meh, forage tumblr stumptown pitchfork.',
                image: ''
            },
            {
                title: 'Camera Lens Mug',
                description: 'Sustainable williamsburg paleo af, cardigan activated charcoal etsy heirloom fap next level tousled thundercats narwhal tumblr',
                image: ''
            },
// source http://dodoburd.com/gag-gifts
        ];

    }

}