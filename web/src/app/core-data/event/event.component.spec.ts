/*******************************************************************************
 * Copyright © 2022-2023 VMware, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 * 
 * @author: Huaqiao Zhang, <huaqiaoz@vmware.com>
 *******************************************************************************/

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';

import { EventComponent } from './event.component';
import { DataService } from '../../services/data.service';

describe('EventComponent: unit test', () => {
  let component: EventComponent;
  let fixture: ComponentFixture<EventComponent>;
  let mockDataService: DataService

  beforeEach(async () => {
    mockDataService = jasmine.createSpyObj('DataService', {
      ping: of({})
    })

    await TestBed.configureTestingModule({
      declarations: [ EventComponent ],
      imports: [FormsModule],
      providers: [{provide: DataService, useValue: mockDataService}]
    }).compileComponents();

    fixture = TestBed.createComponent(EventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('renders without errors', () => {
    expect(component).toBeTruthy();
  });
});
