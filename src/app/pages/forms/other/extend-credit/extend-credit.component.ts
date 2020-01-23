import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-extend-credit',
  templateUrl: './extend-credit.component.html',
  styleUrls: ['./extend-credit.component.scss']
})
export class ExtendCreditComponent implements OnInit {

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.test();
  }

  formName = 'Extend Credit Limit Ver 2';

  onSubmit(data) {
    let form = data.form.value;
    console.log(form);
    this.commonService.postForm(form);
  }

  districts = ['Borås', 'Borlänge', 'Gävle', 'Göteborg', 'Halmstad', 'Helsingborg', 'Hudiksvall', 'Hultsfred', 'Jönköping', 'Karlshamn', 'Karlstad', 'Kristianstad', 'Linköping', 'Luleå', 'Malmö', 'Nybro', 'Örebro', 'Örnsköldsvik', 'Östersund', 'Skara', 'Skellefteå', 'Stockholm', 'Strömsund', 'Sundsvall', 'Umeå', 'Vänersborg', 'Värnamo', 'Västerås', 'Växjö', 'Visby', 'Air &amp; Ocean', 'Fairs &amp; Exhibitions', 'Rail', 'KAM kunder', 'MAM kunder'];
  frequences = [{ frequence: 'Daglig', Id: 0 }, { frequence: 'Veckovis', Id: 1 }, { frequence: 'Varannan vecka', Id: 2 }, { frequence: 'Månadsvis', Id: 3 }];
  ratings = ['AAA', 'AA', 'A', 'B', 'C', 'Nytt', '-'];
  customerIsValues = ['Ny', 'Befintlig'];

  daily = [];
  weekley = [];
  biweekly = [];
  monthly = [];

  
  test1() {
    console.log('Hej');
  }

  test() {
    for (let i = 1; i <= 30; i++) {
      this.weekley.push(i);
      this.daily.push(i);
    }

    for (let i = 1; i <= 20; i++) {
      this.biweekly.push(i)
    }

    for (let i = 1; i <= 10; i++) {
      this.monthly.push(i);
    }
  }

  checkValue = function (value, target) {

    //DOMESTIC
    if (target == 'DomesticPaymentCondition') {
      if (value == 'Daglig') {
        this.domesticDays = this.daily;
      }
      if (value == 'Veckovis') {
        this.domesticDays = this.weekley;
      }
      if (value == 'Varannan vecka') {
        this.domesticDays = this.biweekly;
      }
      if (value == 'Månadsvis') {
        this.domesticDays = this.monthly;
      }
    }

    if (target == 'DomesticPaymentConditionNew') {
      if (value == 'Daglig') {
        this.domesticDesiredDays = this.daily;
      }
      if (value == 'Veckovis') {
        this.domesticDesiredDays = this.weekley;
      }
      if (value == 'Varannan vecka') {
        this.domesticDesiredDays = this.biweekly;
      }
      if (value == 'Månadsvis') {
        this.domesticDesiredDays = this.monthly;
      }
    }

    //FOREIGN
    if (target == 'ForeignPaymentCondition') {
      if (value == 'Daglig') {
        this.foreignDays = this.daily;
      }
      if (value == 'Veckovis') {
        this.foreignDays = this.weekley;
      }
      if (value == 'Varannan vecka') {
        this.foreignDays = this.biweekly;
      }
      if (value == 'Månadsvis') {
        this.foreignDays = this.monthly;
      }
    }

    if (target == 'ForeignPaymentConditionNew') {
      if (value == 'Daglig') {
        this.foreignDesiredDays = this.daily;
      }
      if (value == 'Veckovis') {
        this.foreignDesiredDays = this.weekley;
      }
      if (value == 'Varannan vecka') {
        this.foreignDesiredDays = this.biweekly;
      }
      if (value == 'Månadsvis') {
        this.foreignDesiredDays = this.monthly;
      }
    }

    //AIR
    if (target == 'AirPaymentCondition') {
      if (value == 'Daglig') {
        this.airDays = this.daily;
      }
      if (value == 'Veckovis') {
        this.airDays = this.weekley;
      }
      if (value == 'Varannan vecka') {
        this.airDays = this.biweekly;
      }
      if (value == 'Månadsvis') {
        this.airDays = this.monthly;
      }
    }

    if (target == 'AirPaymentConditionNew') {
      if (value == 'Daglig') {
        this.airDesiredDays = this.daily;
      }
      if (value == 'Veckovis') {
        this.airDesiredDays = this.weekley;
      }
      if (value == 'Varannan vecka') {
        this.airDesiredDays = this.biweekly;
      }
      if (value == 'Månadsvis') {
        this.airDesiredDays = this.monthly;
      }
    }

    //OCEAN
    if (target == 'OceanPaymentCondition') {
      if (value == 'Daglig') {
        this.oceanDays = this.daily;
      }
      if (value == 'Veckovis') {
        this.oceanDays = this.weekley;
      }
      if (value == 'Varannan vecka') {
        this.oceanDays = this.biweekly;
      }
      if (value == 'Månadsvis') {
        this.oceanDays = this.monthly;
      }
    }


    if (target == 'OceanPaymentConditionNew') {
      if (value == 'Daglig') {
        this.oceanDesiredDays = this.daily;
      }
      if (value == 'Veckovis') {
        this.oceanDesiredDays = this.weekley;
      }
      if (value == 'Varannan vecka') {
        this.oceanDesiredDays = this.biweekly;
      }
      if (value == 'Månadsvis') {
        this.oceanDesiredDays = this.monthly;
      }
    }


    //FAIRS AND EXHIBITIONS
    if (target == 'FandEPaymentCondition') {
      if (value == 'Daglig') {
        this.fairsAndExhibitionDays = this.daily;
      }
      if (value == 'Veckovis') {
        this.fairsAndExhibitionDays = this.weekley;
      }
      if (value == 'Varannan vecka') {
        this.fairsAndExhibitionDays = this.biweekly;
      }
      if (value == 'Månadsvis') {
        this.fairsAndExhibitionDays = this.monthly;
      }
    }


    if (target == 'FandEPaymentConditionNew') {
      if (value == 'Daglig') {
        this.fairsAndExhibitionDesiredDays = this.daily;
      }
      if (value == 'Veckovis') {
        this.fairsAndExhibitionDesiredDays = this.weekley;
      }
      if (value == 'Varannan vecka') {
        this.fairsAndExhibitionDesiredDays = this.biweekly;
      }
      if (value == 'Månadsvis') {
        this.fairsAndExhibitionDesiredDays = this.monthly;
      }
    }
  }



} 
