import {ChartComponent} from '../app/chart/chart.component';
import {ChartEventComponent} from '../app/chart/chart-event.component';
import {ChartCDNComponent} from '../app/chart/chart-cdn.component';
import {ChartDataComponent} from '../app/chart/chart-data.component';
import {ChartConfiguratedComponent} from '../app/chart/chart-configurated.component';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';

export default {
  title: 'Chart',
  component: ChartComponent,
  decorators: [
    moduleMetadata({
      declarations: [ChartComponent, ChartConfiguratedComponent, ChartCDNComponent, ChartDataComponent, ChartEventComponent],
      imports: [CommonModule],
    }),
  ],
};

export const Base = () => ({
  component: ChartComponent,
  template: `
    <div style="padding: 3rem">
     <div>
        <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/chart/chart.component.ts"
        target="_blank"
        >
            Source code
        </a>
     </div>
     <div>
        <app-chart></app-chart>
     </div>
    </div>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const Configurated = () => ({
  component: ChartConfiguratedComponent,
  props: {
    options: {
      type: 'bar',
      barWidth: 45,
      scales: {
        bottom: {
          text: 'month',
        },
        left: {
          maxTicks: 10,
          max: 100,
          min: 0,
        },
      },
      series: [
        {
          id: 'A',
          value: 'company C',
          color: '#5E83BA',
          pointType: 'circle',
          fill: '#5E83BA',
          barWidth: 35,
        },
      ],
    }
  },
  template: `
    <div style="padding: 3rem">
     <div>
        <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/chart/chart-configurated.component.ts"
        target="_blank"
        >
            Source code
        </a>
     </div>
     <div>
        <app-chart-configurated [options]="options"></app-chart-configurated>
     </div>
    </div>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const Data = () => ({
  component: ChartDataComponent,
  template: `
    <div style="padding: 3rem">
     <div>
        <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/chart/chart-data.component.ts"
        target="_blank"
        >
            Source code
        </a>
     </div>
     <div>
        <app-chart-data></app-chart-data>
     </div>
    </div>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const CDN = () => ({
  component: ChartCDNComponent,
  template: `
    <div style="padding: 3rem">
     <div>
        <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/chart/chart-cdn.component.ts"
        target="_blank"
        >
            Source code
        </a>
     </div>
     <div>
        <app-chart-cdn></app-chart-cdn>
     </div>
    </div>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const Events = () => ({
  component: ChartEventComponent,
  template: `
    <div style="padding: 3rem">
     <div>
        <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/chart/chart-event.component.ts"
        target="_blank"
        >
            Source code
        </a>
     </div>
     <div>
        <app-chart-event></app-chart-event>
     </div>
    </div>
  `,
  styleUrls: ['./styles/stories.css'],
});
