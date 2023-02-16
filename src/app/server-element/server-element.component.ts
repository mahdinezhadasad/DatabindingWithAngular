import {
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
  OnChanges,
  DoCheck,
  SimpleChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild, ElementRef, ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit
  , OnChanges
  , DoCheck
  , AfterContentInit
  , AfterContentChecked
  , AfterViewInit
  , AfterViewChecked
  , OnDestroy {

  @Input('srvElement')element:{type:string,name:string,content:string};
  @Input() name:string;
  @ViewChild('heading',{static:true}) header: ElementRef;
  @ContentChild('contentParagraph',{static:true})  paragraph : ElementRef;


  constructor() {
    console.log('constructor called');
  }

  ngOnInit(): void {

    console.log('ngOnInit called !');
    console.log('Text Content' +this.header.nativeElement.textContent);
    console.log('Text Content of paragraph : ' + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck(): void {

    console.log('ngDoCheck called ');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called !');
    console.log(changes);
  }

  ngAfterContentInit(): void {

    console.log('ngAfterContentInit called');
    console.log('Text Content of paragraph : ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked(): void {

    console.log('ngAfterContentCheck Called !!');
  }

  ngAfterViewChecked(): void {

    console.log('ngAfterViewChecked Called !!');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInitCalled !!');
    console.log('Text Content :' + this.header.nativeElement.textContent);
  }

  ngOnDestroy(): void {

    console.log('on Destroy called ');
  }

}
