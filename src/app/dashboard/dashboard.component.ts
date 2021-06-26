import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

export interface PeriodicElement {
  id: number;
  name: string;
  owner: string;
  lastModified: string;
};

const TASKS_DATA: PeriodicElement[][] = [
  [
    { name: 'Task 1', owner: 'me', lastModified: '10 : 34 PM', id: 1},
    { name: 'Task 2', owner: 'me', lastModified: '14 : 41 PM', id: 2 },
    { name: 'Task 3', owner: 'me', lastModified: '01 : 15 PM', id: 3 },
    { name: 'Task 4', owner: 'me', lastModified: '03 : 11 PM', id: 4 },
    { name: 'Task 5', owner: 'me', lastModified: '10 : 34 PM', id: 5 },
    { name: 'Task 6', owner: 'me', lastModified: '14 : 41 PM', id: 6 },
    { name: 'Task 7', owner: 'me', lastModified: '01 : 15 PM', id: 7 },
    { name: 'Task 8', owner: 'me', lastModified: '03 : 11 PM', id: 8 },
    { name: 'Task 9', owner: 'me', lastModified: '01 : 15 PM', id: 9 },
    { name: 'Task 10', owner: 'me', lastModified: '03 : 11 PM', id: 10 }
  ],
  [
    { name: 'Task 1', owner: 'me', lastModified: '10 : 34 PM', id: 11 },
    { name: 'Task 2', owner: 'me', lastModified: '14 : 41 PM', id: 12 },
    { name: 'Task 3', owner: 'me', lastModified: '01 : 15 PM', id: 13 },
    { name: 'Task 4', owner: 'me', lastModified: '03 : 11 PM', id: 14 },
    { name: 'Task 5', owner: 'me', lastModified: '03 : 11 PM', id: 15 }
  ],
  [
    { name: 'Task 1', owner: 'me', lastModified: '10 : 34 PM', id: 16 },
    { name: 'Task 2', owner: 'me', lastModified: '14 : 41 PM', id: 17 },
    { name: 'Task 3', owner: 'me', lastModified: '01 : 15 PM', id: 18 },
    { name: 'Task 4', owner: 'me', lastModified: '03 : 11 PM', id: 19 },
    { name: 'Task 5', owner: 'me', lastModified: '03 : 11 PM', id: 20 },
    { name: 'Task 6', owner: 'me', lastModified: '03 : 11 PM', id: 21 },
    { name: 'Task 7', owner: 'me', lastModified: '03 : 11 PM', id: 22 }
  ],
  [
    { name: 'Task 1', owner: 'me', lastModified: '10 : 34 PM', id: 23 },
    { name: 'Task 2', owner: 'me', lastModified: '14 : 41 PM', id: 24 },
    { name: 'Task 3', owner: 'me', lastModified: '01 : 15 PM', id: 25 },
    { name: 'Task 4', owner: 'me', lastModified: '03 : 11 PM', id: 26 }
  ],
  [
    { name: 'Task 1', owner: 'me', lastModified: '10 : 34 PM', id: 27 },
    { name: 'Task 2', owner: 'me', lastModified: '14 : 41 PM', id: 28 },
    { name: 'Task 3', owner: 'me', lastModified: '01 : 15 PM', id: 29 },
    { name: 'Task 4', owner: 'me', lastModified: '03 : 11 PM', id: 30 },
    { name: 'Task 5', owner: 'me', lastModified: '03 : 11 PM', id: 31 },
    { name: 'Task 6', owner: 'me', lastModified: '03 : 11 PM', id: 32 }
  ],
  [
    { name: 'Task 1', owner: 'me', lastModified: '10 : 34 PM', id: 33 },
    { name: 'Task 2', owner: 'me', lastModified: '14 : 41 PM', id: 34 },
    { name: 'Task 3', owner: 'me', lastModified: '01 : 15 PM', id: 35 }
  ]
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  navList: { name: string, icon: string }[] = [
    { name: 'My Drive', icon: 'insert_drive_file' },
    { name: 'Computers', icon: 'computer' },
    { name: 'Shared with me', icon: 'folder_shared' },
    { name: 'Recent', icon: 'access_time' },
    { name: 'Starred', icon: 'star_border' },
    { name: 'Trash', icon: 'restore_from_trash' }
  ];
  activeNavItem: string;
  search: string = '';

  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['name', 'owner', 'lastModified'];
  tableDataSource: MatTableDataSource<any>;

  constructor(private router: Router) {

  }

  ngOnInit() {
    this.activeNavItem = this.navList[0].name;
    this.tableDataSource = new MatTableDataSource(TASKS_DATA[0]);
  }
  
  ngAfterViewInit() {
    this.tableDataSource.sort = this.sort;
  }

  onNavigate(navItem: string) {
    this.activeNavItem = navItem;
    const item = this.navList.find(item => item.name === navItem);
    const index = this.navList.indexOf(item);
    if (index > -1) {
      this.drowTaskTable(index);
    }
  }

  drowTaskTable(index: number) {
    this.tableDataSource = new MatTableDataSource(TASKS_DATA[index]);
    this.tableDataSource.sort = this.sort;
  }

  navigateToTask(taskId: number) {
    this.router.navigate(['task', taskId]);
  }
}
