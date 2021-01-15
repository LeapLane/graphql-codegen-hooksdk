import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type IInt_Comparison_Exp = {
  _eq: Maybe<Scalars['Int']>;
  _gt: Maybe<Scalars['Int']>;
  _gte: Maybe<Scalars['Int']>;
  _in: Maybe<Array<Scalars['Int']>>;
  _is_null: Maybe<Scalars['Boolean']>;
  _lt: Maybe<Scalars['Int']>;
  _lte: Maybe<Scalars['Int']>;
  _neq: Maybe<Scalars['Int']>;
  _nin: Maybe<Array<Scalars['Int']>>;
};




/** order by aggregate values of table "Project" */
export type IProject_Aggregate_Order_By = {
  avg: Maybe<IProject_Avg_Order_By>;
  count: Maybe<IOrder_By>;
  max: Maybe<IProject_Max_Order_By>;
  min: Maybe<IProject_Min_Order_By>;
  stddev: Maybe<IProject_Stddev_Order_By>;
  stddev_pop: Maybe<IProject_Stddev_Pop_Order_By>;
  stddev_samp: Maybe<IProject_Stddev_Samp_Order_By>;
  sum: Maybe<IProject_Sum_Order_By>;
  var_pop: Maybe<IProject_Var_Pop_Order_By>;
  var_samp: Maybe<IProject_Var_Samp_Order_By>;
  variance: Maybe<IProject_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Project" */
export type IProject_Arr_Rel_Insert_Input = {
  data: Array<IProject_Insert_Input>;
  on_conflict: Maybe<IProject_On_Conflict>;
};


/** order by avg() on columns of table "Project" */
export type IProject_Avg_Order_By = {
  id: Maybe<IOrder_By>;
  user_id: Maybe<IOrder_By>;
};

/** Boolean expression to filter rows from the table "Project". All fields are combined with a logical 'AND'. */
export type IProject_Bool_Exp = {
  Tasks: Maybe<ITask_Bool_Exp>;
  User: Maybe<IUser_Bool_Exp>;
  _and: Maybe<Array<Maybe<IProject_Bool_Exp>>>;
  _not: Maybe<IProject_Bool_Exp>;
  _or: Maybe<Array<Maybe<IProject_Bool_Exp>>>;
  id: Maybe<IInt_Comparison_Exp>;
  name: Maybe<IString_Comparison_Exp>;
  user_id: Maybe<IInt_Comparison_Exp>;
};

/** unique or primary key constraints on table "Project" */
export enum IProject_Constraint {
  /** unique or primary key constraint */
  ProjectPkey = 'Project_pkey'
}

/** input type for incrementing integer column in table "Project" */
export type IProject_Inc_Input = {
  id: Maybe<Scalars['Int']>;
  user_id: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "Project" */
export type IProject_Insert_Input = {
  Tasks: Maybe<ITask_Arr_Rel_Insert_Input>;
  User: Maybe<IUser_Obj_Rel_Insert_Input>;
  id: Maybe<Scalars['Int']>;
  name: Maybe<Scalars['String']>;
  user_id: Maybe<Scalars['Int']>;
};


/** order by max() on columns of table "Project" */
export type IProject_Max_Order_By = {
  id: Maybe<IOrder_By>;
  name: Maybe<IOrder_By>;
  user_id: Maybe<IOrder_By>;
};


/** order by min() on columns of table "Project" */
export type IProject_Min_Order_By = {
  id: Maybe<IOrder_By>;
  name: Maybe<IOrder_By>;
  user_id: Maybe<IOrder_By>;
};


/** input type for inserting object relation for remote table "Project" */
export type IProject_Obj_Rel_Insert_Input = {
  data: IProject_Insert_Input;
  on_conflict: Maybe<IProject_On_Conflict>;
};

/** on conflict condition type for table "Project" */
export type IProject_On_Conflict = {
  constraint: IProject_Constraint;
  update_columns: Array<IProject_Update_Column>;
  where: Maybe<IProject_Bool_Exp>;
};

/** ordering options when selecting data from "Project" */
export type IProject_Order_By = {
  Tasks_aggregate: Maybe<ITask_Aggregate_Order_By>;
  User: Maybe<IUser_Order_By>;
  id: Maybe<IOrder_By>;
  name: Maybe<IOrder_By>;
  user_id: Maybe<IOrder_By>;
};

/** primary key columns input for table: "Project" */
export type IProject_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "Project" */
export enum IProject_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "Project" */
export type IProject_Set_Input = {
  id: Maybe<Scalars['Int']>;
  name: Maybe<Scalars['String']>;
  user_id: Maybe<Scalars['Int']>;
};


/** order by stddev() on columns of table "Project" */
export type IProject_Stddev_Order_By = {
  id: Maybe<IOrder_By>;
  user_id: Maybe<IOrder_By>;
};


/** order by stddev_pop() on columns of table "Project" */
export type IProject_Stddev_Pop_Order_By = {
  id: Maybe<IOrder_By>;
  user_id: Maybe<IOrder_By>;
};


/** order by stddev_samp() on columns of table "Project" */
export type IProject_Stddev_Samp_Order_By = {
  id: Maybe<IOrder_By>;
  user_id: Maybe<IOrder_By>;
};


/** order by sum() on columns of table "Project" */
export type IProject_Sum_Order_By = {
  id: Maybe<IOrder_By>;
  user_id: Maybe<IOrder_By>;
};

/** update columns of table "Project" */
export enum IProject_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UserId = 'user_id'
}


/** order by var_pop() on columns of table "Project" */
export type IProject_Var_Pop_Order_By = {
  id: Maybe<IOrder_By>;
  user_id: Maybe<IOrder_By>;
};


/** order by var_samp() on columns of table "Project" */
export type IProject_Var_Samp_Order_By = {
  id: Maybe<IOrder_By>;
  user_id: Maybe<IOrder_By>;
};


/** order by variance() on columns of table "Project" */
export type IProject_Variance_Order_By = {
  id: Maybe<IOrder_By>;
  user_id: Maybe<IOrder_By>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type IString_Comparison_Exp = {
  _eq: Maybe<Scalars['String']>;
  _gt: Maybe<Scalars['String']>;
  _gte: Maybe<Scalars['String']>;
  _ilike: Maybe<Scalars['String']>;
  _in: Maybe<Array<Scalars['String']>>;
  _is_null: Maybe<Scalars['Boolean']>;
  _like: Maybe<Scalars['String']>;
  _lt: Maybe<Scalars['String']>;
  _lte: Maybe<Scalars['String']>;
  _neq: Maybe<Scalars['String']>;
  _nilike: Maybe<Scalars['String']>;
  _nin: Maybe<Array<Scalars['String']>>;
  _nlike: Maybe<Scalars['String']>;
  _nsimilar: Maybe<Scalars['String']>;
  _similar: Maybe<Scalars['String']>;
};




/** order by aggregate values of table "Task" */
export type ITask_Aggregate_Order_By = {
  avg: Maybe<ITask_Avg_Order_By>;
  count: Maybe<IOrder_By>;
  max: Maybe<ITask_Max_Order_By>;
  min: Maybe<ITask_Min_Order_By>;
  stddev: Maybe<ITask_Stddev_Order_By>;
  stddev_pop: Maybe<ITask_Stddev_Pop_Order_By>;
  stddev_samp: Maybe<ITask_Stddev_Samp_Order_By>;
  sum: Maybe<ITask_Sum_Order_By>;
  var_pop: Maybe<ITask_Var_Pop_Order_By>;
  var_samp: Maybe<ITask_Var_Samp_Order_By>;
  variance: Maybe<ITask_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Task" */
export type ITask_Arr_Rel_Insert_Input = {
  data: Array<ITask_Insert_Input>;
  on_conflict: Maybe<ITask_On_Conflict>;
};


/** order by avg() on columns of table "Task" */
export type ITask_Avg_Order_By = {
  id: Maybe<IOrder_By>;
  project_id: Maybe<IOrder_By>;
};

/** Boolean expression to filter rows from the table "Task". All fields are combined with a logical 'AND'. */
export type ITask_Bool_Exp = {
  Project: Maybe<IProject_Bool_Exp>;
  _and: Maybe<Array<Maybe<ITask_Bool_Exp>>>;
  _not: Maybe<ITask_Bool_Exp>;
  _or: Maybe<Array<Maybe<ITask_Bool_Exp>>>;
  id: Maybe<IInt_Comparison_Exp>;
  name: Maybe<IString_Comparison_Exp>;
  project_id: Maybe<IInt_Comparison_Exp>;
};

/** unique or primary key constraints on table "Task" */
export enum ITask_Constraint {
  /** unique or primary key constraint */
  TaskPkey = 'Task_pkey'
}

/** input type for incrementing integer column in table "Task" */
export type ITask_Inc_Input = {
  id: Maybe<Scalars['Int']>;
  project_id: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "Task" */
export type ITask_Insert_Input = {
  Project: Maybe<IProject_Obj_Rel_Insert_Input>;
  id: Maybe<Scalars['Int']>;
  name: Maybe<Scalars['String']>;
  project_id: Maybe<Scalars['Int']>;
};


/** order by max() on columns of table "Task" */
export type ITask_Max_Order_By = {
  id: Maybe<IOrder_By>;
  name: Maybe<IOrder_By>;
  project_id: Maybe<IOrder_By>;
};


/** order by min() on columns of table "Task" */
export type ITask_Min_Order_By = {
  id: Maybe<IOrder_By>;
  name: Maybe<IOrder_By>;
  project_id: Maybe<IOrder_By>;
};


/** input type for inserting object relation for remote table "Task" */
export type ITask_Obj_Rel_Insert_Input = {
  data: ITask_Insert_Input;
  on_conflict: Maybe<ITask_On_Conflict>;
};

/** on conflict condition type for table "Task" */
export type ITask_On_Conflict = {
  constraint: ITask_Constraint;
  update_columns: Array<ITask_Update_Column>;
  where: Maybe<ITask_Bool_Exp>;
};

/** ordering options when selecting data from "Task" */
export type ITask_Order_By = {
  Project: Maybe<IProject_Order_By>;
  id: Maybe<IOrder_By>;
  name: Maybe<IOrder_By>;
  project_id: Maybe<IOrder_By>;
};

/** primary key columns input for table: "Task" */
export type ITask_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "Task" */
export enum ITask_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ProjectId = 'project_id'
}

/** input type for updating data in table "Task" */
export type ITask_Set_Input = {
  id: Maybe<Scalars['Int']>;
  name: Maybe<Scalars['String']>;
  project_id: Maybe<Scalars['Int']>;
};


/** order by stddev() on columns of table "Task" */
export type ITask_Stddev_Order_By = {
  id: Maybe<IOrder_By>;
  project_id: Maybe<IOrder_By>;
};


/** order by stddev_pop() on columns of table "Task" */
export type ITask_Stddev_Pop_Order_By = {
  id: Maybe<IOrder_By>;
  project_id: Maybe<IOrder_By>;
};


/** order by stddev_samp() on columns of table "Task" */
export type ITask_Stddev_Samp_Order_By = {
  id: Maybe<IOrder_By>;
  project_id: Maybe<IOrder_By>;
};


/** order by sum() on columns of table "Task" */
export type ITask_Sum_Order_By = {
  id: Maybe<IOrder_By>;
  project_id: Maybe<IOrder_By>;
};

/** update columns of table "Task" */
export enum ITask_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ProjectId = 'project_id'
}


/** order by var_pop() on columns of table "Task" */
export type ITask_Var_Pop_Order_By = {
  id: Maybe<IOrder_By>;
  project_id: Maybe<IOrder_By>;
};


/** order by var_samp() on columns of table "Task" */
export type ITask_Var_Samp_Order_By = {
  id: Maybe<IOrder_By>;
  project_id: Maybe<IOrder_By>;
};


/** order by variance() on columns of table "Task" */
export type ITask_Variance_Order_By = {
  id: Maybe<IOrder_By>;
  project_id: Maybe<IOrder_By>;
};




/** order by aggregate values of table "User" */
export type IUser_Aggregate_Order_By = {
  avg: Maybe<IUser_Avg_Order_By>;
  count: Maybe<IOrder_By>;
  max: Maybe<IUser_Max_Order_By>;
  min: Maybe<IUser_Min_Order_By>;
  stddev: Maybe<IUser_Stddev_Order_By>;
  stddev_pop: Maybe<IUser_Stddev_Pop_Order_By>;
  stddev_samp: Maybe<IUser_Stddev_Samp_Order_By>;
  sum: Maybe<IUser_Sum_Order_By>;
  var_pop: Maybe<IUser_Var_Pop_Order_By>;
  var_samp: Maybe<IUser_Var_Samp_Order_By>;
  variance: Maybe<IUser_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "User" */
export type IUser_Arr_Rel_Insert_Input = {
  data: Array<IUser_Insert_Input>;
  on_conflict: Maybe<IUser_On_Conflict>;
};


/** order by avg() on columns of table "User" */
export type IUser_Avg_Order_By = {
  id: Maybe<IOrder_By>;
};

/** Boolean expression to filter rows from the table "User". All fields are combined with a logical 'AND'. */
export type IUser_Bool_Exp = {
  Projects: Maybe<IProject_Bool_Exp>;
  _and: Maybe<Array<Maybe<IUser_Bool_Exp>>>;
  _not: Maybe<IUser_Bool_Exp>;
  _or: Maybe<Array<Maybe<IUser_Bool_Exp>>>;
  id: Maybe<IInt_Comparison_Exp>;
  name: Maybe<IString_Comparison_Exp>;
};

/** unique or primary key constraints on table "User" */
export enum IUser_Constraint {
  /** unique or primary key constraint */
  UserPkey = 'User_pkey'
}

/** input type for incrementing integer column in table "User" */
export type IUser_Inc_Input = {
  id: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "User" */
export type IUser_Insert_Input = {
  Projects: Maybe<IProject_Arr_Rel_Insert_Input>;
  id: Maybe<Scalars['Int']>;
  name: Maybe<Scalars['String']>;
};


/** order by max() on columns of table "User" */
export type IUser_Max_Order_By = {
  id: Maybe<IOrder_By>;
  name: Maybe<IOrder_By>;
};


/** order by min() on columns of table "User" */
export type IUser_Min_Order_By = {
  id: Maybe<IOrder_By>;
  name: Maybe<IOrder_By>;
};


/** input type for inserting object relation for remote table "User" */
export type IUser_Obj_Rel_Insert_Input = {
  data: IUser_Insert_Input;
  on_conflict: Maybe<IUser_On_Conflict>;
};

/** on conflict condition type for table "User" */
export type IUser_On_Conflict = {
  constraint: IUser_Constraint;
  update_columns: Array<IUser_Update_Column>;
  where: Maybe<IUser_Bool_Exp>;
};

/** ordering options when selecting data from "User" */
export type IUser_Order_By = {
  Projects_aggregate: Maybe<IProject_Aggregate_Order_By>;
  id: Maybe<IOrder_By>;
  name: Maybe<IOrder_By>;
};

/** primary key columns input for table: "User" */
export type IUser_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "User" */
export enum IUser_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "User" */
export type IUser_Set_Input = {
  id: Maybe<Scalars['Int']>;
  name: Maybe<Scalars['String']>;
};


/** order by stddev() on columns of table "User" */
export type IUser_Stddev_Order_By = {
  id: Maybe<IOrder_By>;
};


/** order by stddev_pop() on columns of table "User" */
export type IUser_Stddev_Pop_Order_By = {
  id: Maybe<IOrder_By>;
};


/** order by stddev_samp() on columns of table "User" */
export type IUser_Stddev_Samp_Order_By = {
  id: Maybe<IOrder_By>;
};


/** order by sum() on columns of table "User" */
export type IUser_Sum_Order_By = {
  id: Maybe<IOrder_By>;
};

/** update columns of table "User" */
export enum IUser_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}


/** order by var_pop() on columns of table "User" */
export type IUser_Var_Pop_Order_By = {
  id: Maybe<IOrder_By>;
};


/** order by var_samp() on columns of table "User" */
export type IUser_Var_Samp_Order_By = {
  id: Maybe<IOrder_By>;
};


/** order by variance() on columns of table "User" */
export type IUser_Variance_Order_By = {
  id: Maybe<IOrder_By>;
};


/** column ordering options */
export enum IOrder_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}



export type IProjectQueryVariables = Exact<{
  distinctOn: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<IProject_Order_By> | IProject_Order_By>;
  where: Maybe<IProject_Bool_Exp>;
  projectTasksDistinctOn: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  projectTasksLimit: Maybe<Scalars['Int']>;
  projectTasksOffset: Maybe<Scalars['Int']>;
  projectTasksOrderBy: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  projectTasksWhere: Maybe<ITask_Bool_Exp>;
  projectTasksAggregateDistinctOn: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  projectTasksAggregateLimit: Maybe<Scalars['Int']>;
  projectTasksAggregateOffset: Maybe<Scalars['Int']>;
  projectTasksAggregateOrderBy: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  projectTasksAggregateWhere: Maybe<ITask_Bool_Exp>;
  projectTasksAggregateTasksAggregateAggregateAggregateCountColumns: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  projectTasksAggregateTasksAggregateAggregateAggregateCountDistinct: Maybe<Scalars['Boolean']>;
  projectUserUserProjectsAggregateDistinctOn: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  projectUserUserProjectsAggregateLimit: Maybe<Scalars['Int']>;
  projectUserUserProjectsAggregateOffset: Maybe<Scalars['Int']>;
  projectUserUserProjectsAggregateOrderBy: Maybe<Array<IProject_Order_By> | IProject_Order_By>;
  projectUserUserProjectsAggregateWhere: Maybe<IProject_Bool_Exp>;
  projectUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountColumns: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  projectUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct: Maybe<Scalars['Boolean']>;
  includeProjectTasks?: Scalars['Boolean'];
  includeProjectTasksAggregate?: Scalars['Boolean'];
  includeProjectTasksAggregateAggregate?: Scalars['Boolean'];
  includeProjectTasksAggregateAggregateAvg?: Scalars['Boolean'];
  includeProjectTasksAggregateAggregateMax?: Scalars['Boolean'];
  includeProjectTasksAggregateAggregateMin?: Scalars['Boolean'];
  includeProjectTasksAggregateAggregateStddev?: Scalars['Boolean'];
  includeProjectTasksAggregateAggregateStddevPop?: Scalars['Boolean'];
  includeProjectTasksAggregateAggregateStddevSamp?: Scalars['Boolean'];
  includeProjectTasksAggregateAggregateSum?: Scalars['Boolean'];
  includeProjectTasksAggregateAggregateVarPop?: Scalars['Boolean'];
  includeProjectTasksAggregateAggregateVarSamp?: Scalars['Boolean'];
  includeProjectTasksAggregateAggregateVariance?: Scalars['Boolean'];
  includeProjectTasksAggregateNodes?: Scalars['Boolean'];
  includeProjectUser?: Scalars['Boolean'];
  includeProjectUserProjectsAggregate?: Scalars['Boolean'];
  includeProjectUserProjectsAggregateAggregate?: Scalars['Boolean'];
}>;


export type IProjectQuery = { __typename?: 'query_root', Project: Array<{ __typename?: 'Project', id: number, name: string, user_id: number, Tasks: Array<{ __typename?: 'Task', id: number, name: string, project_id: number }>, Tasks_aggregate: { __typename?: 'Task_aggregate', aggregate: Maybe<{ __typename?: 'Task_aggregate_fields', count: Maybe<number>, avg: Maybe<{ __typename?: 'Task_avg_fields', id: Maybe<number>, project_id: Maybe<number> }>, max: Maybe<{ __typename?: 'Task_max_fields', id: Maybe<number>, name: Maybe<string>, project_id: Maybe<number> }>, min: Maybe<{ __typename?: 'Task_min_fields', id: Maybe<number>, name: Maybe<string>, project_id: Maybe<number> }>, stddev: Maybe<{ __typename?: 'Task_stddev_fields', id: Maybe<number>, project_id: Maybe<number> }>, stddev_pop: Maybe<{ __typename?: 'Task_stddev_pop_fields', id: Maybe<number>, project_id: Maybe<number> }>, stddev_samp: Maybe<{ __typename?: 'Task_stddev_samp_fields', id: Maybe<number>, project_id: Maybe<number> }>, sum: Maybe<{ __typename?: 'Task_sum_fields', id: Maybe<number>, project_id: Maybe<number> }>, var_pop: Maybe<{ __typename?: 'Task_var_pop_fields', id: Maybe<number>, project_id: Maybe<number> }>, var_samp: Maybe<{ __typename?: 'Task_var_samp_fields', id: Maybe<number>, project_id: Maybe<number> }>, variance: Maybe<{ __typename?: 'Task_variance_fields', id: Maybe<number>, project_id: Maybe<number> }> }>, nodes: Array<{ __typename?: 'Task', id: number, name: string, project_id: number }> }, User: { __typename?: 'User', id: number, name: string, Projects_aggregate: { __typename?: 'Project_aggregate', aggregate: Maybe<{ __typename?: 'Project_aggregate_fields', count: Maybe<number> }> } } }> };

export type IProjectAggregateQueryVariables = Exact<{
  distinctOn: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<IProject_Order_By> | IProject_Order_By>;
  where: Maybe<IProject_Bool_Exp>;
  projectAggregateAggregateAggregateCountColumns: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  projectAggregateAggregateAggregateCountDistinct: Maybe<Scalars['Boolean']>;
  projectAggregateNodesNodesTasksDistinctOn: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  projectAggregateNodesNodesTasksLimit: Maybe<Scalars['Int']>;
  projectAggregateNodesNodesTasksOffset: Maybe<Scalars['Int']>;
  projectAggregateNodesNodesTasksOrderBy: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  projectAggregateNodesNodesTasksWhere: Maybe<ITask_Bool_Exp>;
  projectAggregateNodesNodesTasksAggregateDistinctOn: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  projectAggregateNodesNodesTasksAggregateLimit: Maybe<Scalars['Int']>;
  projectAggregateNodesNodesTasksAggregateOffset: Maybe<Scalars['Int']>;
  projectAggregateNodesNodesTasksAggregateOrderBy: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  projectAggregateNodesNodesTasksAggregateWhere: Maybe<ITask_Bool_Exp>;
  projectAggregateNodesNodesTasksAggregateTasksAggregateAggregateAggregateCountColumns: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  projectAggregateNodesNodesTasksAggregateTasksAggregateAggregateAggregateCountDistinct: Maybe<Scalars['Boolean']>;
  includeProjectAggregateAggregate?: Scalars['Boolean'];
  includeProjectAggregateAggregateAvg?: Scalars['Boolean'];
  includeProjectAggregateAggregateMax?: Scalars['Boolean'];
  includeProjectAggregateAggregateMin?: Scalars['Boolean'];
  includeProjectAggregateAggregateStddev?: Scalars['Boolean'];
  includeProjectAggregateAggregateStddevPop?: Scalars['Boolean'];
  includeProjectAggregateAggregateStddevSamp?: Scalars['Boolean'];
  includeProjectAggregateAggregateSum?: Scalars['Boolean'];
  includeProjectAggregateAggregateVarPop?: Scalars['Boolean'];
  includeProjectAggregateAggregateVarSamp?: Scalars['Boolean'];
  includeProjectAggregateAggregateVariance?: Scalars['Boolean'];
  includeProjectAggregateNodes?: Scalars['Boolean'];
  includeProjectAggregateNodesTasks?: Scalars['Boolean'];
  includeProjectAggregateNodesTasksAggregate?: Scalars['Boolean'];
  includeProjectAggregateNodesTasksAggregateAggregate?: Scalars['Boolean'];
  includeProjectAggregateNodesTasksAggregateNodes?: Scalars['Boolean'];
  includeProjectAggregateNodesUser?: Scalars['Boolean'];
}>;


export type IProjectAggregateQuery = { __typename?: 'query_root', Project_aggregate: { __typename?: 'Project_aggregate', aggregate: Maybe<{ __typename?: 'Project_aggregate_fields', count: Maybe<number>, avg: Maybe<{ __typename?: 'Project_avg_fields', id: Maybe<number>, user_id: Maybe<number> }>, max: Maybe<{ __typename?: 'Project_max_fields', id: Maybe<number>, name: Maybe<string>, user_id: Maybe<number> }>, min: Maybe<{ __typename?: 'Project_min_fields', id: Maybe<number>, name: Maybe<string>, user_id: Maybe<number> }>, stddev: Maybe<{ __typename?: 'Project_stddev_fields', id: Maybe<number>, user_id: Maybe<number> }>, stddev_pop: Maybe<{ __typename?: 'Project_stddev_pop_fields', id: Maybe<number>, user_id: Maybe<number> }>, stddev_samp: Maybe<{ __typename?: 'Project_stddev_samp_fields', id: Maybe<number>, user_id: Maybe<number> }>, sum: Maybe<{ __typename?: 'Project_sum_fields', id: Maybe<number>, user_id: Maybe<number> }>, var_pop: Maybe<{ __typename?: 'Project_var_pop_fields', id: Maybe<number>, user_id: Maybe<number> }>, var_samp: Maybe<{ __typename?: 'Project_var_samp_fields', id: Maybe<number>, user_id: Maybe<number> }>, variance: Maybe<{ __typename?: 'Project_variance_fields', id: Maybe<number>, user_id: Maybe<number> }> }>, nodes: Array<{ __typename?: 'Project', id: number, name: string, user_id: number, Tasks: Array<{ __typename?: 'Task', id: number, name: string, project_id: number }>, Tasks_aggregate: { __typename?: 'Task_aggregate', aggregate: Maybe<{ __typename?: 'Task_aggregate_fields', count: Maybe<number> }>, nodes: Array<{ __typename?: 'Task', id: number, name: string, project_id: number }> }, User: { __typename?: 'User', id: number, name: string } }> } };

export type IProjectByPkQueryVariables = Exact<{
  id: Scalars['Int'];
  projectByPkTasksDistinctOn: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  projectByPkTasksLimit: Maybe<Scalars['Int']>;
  projectByPkTasksOffset: Maybe<Scalars['Int']>;
  projectByPkTasksOrderBy: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  projectByPkTasksWhere: Maybe<ITask_Bool_Exp>;
  projectByPkTasksAggregateDistinctOn: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  projectByPkTasksAggregateLimit: Maybe<Scalars['Int']>;
  projectByPkTasksAggregateOffset: Maybe<Scalars['Int']>;
  projectByPkTasksAggregateOrderBy: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  projectByPkTasksAggregateWhere: Maybe<ITask_Bool_Exp>;
  projectByPkTasksAggregateTasksAggregateAggregateAggregateCountColumns: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  projectByPkTasksAggregateTasksAggregateAggregateAggregateCountDistinct: Maybe<Scalars['Boolean']>;
  projectByPkUserUserProjectsAggregateDistinctOn: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  projectByPkUserUserProjectsAggregateLimit: Maybe<Scalars['Int']>;
  projectByPkUserUserProjectsAggregateOffset: Maybe<Scalars['Int']>;
  projectByPkUserUserProjectsAggregateOrderBy: Maybe<Array<IProject_Order_By> | IProject_Order_By>;
  projectByPkUserUserProjectsAggregateWhere: Maybe<IProject_Bool_Exp>;
  projectByPkUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountColumns: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  projectByPkUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct: Maybe<Scalars['Boolean']>;
  includeProjectByPkTasks?: Scalars['Boolean'];
  includeProjectByPkTasksAggregate?: Scalars['Boolean'];
  includeProjectByPkTasksAggregateAggregate?: Scalars['Boolean'];
  includeProjectByPkTasksAggregateAggregateAvg?: Scalars['Boolean'];
  includeProjectByPkTasksAggregateAggregateMax?: Scalars['Boolean'];
  includeProjectByPkTasksAggregateAggregateMin?: Scalars['Boolean'];
  includeProjectByPkTasksAggregateAggregateStddev?: Scalars['Boolean'];
  includeProjectByPkTasksAggregateAggregateStddevPop?: Scalars['Boolean'];
  includeProjectByPkTasksAggregateAggregateStddevSamp?: Scalars['Boolean'];
  includeProjectByPkTasksAggregateAggregateSum?: Scalars['Boolean'];
  includeProjectByPkTasksAggregateAggregateVarPop?: Scalars['Boolean'];
  includeProjectByPkTasksAggregateAggregateVarSamp?: Scalars['Boolean'];
  includeProjectByPkTasksAggregateAggregateVariance?: Scalars['Boolean'];
  includeProjectByPkTasksAggregateNodes?: Scalars['Boolean'];
  includeProjectByPkUser?: Scalars['Boolean'];
  includeProjectByPkUserProjectsAggregate?: Scalars['Boolean'];
  includeProjectByPkUserProjectsAggregateAggregate?: Scalars['Boolean'];
}>;


export type IProjectByPkQuery = { __typename?: 'query_root', Project_by_pk: Maybe<{ __typename?: 'Project', id: number, name: string, user_id: number, Tasks: Array<{ __typename?: 'Task', id: number, name: string, project_id: number }>, Tasks_aggregate: { __typename?: 'Task_aggregate', aggregate: Maybe<{ __typename?: 'Task_aggregate_fields', count: Maybe<number>, avg: Maybe<{ __typename?: 'Task_avg_fields', id: Maybe<number>, project_id: Maybe<number> }>, max: Maybe<{ __typename?: 'Task_max_fields', id: Maybe<number>, name: Maybe<string>, project_id: Maybe<number> }>, min: Maybe<{ __typename?: 'Task_min_fields', id: Maybe<number>, name: Maybe<string>, project_id: Maybe<number> }>, stddev: Maybe<{ __typename?: 'Task_stddev_fields', id: Maybe<number>, project_id: Maybe<number> }>, stddev_pop: Maybe<{ __typename?: 'Task_stddev_pop_fields', id: Maybe<number>, project_id: Maybe<number> }>, stddev_samp: Maybe<{ __typename?: 'Task_stddev_samp_fields', id: Maybe<number>, project_id: Maybe<number> }>, sum: Maybe<{ __typename?: 'Task_sum_fields', id: Maybe<number>, project_id: Maybe<number> }>, var_pop: Maybe<{ __typename?: 'Task_var_pop_fields', id: Maybe<number>, project_id: Maybe<number> }>, var_samp: Maybe<{ __typename?: 'Task_var_samp_fields', id: Maybe<number>, project_id: Maybe<number> }>, variance: Maybe<{ __typename?: 'Task_variance_fields', id: Maybe<number>, project_id: Maybe<number> }> }>, nodes: Array<{ __typename?: 'Task', id: number, name: string, project_id: number }> }, User: { __typename?: 'User', id: number, name: string, Projects_aggregate: { __typename?: 'Project_aggregate', aggregate: Maybe<{ __typename?: 'Project_aggregate_fields', count: Maybe<number> }> } } }> };

export type ITaskQueryVariables = Exact<{
  distinctOn: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  where: Maybe<ITask_Bool_Exp>;
  taskProjectProjectTasksAggregateDistinctOn: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  taskProjectProjectTasksAggregateLimit: Maybe<Scalars['Int']>;
  taskProjectProjectTasksAggregateOffset: Maybe<Scalars['Int']>;
  taskProjectProjectTasksAggregateOrderBy: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  taskProjectProjectTasksAggregateWhere: Maybe<ITask_Bool_Exp>;
  taskProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountColumns: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  taskProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountDistinct: Maybe<Scalars['Boolean']>;
  includeTaskProject?: Scalars['Boolean'];
  includeTaskProjectTasksAggregate?: Scalars['Boolean'];
  includeTaskProjectTasksAggregateAggregate?: Scalars['Boolean'];
  includeTaskProjectUser?: Scalars['Boolean'];
}>;


export type ITaskQuery = { __typename?: 'query_root', Task: Array<{ __typename?: 'Task', id: number, name: string, project_id: number, Project: { __typename?: 'Project', id: number, name: string, user_id: number, Tasks_aggregate: { __typename?: 'Task_aggregate', aggregate: Maybe<{ __typename?: 'Task_aggregate_fields', count: Maybe<number> }> }, User: { __typename?: 'User', id: number, name: string } } }> };

export type ITaskAggregateQueryVariables = Exact<{
  distinctOn: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  where: Maybe<ITask_Bool_Exp>;
  taskAggregateAggregateAggregateCountColumns: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  taskAggregateAggregateAggregateCountDistinct: Maybe<Scalars['Boolean']>;
  includeTaskAggregateAggregate?: Scalars['Boolean'];
  includeTaskAggregateAggregateAvg?: Scalars['Boolean'];
  includeTaskAggregateAggregateMax?: Scalars['Boolean'];
  includeTaskAggregateAggregateMin?: Scalars['Boolean'];
  includeTaskAggregateAggregateStddev?: Scalars['Boolean'];
  includeTaskAggregateAggregateStddevPop?: Scalars['Boolean'];
  includeTaskAggregateAggregateStddevSamp?: Scalars['Boolean'];
  includeTaskAggregateAggregateSum?: Scalars['Boolean'];
  includeTaskAggregateAggregateVarPop?: Scalars['Boolean'];
  includeTaskAggregateAggregateVarSamp?: Scalars['Boolean'];
  includeTaskAggregateAggregateVariance?: Scalars['Boolean'];
  includeTaskAggregateNodes?: Scalars['Boolean'];
  includeTaskAggregateNodesProject?: Scalars['Boolean'];
  includeTaskAggregateNodesProjectUser?: Scalars['Boolean'];
}>;


export type ITaskAggregateQuery = { __typename?: 'query_root', Task_aggregate: { __typename?: 'Task_aggregate', aggregate: Maybe<{ __typename?: 'Task_aggregate_fields', count: Maybe<number>, avg: Maybe<{ __typename?: 'Task_avg_fields', id: Maybe<number>, project_id: Maybe<number> }>, max: Maybe<{ __typename?: 'Task_max_fields', id: Maybe<number>, name: Maybe<string>, project_id: Maybe<number> }>, min: Maybe<{ __typename?: 'Task_min_fields', id: Maybe<number>, name: Maybe<string>, project_id: Maybe<number> }>, stddev: Maybe<{ __typename?: 'Task_stddev_fields', id: Maybe<number>, project_id: Maybe<number> }>, stddev_pop: Maybe<{ __typename?: 'Task_stddev_pop_fields', id: Maybe<number>, project_id: Maybe<number> }>, stddev_samp: Maybe<{ __typename?: 'Task_stddev_samp_fields', id: Maybe<number>, project_id: Maybe<number> }>, sum: Maybe<{ __typename?: 'Task_sum_fields', id: Maybe<number>, project_id: Maybe<number> }>, var_pop: Maybe<{ __typename?: 'Task_var_pop_fields', id: Maybe<number>, project_id: Maybe<number> }>, var_samp: Maybe<{ __typename?: 'Task_var_samp_fields', id: Maybe<number>, project_id: Maybe<number> }>, variance: Maybe<{ __typename?: 'Task_variance_fields', id: Maybe<number>, project_id: Maybe<number> }> }>, nodes: Array<{ __typename?: 'Task', id: number, name: string, project_id: number, Project: { __typename?: 'Project', id: number, name: string, user_id: number, User: { __typename?: 'User', id: number, name: string } } }> } };

export type ITaskByPkQueryVariables = Exact<{
  id: Scalars['Int'];
  taskByPkProjectProjectTasksAggregateDistinctOn: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  taskByPkProjectProjectTasksAggregateLimit: Maybe<Scalars['Int']>;
  taskByPkProjectProjectTasksAggregateOffset: Maybe<Scalars['Int']>;
  taskByPkProjectProjectTasksAggregateOrderBy: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  taskByPkProjectProjectTasksAggregateWhere: Maybe<ITask_Bool_Exp>;
  taskByPkProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountColumns: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  taskByPkProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountDistinct: Maybe<Scalars['Boolean']>;
  includeTaskByPkProject?: Scalars['Boolean'];
  includeTaskByPkProjectTasksAggregate?: Scalars['Boolean'];
  includeTaskByPkProjectTasksAggregateAggregate?: Scalars['Boolean'];
  includeTaskByPkProjectUser?: Scalars['Boolean'];
}>;


export type ITaskByPkQuery = { __typename?: 'query_root', Task_by_pk: Maybe<{ __typename?: 'Task', id: number, name: string, project_id: number, Project: { __typename?: 'Project', id: number, name: string, user_id: number, Tasks_aggregate: { __typename?: 'Task_aggregate', aggregate: Maybe<{ __typename?: 'Task_aggregate_fields', count: Maybe<number> }> }, User: { __typename?: 'User', id: number, name: string } } }> };

export type IUserQueryVariables = Exact<{
  distinctOn: Maybe<Array<IUser_Select_Column> | IUser_Select_Column>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<IUser_Order_By> | IUser_Order_By>;
  where: Maybe<IUser_Bool_Exp>;
  userProjectsDistinctOn: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  userProjectsLimit: Maybe<Scalars['Int']>;
  userProjectsOffset: Maybe<Scalars['Int']>;
  userProjectsOrderBy: Maybe<Array<IProject_Order_By> | IProject_Order_By>;
  userProjectsWhere: Maybe<IProject_Bool_Exp>;
  userProjectsProjectsTasksDistinctOn: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  userProjectsProjectsTasksLimit: Maybe<Scalars['Int']>;
  userProjectsProjectsTasksOffset: Maybe<Scalars['Int']>;
  userProjectsProjectsTasksOrderBy: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  userProjectsProjectsTasksWhere: Maybe<ITask_Bool_Exp>;
  userProjectsProjectsTasksAggregateDistinctOn: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  userProjectsProjectsTasksAggregateLimit: Maybe<Scalars['Int']>;
  userProjectsProjectsTasksAggregateOffset: Maybe<Scalars['Int']>;
  userProjectsProjectsTasksAggregateOrderBy: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  userProjectsProjectsTasksAggregateWhere: Maybe<ITask_Bool_Exp>;
  userProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountColumns: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  userProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountDistinct: Maybe<Scalars['Boolean']>;
  userProjectsAggregateDistinctOn: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  userProjectsAggregateLimit: Maybe<Scalars['Int']>;
  userProjectsAggregateOffset: Maybe<Scalars['Int']>;
  userProjectsAggregateOrderBy: Maybe<Array<IProject_Order_By> | IProject_Order_By>;
  userProjectsAggregateWhere: Maybe<IProject_Bool_Exp>;
  userProjectsAggregateProjectsAggregateAggregateAggregateCountColumns: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  userProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct: Maybe<Scalars['Boolean']>;
  userProjectsAggregateProjectsAggregateNodesNodesTasksDistinctOn: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  userProjectsAggregateProjectsAggregateNodesNodesTasksLimit: Maybe<Scalars['Int']>;
  userProjectsAggregateProjectsAggregateNodesNodesTasksOffset: Maybe<Scalars['Int']>;
  userProjectsAggregateProjectsAggregateNodesNodesTasksOrderBy: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  userProjectsAggregateProjectsAggregateNodesNodesTasksWhere: Maybe<ITask_Bool_Exp>;
  includeUserProjects?: Scalars['Boolean'];
  includeUserProjectsTasks?: Scalars['Boolean'];
  includeUserProjectsTasksAggregate?: Scalars['Boolean'];
  includeUserProjectsTasksAggregateAggregate?: Scalars['Boolean'];
  includeUserProjectsTasksAggregateNodes?: Scalars['Boolean'];
  includeUserProjectsAggregate?: Scalars['Boolean'];
  includeUserProjectsAggregateAggregate?: Scalars['Boolean'];
  includeUserProjectsAggregateAggregateAvg?: Scalars['Boolean'];
  includeUserProjectsAggregateAggregateMax?: Scalars['Boolean'];
  includeUserProjectsAggregateAggregateMin?: Scalars['Boolean'];
  includeUserProjectsAggregateAggregateStddev?: Scalars['Boolean'];
  includeUserProjectsAggregateAggregateStddevPop?: Scalars['Boolean'];
  includeUserProjectsAggregateAggregateStddevSamp?: Scalars['Boolean'];
  includeUserProjectsAggregateAggregateSum?: Scalars['Boolean'];
  includeUserProjectsAggregateAggregateVarPop?: Scalars['Boolean'];
  includeUserProjectsAggregateAggregateVarSamp?: Scalars['Boolean'];
  includeUserProjectsAggregateAggregateVariance?: Scalars['Boolean'];
  includeUserProjectsAggregateNodes?: Scalars['Boolean'];
  includeUserProjectsAggregateNodesTasks?: Scalars['Boolean'];
}>;


export type IUserQuery = { __typename?: 'query_root', User: Array<{ __typename?: 'User', id: number, name: string, Projects: Array<{ __typename?: 'Project', id: number, name: string, user_id: number, Tasks: Array<{ __typename?: 'Task', id: number, name: string, project_id: number }>, Tasks_aggregate: { __typename?: 'Task_aggregate', aggregate: Maybe<{ __typename?: 'Task_aggregate_fields', count: Maybe<number> }>, nodes: Array<{ __typename?: 'Task', id: number, name: string, project_id: number }> } }>, Projects_aggregate: { __typename?: 'Project_aggregate', aggregate: Maybe<{ __typename?: 'Project_aggregate_fields', count: Maybe<number>, avg: Maybe<{ __typename?: 'Project_avg_fields', id: Maybe<number>, user_id: Maybe<number> }>, max: Maybe<{ __typename?: 'Project_max_fields', id: Maybe<number>, name: Maybe<string>, user_id: Maybe<number> }>, min: Maybe<{ __typename?: 'Project_min_fields', id: Maybe<number>, name: Maybe<string>, user_id: Maybe<number> }>, stddev: Maybe<{ __typename?: 'Project_stddev_fields', id: Maybe<number>, user_id: Maybe<number> }>, stddev_pop: Maybe<{ __typename?: 'Project_stddev_pop_fields', id: Maybe<number>, user_id: Maybe<number> }>, stddev_samp: Maybe<{ __typename?: 'Project_stddev_samp_fields', id: Maybe<number>, user_id: Maybe<number> }>, sum: Maybe<{ __typename?: 'Project_sum_fields', id: Maybe<number>, user_id: Maybe<number> }>, var_pop: Maybe<{ __typename?: 'Project_var_pop_fields', id: Maybe<number>, user_id: Maybe<number> }>, var_samp: Maybe<{ __typename?: 'Project_var_samp_fields', id: Maybe<number>, user_id: Maybe<number> }>, variance: Maybe<{ __typename?: 'Project_variance_fields', id: Maybe<number>, user_id: Maybe<number> }> }>, nodes: Array<{ __typename?: 'Project', id: number, name: string, user_id: number, Tasks: Array<{ __typename?: 'Task', id: number, name: string, project_id: number }> }> } }> };

export type IUserAggregateQueryVariables = Exact<{
  distinctOn: Maybe<Array<IUser_Select_Column> | IUser_Select_Column>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<IUser_Order_By> | IUser_Order_By>;
  where: Maybe<IUser_Bool_Exp>;
  userAggregateAggregateAggregateCountColumns: Maybe<Array<IUser_Select_Column> | IUser_Select_Column>;
  userAggregateAggregateAggregateCountDistinct: Maybe<Scalars['Boolean']>;
  userAggregateNodesNodesProjectsDistinctOn: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  userAggregateNodesNodesProjectsLimit: Maybe<Scalars['Int']>;
  userAggregateNodesNodesProjectsOffset: Maybe<Scalars['Int']>;
  userAggregateNodesNodesProjectsOrderBy: Maybe<Array<IProject_Order_By> | IProject_Order_By>;
  userAggregateNodesNodesProjectsWhere: Maybe<IProject_Bool_Exp>;
  userAggregateNodesNodesProjectsProjectsTasksDistinctOn: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  userAggregateNodesNodesProjectsProjectsTasksLimit: Maybe<Scalars['Int']>;
  userAggregateNodesNodesProjectsProjectsTasksOffset: Maybe<Scalars['Int']>;
  userAggregateNodesNodesProjectsProjectsTasksOrderBy: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  userAggregateNodesNodesProjectsProjectsTasksWhere: Maybe<ITask_Bool_Exp>;
  userAggregateNodesNodesProjectsAggregateDistinctOn: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  userAggregateNodesNodesProjectsAggregateLimit: Maybe<Scalars['Int']>;
  userAggregateNodesNodesProjectsAggregateOffset: Maybe<Scalars['Int']>;
  userAggregateNodesNodesProjectsAggregateOrderBy: Maybe<Array<IProject_Order_By> | IProject_Order_By>;
  userAggregateNodesNodesProjectsAggregateWhere: Maybe<IProject_Bool_Exp>;
  userAggregateNodesNodesProjectsAggregateProjectsAggregateAggregateAggregateCountColumns: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  userAggregateNodesNodesProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct: Maybe<Scalars['Boolean']>;
  includeUserAggregateAggregate?: Scalars['Boolean'];
  includeUserAggregateAggregateAvg?: Scalars['Boolean'];
  includeUserAggregateAggregateMax?: Scalars['Boolean'];
  includeUserAggregateAggregateMin?: Scalars['Boolean'];
  includeUserAggregateAggregateStddev?: Scalars['Boolean'];
  includeUserAggregateAggregateStddevPop?: Scalars['Boolean'];
  includeUserAggregateAggregateStddevSamp?: Scalars['Boolean'];
  includeUserAggregateAggregateSum?: Scalars['Boolean'];
  includeUserAggregateAggregateVarPop?: Scalars['Boolean'];
  includeUserAggregateAggregateVarSamp?: Scalars['Boolean'];
  includeUserAggregateAggregateVariance?: Scalars['Boolean'];
  includeUserAggregateNodes?: Scalars['Boolean'];
  includeUserAggregateNodesProjects?: Scalars['Boolean'];
  includeUserAggregateNodesProjectsTasks?: Scalars['Boolean'];
  includeUserAggregateNodesProjectsAggregate?: Scalars['Boolean'];
  includeUserAggregateNodesProjectsAggregateAggregate?: Scalars['Boolean'];
  includeUserAggregateNodesProjectsAggregateNodes?: Scalars['Boolean'];
}>;


export type IUserAggregateQuery = { __typename?: 'query_root', User_aggregate: { __typename?: 'User_aggregate', aggregate: Maybe<{ __typename?: 'User_aggregate_fields', count: Maybe<number>, avg: Maybe<{ __typename?: 'User_avg_fields', id: Maybe<number> }>, max: Maybe<{ __typename?: 'User_max_fields', id: Maybe<number>, name: Maybe<string> }>, min: Maybe<{ __typename?: 'User_min_fields', id: Maybe<number>, name: Maybe<string> }>, stddev: Maybe<{ __typename?: 'User_stddev_fields', id: Maybe<number> }>, stddev_pop: Maybe<{ __typename?: 'User_stddev_pop_fields', id: Maybe<number> }>, stddev_samp: Maybe<{ __typename?: 'User_stddev_samp_fields', id: Maybe<number> }>, sum: Maybe<{ __typename?: 'User_sum_fields', id: Maybe<number> }>, var_pop: Maybe<{ __typename?: 'User_var_pop_fields', id: Maybe<number> }>, var_samp: Maybe<{ __typename?: 'User_var_samp_fields', id: Maybe<number> }>, variance: Maybe<{ __typename?: 'User_variance_fields', id: Maybe<number> }> }>, nodes: Array<{ __typename?: 'User', id: number, name: string, Projects: Array<{ __typename?: 'Project', id: number, name: string, user_id: number, Tasks: Array<{ __typename?: 'Task', id: number, name: string, project_id: number }> }>, Projects_aggregate: { __typename?: 'Project_aggregate', aggregate: Maybe<{ __typename?: 'Project_aggregate_fields', count: Maybe<number> }>, nodes: Array<{ __typename?: 'Project', id: number, name: string, user_id: number }> } }> } };

export type IUserByPkQueryVariables = Exact<{
  id: Scalars['Int'];
  userByPkProjectsDistinctOn: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  userByPkProjectsLimit: Maybe<Scalars['Int']>;
  userByPkProjectsOffset: Maybe<Scalars['Int']>;
  userByPkProjectsOrderBy: Maybe<Array<IProject_Order_By> | IProject_Order_By>;
  userByPkProjectsWhere: Maybe<IProject_Bool_Exp>;
  userByPkProjectsProjectsTasksDistinctOn: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  userByPkProjectsProjectsTasksLimit: Maybe<Scalars['Int']>;
  userByPkProjectsProjectsTasksOffset: Maybe<Scalars['Int']>;
  userByPkProjectsProjectsTasksOrderBy: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  userByPkProjectsProjectsTasksWhere: Maybe<ITask_Bool_Exp>;
  userByPkProjectsProjectsTasksAggregateDistinctOn: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  userByPkProjectsProjectsTasksAggregateLimit: Maybe<Scalars['Int']>;
  userByPkProjectsProjectsTasksAggregateOffset: Maybe<Scalars['Int']>;
  userByPkProjectsProjectsTasksAggregateOrderBy: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  userByPkProjectsProjectsTasksAggregateWhere: Maybe<ITask_Bool_Exp>;
  userByPkProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountColumns: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  userByPkProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountDistinct: Maybe<Scalars['Boolean']>;
  userByPkProjectsAggregateDistinctOn: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  userByPkProjectsAggregateLimit: Maybe<Scalars['Int']>;
  userByPkProjectsAggregateOffset: Maybe<Scalars['Int']>;
  userByPkProjectsAggregateOrderBy: Maybe<Array<IProject_Order_By> | IProject_Order_By>;
  userByPkProjectsAggregateWhere: Maybe<IProject_Bool_Exp>;
  userByPkProjectsAggregateProjectsAggregateAggregateAggregateCountColumns: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  userByPkProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct: Maybe<Scalars['Boolean']>;
  userByPkProjectsAggregateProjectsAggregateNodesNodesTasksDistinctOn: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  userByPkProjectsAggregateProjectsAggregateNodesNodesTasksLimit: Maybe<Scalars['Int']>;
  userByPkProjectsAggregateProjectsAggregateNodesNodesTasksOffset: Maybe<Scalars['Int']>;
  userByPkProjectsAggregateProjectsAggregateNodesNodesTasksOrderBy: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  userByPkProjectsAggregateProjectsAggregateNodesNodesTasksWhere: Maybe<ITask_Bool_Exp>;
  includeUserByPkProjects?: Scalars['Boolean'];
  includeUserByPkProjectsTasks?: Scalars['Boolean'];
  includeUserByPkProjectsTasksAggregate?: Scalars['Boolean'];
  includeUserByPkProjectsTasksAggregateAggregate?: Scalars['Boolean'];
  includeUserByPkProjectsTasksAggregateNodes?: Scalars['Boolean'];
  includeUserByPkProjectsAggregate?: Scalars['Boolean'];
  includeUserByPkProjectsAggregateAggregate?: Scalars['Boolean'];
  includeUserByPkProjectsAggregateAggregateAvg?: Scalars['Boolean'];
  includeUserByPkProjectsAggregateAggregateMax?: Scalars['Boolean'];
  includeUserByPkProjectsAggregateAggregateMin?: Scalars['Boolean'];
  includeUserByPkProjectsAggregateAggregateStddev?: Scalars['Boolean'];
  includeUserByPkProjectsAggregateAggregateStddevPop?: Scalars['Boolean'];
  includeUserByPkProjectsAggregateAggregateStddevSamp?: Scalars['Boolean'];
  includeUserByPkProjectsAggregateAggregateSum?: Scalars['Boolean'];
  includeUserByPkProjectsAggregateAggregateVarPop?: Scalars['Boolean'];
  includeUserByPkProjectsAggregateAggregateVarSamp?: Scalars['Boolean'];
  includeUserByPkProjectsAggregateAggregateVariance?: Scalars['Boolean'];
  includeUserByPkProjectsAggregateNodes?: Scalars['Boolean'];
  includeUserByPkProjectsAggregateNodesTasks?: Scalars['Boolean'];
}>;


export type IUserByPkQuery = { __typename?: 'query_root', User_by_pk: Maybe<{ __typename?: 'User', id: number, name: string, Projects: Array<{ __typename?: 'Project', id: number, name: string, user_id: number, Tasks: Array<{ __typename?: 'Task', id: number, name: string, project_id: number }>, Tasks_aggregate: { __typename?: 'Task_aggregate', aggregate: Maybe<{ __typename?: 'Task_aggregate_fields', count: Maybe<number> }>, nodes: Array<{ __typename?: 'Task', id: number, name: string, project_id: number }> } }>, Projects_aggregate: { __typename?: 'Project_aggregate', aggregate: Maybe<{ __typename?: 'Project_aggregate_fields', count: Maybe<number>, avg: Maybe<{ __typename?: 'Project_avg_fields', id: Maybe<number>, user_id: Maybe<number> }>, max: Maybe<{ __typename?: 'Project_max_fields', id: Maybe<number>, name: Maybe<string>, user_id: Maybe<number> }>, min: Maybe<{ __typename?: 'Project_min_fields', id: Maybe<number>, name: Maybe<string>, user_id: Maybe<number> }>, stddev: Maybe<{ __typename?: 'Project_stddev_fields', id: Maybe<number>, user_id: Maybe<number> }>, stddev_pop: Maybe<{ __typename?: 'Project_stddev_pop_fields', id: Maybe<number>, user_id: Maybe<number> }>, stddev_samp: Maybe<{ __typename?: 'Project_stddev_samp_fields', id: Maybe<number>, user_id: Maybe<number> }>, sum: Maybe<{ __typename?: 'Project_sum_fields', id: Maybe<number>, user_id: Maybe<number> }>, var_pop: Maybe<{ __typename?: 'Project_var_pop_fields', id: Maybe<number>, user_id: Maybe<number> }>, var_samp: Maybe<{ __typename?: 'Project_var_samp_fields', id: Maybe<number>, user_id: Maybe<number> }>, variance: Maybe<{ __typename?: 'Project_variance_fields', id: Maybe<number>, user_id: Maybe<number> }> }>, nodes: Array<{ __typename?: 'Project', id: number, name: string, user_id: number, Tasks: Array<{ __typename?: 'Task', id: number, name: string, project_id: number }> }> } }> };

export type IDeleteProjectMutationVariables = Exact<{
  where: IProject_Bool_Exp;
  deleteProjectReturningReturningTasksDistinctOn: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  deleteProjectReturningReturningTasksLimit: Maybe<Scalars['Int']>;
  deleteProjectReturningReturningTasksOffset: Maybe<Scalars['Int']>;
  deleteProjectReturningReturningTasksOrderBy: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  deleteProjectReturningReturningTasksWhere: Maybe<ITask_Bool_Exp>;
  deleteProjectReturningReturningTasksAggregateDistinctOn: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  deleteProjectReturningReturningTasksAggregateLimit: Maybe<Scalars['Int']>;
  deleteProjectReturningReturningTasksAggregateOffset: Maybe<Scalars['Int']>;
  deleteProjectReturningReturningTasksAggregateOrderBy: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  deleteProjectReturningReturningTasksAggregateWhere: Maybe<ITask_Bool_Exp>;
  deleteProjectReturningReturningTasksAggregateTasksAggregateAggregateAggregateCountColumns: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  deleteProjectReturningReturningTasksAggregateTasksAggregateAggregateAggregateCountDistinct: Maybe<Scalars['Boolean']>;
  includeDeleteProjectReturning?: Scalars['Boolean'];
  includeDeleteProjectReturningTasks?: Scalars['Boolean'];
  includeDeleteProjectReturningTasksAggregate?: Scalars['Boolean'];
  includeDeleteProjectReturningTasksAggregateAggregate?: Scalars['Boolean'];
  includeDeleteProjectReturningTasksAggregateNodes?: Scalars['Boolean'];
  includeDeleteProjectReturningUser?: Scalars['Boolean'];
}>;


export type IDeleteProjectMutation = { __typename?: 'mutation_root', delete_Project: Maybe<{ __typename?: 'Project_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'Project', id: number, name: string, user_id: number, Tasks: Array<{ __typename?: 'Task', id: number, name: string, project_id: number }>, Tasks_aggregate: { __typename?: 'Task_aggregate', aggregate: Maybe<{ __typename?: 'Task_aggregate_fields', count: Maybe<number> }>, nodes: Array<{ __typename?: 'Task', id: number, name: string, project_id: number }> }, User: { __typename?: 'User', id: number, name: string } }> }> };

export type IDeleteProjectByPkMutationVariables = Exact<{
  id: Scalars['Int'];
  deleteProjectByPkTasksDistinctOn: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  deleteProjectByPkTasksLimit: Maybe<Scalars['Int']>;
  deleteProjectByPkTasksOffset: Maybe<Scalars['Int']>;
  deleteProjectByPkTasksOrderBy: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  deleteProjectByPkTasksWhere: Maybe<ITask_Bool_Exp>;
  deleteProjectByPkTasksAggregateDistinctOn: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  deleteProjectByPkTasksAggregateLimit: Maybe<Scalars['Int']>;
  deleteProjectByPkTasksAggregateOffset: Maybe<Scalars['Int']>;
  deleteProjectByPkTasksAggregateOrderBy: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  deleteProjectByPkTasksAggregateWhere: Maybe<ITask_Bool_Exp>;
  deleteProjectByPkTasksAggregateTasksAggregateAggregateAggregateCountColumns: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  deleteProjectByPkTasksAggregateTasksAggregateAggregateAggregateCountDistinct: Maybe<Scalars['Boolean']>;
  deleteProjectByPkUserUserProjectsAggregateDistinctOn: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  deleteProjectByPkUserUserProjectsAggregateLimit: Maybe<Scalars['Int']>;
  deleteProjectByPkUserUserProjectsAggregateOffset: Maybe<Scalars['Int']>;
  deleteProjectByPkUserUserProjectsAggregateOrderBy: Maybe<Array<IProject_Order_By> | IProject_Order_By>;
  deleteProjectByPkUserUserProjectsAggregateWhere: Maybe<IProject_Bool_Exp>;
  deleteProjectByPkUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountColumns: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  deleteProjectByPkUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct: Maybe<Scalars['Boolean']>;
  includeDeleteProjectByPkTasks?: Scalars['Boolean'];
  includeDeleteProjectByPkTasksAggregate?: Scalars['Boolean'];
  includeDeleteProjectByPkTasksAggregateAggregate?: Scalars['Boolean'];
  includeDeleteProjectByPkTasksAggregateAggregateAvg?: Scalars['Boolean'];
  includeDeleteProjectByPkTasksAggregateAggregateMax?: Scalars['Boolean'];
  includeDeleteProjectByPkTasksAggregateAggregateMin?: Scalars['Boolean'];
  includeDeleteProjectByPkTasksAggregateAggregateStddev?: Scalars['Boolean'];
  includeDeleteProjectByPkTasksAggregateAggregateStddevPop?: Scalars['Boolean'];
  includeDeleteProjectByPkTasksAggregateAggregateStddevSamp?: Scalars['Boolean'];
  includeDeleteProjectByPkTasksAggregateAggregateSum?: Scalars['Boolean'];
  includeDeleteProjectByPkTasksAggregateAggregateVarPop?: Scalars['Boolean'];
  includeDeleteProjectByPkTasksAggregateAggregateVarSamp?: Scalars['Boolean'];
  includeDeleteProjectByPkTasksAggregateAggregateVariance?: Scalars['Boolean'];
  includeDeleteProjectByPkTasksAggregateNodes?: Scalars['Boolean'];
  includeDeleteProjectByPkUser?: Scalars['Boolean'];
  includeDeleteProjectByPkUserProjectsAggregate?: Scalars['Boolean'];
  includeDeleteProjectByPkUserProjectsAggregateAggregate?: Scalars['Boolean'];
}>;


export type IDeleteProjectByPkMutation = { __typename?: 'mutation_root', delete_Project_by_pk: Maybe<{ __typename?: 'Project', id: number, name: string, user_id: number, Tasks: Array<{ __typename?: 'Task', id: number, name: string, project_id: number }>, Tasks_aggregate: { __typename?: 'Task_aggregate', aggregate: Maybe<{ __typename?: 'Task_aggregate_fields', count: Maybe<number>, avg: Maybe<{ __typename?: 'Task_avg_fields', id: Maybe<number>, project_id: Maybe<number> }>, max: Maybe<{ __typename?: 'Task_max_fields', id: Maybe<number>, name: Maybe<string>, project_id: Maybe<number> }>, min: Maybe<{ __typename?: 'Task_min_fields', id: Maybe<number>, name: Maybe<string>, project_id: Maybe<number> }>, stddev: Maybe<{ __typename?: 'Task_stddev_fields', id: Maybe<number>, project_id: Maybe<number> }>, stddev_pop: Maybe<{ __typename?: 'Task_stddev_pop_fields', id: Maybe<number>, project_id: Maybe<number> }>, stddev_samp: Maybe<{ __typename?: 'Task_stddev_samp_fields', id: Maybe<number>, project_id: Maybe<number> }>, sum: Maybe<{ __typename?: 'Task_sum_fields', id: Maybe<number>, project_id: Maybe<number> }>, var_pop: Maybe<{ __typename?: 'Task_var_pop_fields', id: Maybe<number>, project_id: Maybe<number> }>, var_samp: Maybe<{ __typename?: 'Task_var_samp_fields', id: Maybe<number>, project_id: Maybe<number> }>, variance: Maybe<{ __typename?: 'Task_variance_fields', id: Maybe<number>, project_id: Maybe<number> }> }>, nodes: Array<{ __typename?: 'Task', id: number, name: string, project_id: number }> }, User: { __typename?: 'User', id: number, name: string, Projects_aggregate: { __typename?: 'Project_aggregate', aggregate: Maybe<{ __typename?: 'Project_aggregate_fields', count: Maybe<number> }> } } }> };

export type IDeleteTaskMutationVariables = Exact<{
  where: ITask_Bool_Exp;
  includeDeleteTaskReturning?: Scalars['Boolean'];
  includeDeleteTaskReturningProject?: Scalars['Boolean'];
  includeDeleteTaskReturningProjectUser?: Scalars['Boolean'];
}>;


export type IDeleteTaskMutation = { __typename?: 'mutation_root', delete_Task: Maybe<{ __typename?: 'Task_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'Task', id: number, name: string, project_id: number, Project: { __typename?: 'Project', id: number, name: string, user_id: number, User: { __typename?: 'User', id: number, name: string } } }> }> };

export type IDeleteTaskByPkMutationVariables = Exact<{
  id: Scalars['Int'];
  deleteTaskByPkProjectProjectTasksAggregateDistinctOn: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  deleteTaskByPkProjectProjectTasksAggregateLimit: Maybe<Scalars['Int']>;
  deleteTaskByPkProjectProjectTasksAggregateOffset: Maybe<Scalars['Int']>;
  deleteTaskByPkProjectProjectTasksAggregateOrderBy: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  deleteTaskByPkProjectProjectTasksAggregateWhere: Maybe<ITask_Bool_Exp>;
  deleteTaskByPkProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountColumns: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  deleteTaskByPkProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountDistinct: Maybe<Scalars['Boolean']>;
  includeDeleteTaskByPkProject?: Scalars['Boolean'];
  includeDeleteTaskByPkProjectTasksAggregate?: Scalars['Boolean'];
  includeDeleteTaskByPkProjectTasksAggregateAggregate?: Scalars['Boolean'];
  includeDeleteTaskByPkProjectUser?: Scalars['Boolean'];
}>;


export type IDeleteTaskByPkMutation = { __typename?: 'mutation_root', delete_Task_by_pk: Maybe<{ __typename?: 'Task', id: number, name: string, project_id: number, Project: { __typename?: 'Project', id: number, name: string, user_id: number, Tasks_aggregate: { __typename?: 'Task_aggregate', aggregate: Maybe<{ __typename?: 'Task_aggregate_fields', count: Maybe<number> }> }, User: { __typename?: 'User', id: number, name: string } } }> };

export type IDeleteUserMutationVariables = Exact<{
  where: IUser_Bool_Exp;
  deleteUserReturningReturningProjectsDistinctOn: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  deleteUserReturningReturningProjectsLimit: Maybe<Scalars['Int']>;
  deleteUserReturningReturningProjectsOffset: Maybe<Scalars['Int']>;
  deleteUserReturningReturningProjectsOrderBy: Maybe<Array<IProject_Order_By> | IProject_Order_By>;
  deleteUserReturningReturningProjectsWhere: Maybe<IProject_Bool_Exp>;
  deleteUserReturningReturningProjectsProjectsTasksDistinctOn: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  deleteUserReturningReturningProjectsProjectsTasksLimit: Maybe<Scalars['Int']>;
  deleteUserReturningReturningProjectsProjectsTasksOffset: Maybe<Scalars['Int']>;
  deleteUserReturningReturningProjectsProjectsTasksOrderBy: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  deleteUserReturningReturningProjectsProjectsTasksWhere: Maybe<ITask_Bool_Exp>;
  deleteUserReturningReturningProjectsAggregateDistinctOn: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  deleteUserReturningReturningProjectsAggregateLimit: Maybe<Scalars['Int']>;
  deleteUserReturningReturningProjectsAggregateOffset: Maybe<Scalars['Int']>;
  deleteUserReturningReturningProjectsAggregateOrderBy: Maybe<Array<IProject_Order_By> | IProject_Order_By>;
  deleteUserReturningReturningProjectsAggregateWhere: Maybe<IProject_Bool_Exp>;
  deleteUserReturningReturningProjectsAggregateProjectsAggregateAggregateAggregateCountColumns: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  deleteUserReturningReturningProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct: Maybe<Scalars['Boolean']>;
  includeDeleteUserReturning?: Scalars['Boolean'];
  includeDeleteUserReturningProjects?: Scalars['Boolean'];
  includeDeleteUserReturningProjectsTasks?: Scalars['Boolean'];
  includeDeleteUserReturningProjectsAggregate?: Scalars['Boolean'];
  includeDeleteUserReturningProjectsAggregateAggregate?: Scalars['Boolean'];
  includeDeleteUserReturningProjectsAggregateNodes?: Scalars['Boolean'];
}>;


export type IDeleteUserMutation = { __typename?: 'mutation_root', delete_User: Maybe<{ __typename?: 'User_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'User', id: number, name: string, Projects: Array<{ __typename?: 'Project', id: number, name: string, user_id: number, Tasks: Array<{ __typename?: 'Task', id: number, name: string, project_id: number }> }>, Projects_aggregate: { __typename?: 'Project_aggregate', aggregate: Maybe<{ __typename?: 'Project_aggregate_fields', count: Maybe<number> }>, nodes: Array<{ __typename?: 'Project', id: number, name: string, user_id: number }> } }> }> };

export type IDeleteUserByPkMutationVariables = Exact<{
  id: Scalars['Int'];
  deleteUserByPkProjectsDistinctOn: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  deleteUserByPkProjectsLimit: Maybe<Scalars['Int']>;
  deleteUserByPkProjectsOffset: Maybe<Scalars['Int']>;
  deleteUserByPkProjectsOrderBy: Maybe<Array<IProject_Order_By> | IProject_Order_By>;
  deleteUserByPkProjectsWhere: Maybe<IProject_Bool_Exp>;
  deleteUserByPkProjectsProjectsTasksDistinctOn: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  deleteUserByPkProjectsProjectsTasksLimit: Maybe<Scalars['Int']>;
  deleteUserByPkProjectsProjectsTasksOffset: Maybe<Scalars['Int']>;
  deleteUserByPkProjectsProjectsTasksOrderBy: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  deleteUserByPkProjectsProjectsTasksWhere: Maybe<ITask_Bool_Exp>;
  deleteUserByPkProjectsProjectsTasksAggregateDistinctOn: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  deleteUserByPkProjectsProjectsTasksAggregateLimit: Maybe<Scalars['Int']>;
  deleteUserByPkProjectsProjectsTasksAggregateOffset: Maybe<Scalars['Int']>;
  deleteUserByPkProjectsProjectsTasksAggregateOrderBy: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  deleteUserByPkProjectsProjectsTasksAggregateWhere: Maybe<ITask_Bool_Exp>;
  deleteUserByPkProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountColumns: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  deleteUserByPkProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountDistinct: Maybe<Scalars['Boolean']>;
  deleteUserByPkProjectsAggregateDistinctOn: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  deleteUserByPkProjectsAggregateLimit: Maybe<Scalars['Int']>;
  deleteUserByPkProjectsAggregateOffset: Maybe<Scalars['Int']>;
  deleteUserByPkProjectsAggregateOrderBy: Maybe<Array<IProject_Order_By> | IProject_Order_By>;
  deleteUserByPkProjectsAggregateWhere: Maybe<IProject_Bool_Exp>;
  deleteUserByPkProjectsAggregateProjectsAggregateAggregateAggregateCountColumns: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  deleteUserByPkProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct: Maybe<Scalars['Boolean']>;
  deleteUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksDistinctOn: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  deleteUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksLimit: Maybe<Scalars['Int']>;
  deleteUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksOffset: Maybe<Scalars['Int']>;
  deleteUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksOrderBy: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  deleteUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksWhere: Maybe<ITask_Bool_Exp>;
  includeDeleteUserByPkProjects?: Scalars['Boolean'];
  includeDeleteUserByPkProjectsTasks?: Scalars['Boolean'];
  includeDeleteUserByPkProjectsTasksAggregate?: Scalars['Boolean'];
  includeDeleteUserByPkProjectsTasksAggregateAggregate?: Scalars['Boolean'];
  includeDeleteUserByPkProjectsTasksAggregateNodes?: Scalars['Boolean'];
  includeDeleteUserByPkProjectsAggregate?: Scalars['Boolean'];
  includeDeleteUserByPkProjectsAggregateAggregate?: Scalars['Boolean'];
  includeDeleteUserByPkProjectsAggregateAggregateAvg?: Scalars['Boolean'];
  includeDeleteUserByPkProjectsAggregateAggregateMax?: Scalars['Boolean'];
  includeDeleteUserByPkProjectsAggregateAggregateMin?: Scalars['Boolean'];
  includeDeleteUserByPkProjectsAggregateAggregateStddev?: Scalars['Boolean'];
  includeDeleteUserByPkProjectsAggregateAggregateStddevPop?: Scalars['Boolean'];
  includeDeleteUserByPkProjectsAggregateAggregateStddevSamp?: Scalars['Boolean'];
  includeDeleteUserByPkProjectsAggregateAggregateSum?: Scalars['Boolean'];
  includeDeleteUserByPkProjectsAggregateAggregateVarPop?: Scalars['Boolean'];
  includeDeleteUserByPkProjectsAggregateAggregateVarSamp?: Scalars['Boolean'];
  includeDeleteUserByPkProjectsAggregateAggregateVariance?: Scalars['Boolean'];
  includeDeleteUserByPkProjectsAggregateNodes?: Scalars['Boolean'];
  includeDeleteUserByPkProjectsAggregateNodesTasks?: Scalars['Boolean'];
}>;


export type IDeleteUserByPkMutation = { __typename?: 'mutation_root', delete_User_by_pk: Maybe<{ __typename?: 'User', id: number, name: string, Projects: Array<{ __typename?: 'Project', id: number, name: string, user_id: number, Tasks: Array<{ __typename?: 'Task', id: number, name: string, project_id: number }>, Tasks_aggregate: { __typename?: 'Task_aggregate', aggregate: Maybe<{ __typename?: 'Task_aggregate_fields', count: Maybe<number> }>, nodes: Array<{ __typename?: 'Task', id: number, name: string, project_id: number }> } }>, Projects_aggregate: { __typename?: 'Project_aggregate', aggregate: Maybe<{ __typename?: 'Project_aggregate_fields', count: Maybe<number>, avg: Maybe<{ __typename?: 'Project_avg_fields', id: Maybe<number>, user_id: Maybe<number> }>, max: Maybe<{ __typename?: 'Project_max_fields', id: Maybe<number>, name: Maybe<string>, user_id: Maybe<number> }>, min: Maybe<{ __typename?: 'Project_min_fields', id: Maybe<number>, name: Maybe<string>, user_id: Maybe<number> }>, stddev: Maybe<{ __typename?: 'Project_stddev_fields', id: Maybe<number>, user_id: Maybe<number> }>, stddev_pop: Maybe<{ __typename?: 'Project_stddev_pop_fields', id: Maybe<number>, user_id: Maybe<number> }>, stddev_samp: Maybe<{ __typename?: 'Project_stddev_samp_fields', id: Maybe<number>, user_id: Maybe<number> }>, sum: Maybe<{ __typename?: 'Project_sum_fields', id: Maybe<number>, user_id: Maybe<number> }>, var_pop: Maybe<{ __typename?: 'Project_var_pop_fields', id: Maybe<number>, user_id: Maybe<number> }>, var_samp: Maybe<{ __typename?: 'Project_var_samp_fields', id: Maybe<number>, user_id: Maybe<number> }>, variance: Maybe<{ __typename?: 'Project_variance_fields', id: Maybe<number>, user_id: Maybe<number> }> }>, nodes: Array<{ __typename?: 'Project', id: number, name: string, user_id: number, Tasks: Array<{ __typename?: 'Task', id: number, name: string, project_id: number }> }> } }> };

export type IInsertProjectMutationVariables = Exact<{
  objects: Array<IProject_Insert_Input> | IProject_Insert_Input;
  onConflict: Maybe<IProject_On_Conflict>;
  insertProjectReturningReturningTasksDistinctOn: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  insertProjectReturningReturningTasksLimit: Maybe<Scalars['Int']>;
  insertProjectReturningReturningTasksOffset: Maybe<Scalars['Int']>;
  insertProjectReturningReturningTasksOrderBy: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  insertProjectReturningReturningTasksWhere: Maybe<ITask_Bool_Exp>;
  insertProjectReturningReturningTasksAggregateDistinctOn: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  insertProjectReturningReturningTasksAggregateLimit: Maybe<Scalars['Int']>;
  insertProjectReturningReturningTasksAggregateOffset: Maybe<Scalars['Int']>;
  insertProjectReturningReturningTasksAggregateOrderBy: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  insertProjectReturningReturningTasksAggregateWhere: Maybe<ITask_Bool_Exp>;
  insertProjectReturningReturningTasksAggregateTasksAggregateAggregateAggregateCountColumns: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  insertProjectReturningReturningTasksAggregateTasksAggregateAggregateAggregateCountDistinct: Maybe<Scalars['Boolean']>;
  includeInsertProjectReturning?: Scalars['Boolean'];
  includeInsertProjectReturningTasks?: Scalars['Boolean'];
  includeInsertProjectReturningTasksAggregate?: Scalars['Boolean'];
  includeInsertProjectReturningTasksAggregateAggregate?: Scalars['Boolean'];
  includeInsertProjectReturningTasksAggregateNodes?: Scalars['Boolean'];
  includeInsertProjectReturningUser?: Scalars['Boolean'];
}>;


export type IInsertProjectMutation = { __typename?: 'mutation_root', insert_Project: Maybe<{ __typename?: 'Project_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'Project', id: number, name: string, user_id: number, Tasks: Array<{ __typename?: 'Task', id: number, name: string, project_id: number }>, Tasks_aggregate: { __typename?: 'Task_aggregate', aggregate: Maybe<{ __typename?: 'Task_aggregate_fields', count: Maybe<number> }>, nodes: Array<{ __typename?: 'Task', id: number, name: string, project_id: number }> }, User: { __typename?: 'User', id: number, name: string } }> }> };

export type IInsertProjectOneMutationVariables = Exact<{
  object: IProject_Insert_Input;
  onConflict: Maybe<IProject_On_Conflict>;
  insertProjectOneTasksDistinctOn: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  insertProjectOneTasksLimit: Maybe<Scalars['Int']>;
  insertProjectOneTasksOffset: Maybe<Scalars['Int']>;
  insertProjectOneTasksOrderBy: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  insertProjectOneTasksWhere: Maybe<ITask_Bool_Exp>;
  insertProjectOneTasksAggregateDistinctOn: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  insertProjectOneTasksAggregateLimit: Maybe<Scalars['Int']>;
  insertProjectOneTasksAggregateOffset: Maybe<Scalars['Int']>;
  insertProjectOneTasksAggregateOrderBy: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  insertProjectOneTasksAggregateWhere: Maybe<ITask_Bool_Exp>;
  insertProjectOneTasksAggregateTasksAggregateAggregateAggregateCountColumns: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  insertProjectOneTasksAggregateTasksAggregateAggregateAggregateCountDistinct: Maybe<Scalars['Boolean']>;
  insertProjectOneUserUserProjectsAggregateDistinctOn: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  insertProjectOneUserUserProjectsAggregateLimit: Maybe<Scalars['Int']>;
  insertProjectOneUserUserProjectsAggregateOffset: Maybe<Scalars['Int']>;
  insertProjectOneUserUserProjectsAggregateOrderBy: Maybe<Array<IProject_Order_By> | IProject_Order_By>;
  insertProjectOneUserUserProjectsAggregateWhere: Maybe<IProject_Bool_Exp>;
  insertProjectOneUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountColumns: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  insertProjectOneUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct: Maybe<Scalars['Boolean']>;
  includeInsertProjectOneTasks?: Scalars['Boolean'];
  includeInsertProjectOneTasksAggregate?: Scalars['Boolean'];
  includeInsertProjectOneTasksAggregateAggregate?: Scalars['Boolean'];
  includeInsertProjectOneTasksAggregateAggregateAvg?: Scalars['Boolean'];
  includeInsertProjectOneTasksAggregateAggregateMax?: Scalars['Boolean'];
  includeInsertProjectOneTasksAggregateAggregateMin?: Scalars['Boolean'];
  includeInsertProjectOneTasksAggregateAggregateStddev?: Scalars['Boolean'];
  includeInsertProjectOneTasksAggregateAggregateStddevPop?: Scalars['Boolean'];
  includeInsertProjectOneTasksAggregateAggregateStddevSamp?: Scalars['Boolean'];
  includeInsertProjectOneTasksAggregateAggregateSum?: Scalars['Boolean'];
  includeInsertProjectOneTasksAggregateAggregateVarPop?: Scalars['Boolean'];
  includeInsertProjectOneTasksAggregateAggregateVarSamp?: Scalars['Boolean'];
  includeInsertProjectOneTasksAggregateAggregateVariance?: Scalars['Boolean'];
  includeInsertProjectOneTasksAggregateNodes?: Scalars['Boolean'];
  includeInsertProjectOneUser?: Scalars['Boolean'];
  includeInsertProjectOneUserProjectsAggregate?: Scalars['Boolean'];
  includeInsertProjectOneUserProjectsAggregateAggregate?: Scalars['Boolean'];
}>;


export type IInsertProjectOneMutation = { __typename?: 'mutation_root', insert_Project_one: Maybe<{ __typename?: 'Project', id: number, name: string, user_id: number, Tasks: Array<{ __typename?: 'Task', id: number, name: string, project_id: number }>, Tasks_aggregate: { __typename?: 'Task_aggregate', aggregate: Maybe<{ __typename?: 'Task_aggregate_fields', count: Maybe<number>, avg: Maybe<{ __typename?: 'Task_avg_fields', id: Maybe<number>, project_id: Maybe<number> }>, max: Maybe<{ __typename?: 'Task_max_fields', id: Maybe<number>, name: Maybe<string>, project_id: Maybe<number> }>, min: Maybe<{ __typename?: 'Task_min_fields', id: Maybe<number>, name: Maybe<string>, project_id: Maybe<number> }>, stddev: Maybe<{ __typename?: 'Task_stddev_fields', id: Maybe<number>, project_id: Maybe<number> }>, stddev_pop: Maybe<{ __typename?: 'Task_stddev_pop_fields', id: Maybe<number>, project_id: Maybe<number> }>, stddev_samp: Maybe<{ __typename?: 'Task_stddev_samp_fields', id: Maybe<number>, project_id: Maybe<number> }>, sum: Maybe<{ __typename?: 'Task_sum_fields', id: Maybe<number>, project_id: Maybe<number> }>, var_pop: Maybe<{ __typename?: 'Task_var_pop_fields', id: Maybe<number>, project_id: Maybe<number> }>, var_samp: Maybe<{ __typename?: 'Task_var_samp_fields', id: Maybe<number>, project_id: Maybe<number> }>, variance: Maybe<{ __typename?: 'Task_variance_fields', id: Maybe<number>, project_id: Maybe<number> }> }>, nodes: Array<{ __typename?: 'Task', id: number, name: string, project_id: number }> }, User: { __typename?: 'User', id: number, name: string, Projects_aggregate: { __typename?: 'Project_aggregate', aggregate: Maybe<{ __typename?: 'Project_aggregate_fields', count: Maybe<number> }> } } }> };

export type IInsertTaskMutationVariables = Exact<{
  objects: Array<ITask_Insert_Input> | ITask_Insert_Input;
  onConflict: Maybe<ITask_On_Conflict>;
  includeInsertTaskReturning?: Scalars['Boolean'];
  includeInsertTaskReturningProject?: Scalars['Boolean'];
  includeInsertTaskReturningProjectUser?: Scalars['Boolean'];
}>;


export type IInsertTaskMutation = { __typename?: 'mutation_root', insert_Task: Maybe<{ __typename?: 'Task_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'Task', id: number, name: string, project_id: number, Project: { __typename?: 'Project', id: number, name: string, user_id: number, User: { __typename?: 'User', id: number, name: string } } }> }> };

export type IInsertTaskOneMutationVariables = Exact<{
  object: ITask_Insert_Input;
  onConflict: Maybe<ITask_On_Conflict>;
  insertTaskOneProjectProjectTasksAggregateDistinctOn: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  insertTaskOneProjectProjectTasksAggregateLimit: Maybe<Scalars['Int']>;
  insertTaskOneProjectProjectTasksAggregateOffset: Maybe<Scalars['Int']>;
  insertTaskOneProjectProjectTasksAggregateOrderBy: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  insertTaskOneProjectProjectTasksAggregateWhere: Maybe<ITask_Bool_Exp>;
  insertTaskOneProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountColumns: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  insertTaskOneProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountDistinct: Maybe<Scalars['Boolean']>;
  includeInsertTaskOneProject?: Scalars['Boolean'];
  includeInsertTaskOneProjectTasksAggregate?: Scalars['Boolean'];
  includeInsertTaskOneProjectTasksAggregateAggregate?: Scalars['Boolean'];
  includeInsertTaskOneProjectUser?: Scalars['Boolean'];
}>;


export type IInsertTaskOneMutation = { __typename?: 'mutation_root', insert_Task_one: Maybe<{ __typename?: 'Task', id: number, name: string, project_id: number, Project: { __typename?: 'Project', id: number, name: string, user_id: number, Tasks_aggregate: { __typename?: 'Task_aggregate', aggregate: Maybe<{ __typename?: 'Task_aggregate_fields', count: Maybe<number> }> }, User: { __typename?: 'User', id: number, name: string } } }> };

export type IInsertUserMutationVariables = Exact<{
  objects: Array<IUser_Insert_Input> | IUser_Insert_Input;
  onConflict: Maybe<IUser_On_Conflict>;
  insertUserReturningReturningProjectsDistinctOn: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  insertUserReturningReturningProjectsLimit: Maybe<Scalars['Int']>;
  insertUserReturningReturningProjectsOffset: Maybe<Scalars['Int']>;
  insertUserReturningReturningProjectsOrderBy: Maybe<Array<IProject_Order_By> | IProject_Order_By>;
  insertUserReturningReturningProjectsWhere: Maybe<IProject_Bool_Exp>;
  insertUserReturningReturningProjectsProjectsTasksDistinctOn: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  insertUserReturningReturningProjectsProjectsTasksLimit: Maybe<Scalars['Int']>;
  insertUserReturningReturningProjectsProjectsTasksOffset: Maybe<Scalars['Int']>;
  insertUserReturningReturningProjectsProjectsTasksOrderBy: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  insertUserReturningReturningProjectsProjectsTasksWhere: Maybe<ITask_Bool_Exp>;
  insertUserReturningReturningProjectsAggregateDistinctOn: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  insertUserReturningReturningProjectsAggregateLimit: Maybe<Scalars['Int']>;
  insertUserReturningReturningProjectsAggregateOffset: Maybe<Scalars['Int']>;
  insertUserReturningReturningProjectsAggregateOrderBy: Maybe<Array<IProject_Order_By> | IProject_Order_By>;
  insertUserReturningReturningProjectsAggregateWhere: Maybe<IProject_Bool_Exp>;
  insertUserReturningReturningProjectsAggregateProjectsAggregateAggregateAggregateCountColumns: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  insertUserReturningReturningProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct: Maybe<Scalars['Boolean']>;
  includeInsertUserReturning?: Scalars['Boolean'];
  includeInsertUserReturningProjects?: Scalars['Boolean'];
  includeInsertUserReturningProjectsTasks?: Scalars['Boolean'];
  includeInsertUserReturningProjectsAggregate?: Scalars['Boolean'];
  includeInsertUserReturningProjectsAggregateAggregate?: Scalars['Boolean'];
  includeInsertUserReturningProjectsAggregateNodes?: Scalars['Boolean'];
}>;


export type IInsertUserMutation = { __typename?: 'mutation_root', insert_User: Maybe<{ __typename?: 'User_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'User', id: number, name: string, Projects: Array<{ __typename?: 'Project', id: number, name: string, user_id: number, Tasks: Array<{ __typename?: 'Task', id: number, name: string, project_id: number }> }>, Projects_aggregate: { __typename?: 'Project_aggregate', aggregate: Maybe<{ __typename?: 'Project_aggregate_fields', count: Maybe<number> }>, nodes: Array<{ __typename?: 'Project', id: number, name: string, user_id: number }> } }> }> };

export type IInsertUserOneMutationVariables = Exact<{
  object: IUser_Insert_Input;
  onConflict: Maybe<IUser_On_Conflict>;
  insertUserOneProjectsDistinctOn: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  insertUserOneProjectsLimit: Maybe<Scalars['Int']>;
  insertUserOneProjectsOffset: Maybe<Scalars['Int']>;
  insertUserOneProjectsOrderBy: Maybe<Array<IProject_Order_By> | IProject_Order_By>;
  insertUserOneProjectsWhere: Maybe<IProject_Bool_Exp>;
  insertUserOneProjectsProjectsTasksDistinctOn: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  insertUserOneProjectsProjectsTasksLimit: Maybe<Scalars['Int']>;
  insertUserOneProjectsProjectsTasksOffset: Maybe<Scalars['Int']>;
  insertUserOneProjectsProjectsTasksOrderBy: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  insertUserOneProjectsProjectsTasksWhere: Maybe<ITask_Bool_Exp>;
  insertUserOneProjectsProjectsTasksAggregateDistinctOn: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  insertUserOneProjectsProjectsTasksAggregateLimit: Maybe<Scalars['Int']>;
  insertUserOneProjectsProjectsTasksAggregateOffset: Maybe<Scalars['Int']>;
  insertUserOneProjectsProjectsTasksAggregateOrderBy: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  insertUserOneProjectsProjectsTasksAggregateWhere: Maybe<ITask_Bool_Exp>;
  insertUserOneProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountColumns: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  insertUserOneProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountDistinct: Maybe<Scalars['Boolean']>;
  insertUserOneProjectsAggregateDistinctOn: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  insertUserOneProjectsAggregateLimit: Maybe<Scalars['Int']>;
  insertUserOneProjectsAggregateOffset: Maybe<Scalars['Int']>;
  insertUserOneProjectsAggregateOrderBy: Maybe<Array<IProject_Order_By> | IProject_Order_By>;
  insertUserOneProjectsAggregateWhere: Maybe<IProject_Bool_Exp>;
  insertUserOneProjectsAggregateProjectsAggregateAggregateAggregateCountColumns: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  insertUserOneProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct: Maybe<Scalars['Boolean']>;
  insertUserOneProjectsAggregateProjectsAggregateNodesNodesTasksDistinctOn: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  insertUserOneProjectsAggregateProjectsAggregateNodesNodesTasksLimit: Maybe<Scalars['Int']>;
  insertUserOneProjectsAggregateProjectsAggregateNodesNodesTasksOffset: Maybe<Scalars['Int']>;
  insertUserOneProjectsAggregateProjectsAggregateNodesNodesTasksOrderBy: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  insertUserOneProjectsAggregateProjectsAggregateNodesNodesTasksWhere: Maybe<ITask_Bool_Exp>;
  includeInsertUserOneProjects?: Scalars['Boolean'];
  includeInsertUserOneProjectsTasks?: Scalars['Boolean'];
  includeInsertUserOneProjectsTasksAggregate?: Scalars['Boolean'];
  includeInsertUserOneProjectsTasksAggregateAggregate?: Scalars['Boolean'];
  includeInsertUserOneProjectsTasksAggregateNodes?: Scalars['Boolean'];
  includeInsertUserOneProjectsAggregate?: Scalars['Boolean'];
  includeInsertUserOneProjectsAggregateAggregate?: Scalars['Boolean'];
  includeInsertUserOneProjectsAggregateAggregateAvg?: Scalars['Boolean'];
  includeInsertUserOneProjectsAggregateAggregateMax?: Scalars['Boolean'];
  includeInsertUserOneProjectsAggregateAggregateMin?: Scalars['Boolean'];
  includeInsertUserOneProjectsAggregateAggregateStddev?: Scalars['Boolean'];
  includeInsertUserOneProjectsAggregateAggregateStddevPop?: Scalars['Boolean'];
  includeInsertUserOneProjectsAggregateAggregateStddevSamp?: Scalars['Boolean'];
  includeInsertUserOneProjectsAggregateAggregateSum?: Scalars['Boolean'];
  includeInsertUserOneProjectsAggregateAggregateVarPop?: Scalars['Boolean'];
  includeInsertUserOneProjectsAggregateAggregateVarSamp?: Scalars['Boolean'];
  includeInsertUserOneProjectsAggregateAggregateVariance?: Scalars['Boolean'];
  includeInsertUserOneProjectsAggregateNodes?: Scalars['Boolean'];
  includeInsertUserOneProjectsAggregateNodesTasks?: Scalars['Boolean'];
}>;


export type IInsertUserOneMutation = { __typename?: 'mutation_root', insert_User_one: Maybe<{ __typename?: 'User', id: number, name: string, Projects: Array<{ __typename?: 'Project', id: number, name: string, user_id: number, Tasks: Array<{ __typename?: 'Task', id: number, name: string, project_id: number }>, Tasks_aggregate: { __typename?: 'Task_aggregate', aggregate: Maybe<{ __typename?: 'Task_aggregate_fields', count: Maybe<number> }>, nodes: Array<{ __typename?: 'Task', id: number, name: string, project_id: number }> } }>, Projects_aggregate: { __typename?: 'Project_aggregate', aggregate: Maybe<{ __typename?: 'Project_aggregate_fields', count: Maybe<number>, avg: Maybe<{ __typename?: 'Project_avg_fields', id: Maybe<number>, user_id: Maybe<number> }>, max: Maybe<{ __typename?: 'Project_max_fields', id: Maybe<number>, name: Maybe<string>, user_id: Maybe<number> }>, min: Maybe<{ __typename?: 'Project_min_fields', id: Maybe<number>, name: Maybe<string>, user_id: Maybe<number> }>, stddev: Maybe<{ __typename?: 'Project_stddev_fields', id: Maybe<number>, user_id: Maybe<number> }>, stddev_pop: Maybe<{ __typename?: 'Project_stddev_pop_fields', id: Maybe<number>, user_id: Maybe<number> }>, stddev_samp: Maybe<{ __typename?: 'Project_stddev_samp_fields', id: Maybe<number>, user_id: Maybe<number> }>, sum: Maybe<{ __typename?: 'Project_sum_fields', id: Maybe<number>, user_id: Maybe<number> }>, var_pop: Maybe<{ __typename?: 'Project_var_pop_fields', id: Maybe<number>, user_id: Maybe<number> }>, var_samp: Maybe<{ __typename?: 'Project_var_samp_fields', id: Maybe<number>, user_id: Maybe<number> }>, variance: Maybe<{ __typename?: 'Project_variance_fields', id: Maybe<number>, user_id: Maybe<number> }> }>, nodes: Array<{ __typename?: 'Project', id: number, name: string, user_id: number, Tasks: Array<{ __typename?: 'Task', id: number, name: string, project_id: number }> }> } }> };

export type IUpdateProjectMutationVariables = Exact<{
  inc: Maybe<IProject_Inc_Input>;
  set: Maybe<IProject_Set_Input>;
  where: IProject_Bool_Exp;
  updateProjectReturningReturningTasksDistinctOn: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  updateProjectReturningReturningTasksLimit: Maybe<Scalars['Int']>;
  updateProjectReturningReturningTasksOffset: Maybe<Scalars['Int']>;
  updateProjectReturningReturningTasksOrderBy: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  updateProjectReturningReturningTasksWhere: Maybe<ITask_Bool_Exp>;
  updateProjectReturningReturningTasksAggregateDistinctOn: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  updateProjectReturningReturningTasksAggregateLimit: Maybe<Scalars['Int']>;
  updateProjectReturningReturningTasksAggregateOffset: Maybe<Scalars['Int']>;
  updateProjectReturningReturningTasksAggregateOrderBy: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  updateProjectReturningReturningTasksAggregateWhere: Maybe<ITask_Bool_Exp>;
  updateProjectReturningReturningTasksAggregateTasksAggregateAggregateAggregateCountColumns: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  updateProjectReturningReturningTasksAggregateTasksAggregateAggregateAggregateCountDistinct: Maybe<Scalars['Boolean']>;
  includeUpdateProjectReturning?: Scalars['Boolean'];
  includeUpdateProjectReturningTasks?: Scalars['Boolean'];
  includeUpdateProjectReturningTasksAggregate?: Scalars['Boolean'];
  includeUpdateProjectReturningTasksAggregateAggregate?: Scalars['Boolean'];
  includeUpdateProjectReturningTasksAggregateNodes?: Scalars['Boolean'];
  includeUpdateProjectReturningUser?: Scalars['Boolean'];
}>;


export type IUpdateProjectMutation = { __typename?: 'mutation_root', update_Project: Maybe<{ __typename?: 'Project_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'Project', id: number, name: string, user_id: number, Tasks: Array<{ __typename?: 'Task', id: number, name: string, project_id: number }>, Tasks_aggregate: { __typename?: 'Task_aggregate', aggregate: Maybe<{ __typename?: 'Task_aggregate_fields', count: Maybe<number> }>, nodes: Array<{ __typename?: 'Task', id: number, name: string, project_id: number }> }, User: { __typename?: 'User', id: number, name: string } }> }> };

export type IUpdateProjectByPkMutationVariables = Exact<{
  inc: Maybe<IProject_Inc_Input>;
  set: Maybe<IProject_Set_Input>;
  pkColumns: IProject_Pk_Columns_Input;
  updateProjectByPkTasksDistinctOn: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  updateProjectByPkTasksLimit: Maybe<Scalars['Int']>;
  updateProjectByPkTasksOffset: Maybe<Scalars['Int']>;
  updateProjectByPkTasksOrderBy: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  updateProjectByPkTasksWhere: Maybe<ITask_Bool_Exp>;
  updateProjectByPkTasksAggregateDistinctOn: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  updateProjectByPkTasksAggregateLimit: Maybe<Scalars['Int']>;
  updateProjectByPkTasksAggregateOffset: Maybe<Scalars['Int']>;
  updateProjectByPkTasksAggregateOrderBy: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  updateProjectByPkTasksAggregateWhere: Maybe<ITask_Bool_Exp>;
  updateProjectByPkTasksAggregateTasksAggregateAggregateAggregateCountColumns: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  updateProjectByPkTasksAggregateTasksAggregateAggregateAggregateCountDistinct: Maybe<Scalars['Boolean']>;
  updateProjectByPkUserUserProjectsAggregateDistinctOn: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  updateProjectByPkUserUserProjectsAggregateLimit: Maybe<Scalars['Int']>;
  updateProjectByPkUserUserProjectsAggregateOffset: Maybe<Scalars['Int']>;
  updateProjectByPkUserUserProjectsAggregateOrderBy: Maybe<Array<IProject_Order_By> | IProject_Order_By>;
  updateProjectByPkUserUserProjectsAggregateWhere: Maybe<IProject_Bool_Exp>;
  updateProjectByPkUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountColumns: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  updateProjectByPkUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct: Maybe<Scalars['Boolean']>;
  includeUpdateProjectByPkTasks?: Scalars['Boolean'];
  includeUpdateProjectByPkTasksAggregate?: Scalars['Boolean'];
  includeUpdateProjectByPkTasksAggregateAggregate?: Scalars['Boolean'];
  includeUpdateProjectByPkTasksAggregateAggregateAvg?: Scalars['Boolean'];
  includeUpdateProjectByPkTasksAggregateAggregateMax?: Scalars['Boolean'];
  includeUpdateProjectByPkTasksAggregateAggregateMin?: Scalars['Boolean'];
  includeUpdateProjectByPkTasksAggregateAggregateStddev?: Scalars['Boolean'];
  includeUpdateProjectByPkTasksAggregateAggregateStddevPop?: Scalars['Boolean'];
  includeUpdateProjectByPkTasksAggregateAggregateStddevSamp?: Scalars['Boolean'];
  includeUpdateProjectByPkTasksAggregateAggregateSum?: Scalars['Boolean'];
  includeUpdateProjectByPkTasksAggregateAggregateVarPop?: Scalars['Boolean'];
  includeUpdateProjectByPkTasksAggregateAggregateVarSamp?: Scalars['Boolean'];
  includeUpdateProjectByPkTasksAggregateAggregateVariance?: Scalars['Boolean'];
  includeUpdateProjectByPkTasksAggregateNodes?: Scalars['Boolean'];
  includeUpdateProjectByPkUser?: Scalars['Boolean'];
  includeUpdateProjectByPkUserProjectsAggregate?: Scalars['Boolean'];
  includeUpdateProjectByPkUserProjectsAggregateAggregate?: Scalars['Boolean'];
}>;


export type IUpdateProjectByPkMutation = { __typename?: 'mutation_root', update_Project_by_pk: Maybe<{ __typename?: 'Project', id: number, name: string, user_id: number, Tasks: Array<{ __typename?: 'Task', id: number, name: string, project_id: number }>, Tasks_aggregate: { __typename?: 'Task_aggregate', aggregate: Maybe<{ __typename?: 'Task_aggregate_fields', count: Maybe<number>, avg: Maybe<{ __typename?: 'Task_avg_fields', id: Maybe<number>, project_id: Maybe<number> }>, max: Maybe<{ __typename?: 'Task_max_fields', id: Maybe<number>, name: Maybe<string>, project_id: Maybe<number> }>, min: Maybe<{ __typename?: 'Task_min_fields', id: Maybe<number>, name: Maybe<string>, project_id: Maybe<number> }>, stddev: Maybe<{ __typename?: 'Task_stddev_fields', id: Maybe<number>, project_id: Maybe<number> }>, stddev_pop: Maybe<{ __typename?: 'Task_stddev_pop_fields', id: Maybe<number>, project_id: Maybe<number> }>, stddev_samp: Maybe<{ __typename?: 'Task_stddev_samp_fields', id: Maybe<number>, project_id: Maybe<number> }>, sum: Maybe<{ __typename?: 'Task_sum_fields', id: Maybe<number>, project_id: Maybe<number> }>, var_pop: Maybe<{ __typename?: 'Task_var_pop_fields', id: Maybe<number>, project_id: Maybe<number> }>, var_samp: Maybe<{ __typename?: 'Task_var_samp_fields', id: Maybe<number>, project_id: Maybe<number> }>, variance: Maybe<{ __typename?: 'Task_variance_fields', id: Maybe<number>, project_id: Maybe<number> }> }>, nodes: Array<{ __typename?: 'Task', id: number, name: string, project_id: number }> }, User: { __typename?: 'User', id: number, name: string, Projects_aggregate: { __typename?: 'Project_aggregate', aggregate: Maybe<{ __typename?: 'Project_aggregate_fields', count: Maybe<number> }> } } }> };

export type IUpdateTaskMutationVariables = Exact<{
  inc: Maybe<ITask_Inc_Input>;
  set: Maybe<ITask_Set_Input>;
  where: ITask_Bool_Exp;
  includeUpdateTaskReturning?: Scalars['Boolean'];
  includeUpdateTaskReturningProject?: Scalars['Boolean'];
  includeUpdateTaskReturningProjectUser?: Scalars['Boolean'];
}>;


export type IUpdateTaskMutation = { __typename?: 'mutation_root', update_Task: Maybe<{ __typename?: 'Task_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'Task', id: number, name: string, project_id: number, Project: { __typename?: 'Project', id: number, name: string, user_id: number, User: { __typename?: 'User', id: number, name: string } } }> }> };

export type IUpdateTaskByPkMutationVariables = Exact<{
  inc: Maybe<ITask_Inc_Input>;
  set: Maybe<ITask_Set_Input>;
  pkColumns: ITask_Pk_Columns_Input;
  updateTaskByPkProjectProjectTasksAggregateDistinctOn: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  updateTaskByPkProjectProjectTasksAggregateLimit: Maybe<Scalars['Int']>;
  updateTaskByPkProjectProjectTasksAggregateOffset: Maybe<Scalars['Int']>;
  updateTaskByPkProjectProjectTasksAggregateOrderBy: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  updateTaskByPkProjectProjectTasksAggregateWhere: Maybe<ITask_Bool_Exp>;
  updateTaskByPkProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountColumns: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  updateTaskByPkProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountDistinct: Maybe<Scalars['Boolean']>;
  includeUpdateTaskByPkProject?: Scalars['Boolean'];
  includeUpdateTaskByPkProjectTasksAggregate?: Scalars['Boolean'];
  includeUpdateTaskByPkProjectTasksAggregateAggregate?: Scalars['Boolean'];
  includeUpdateTaskByPkProjectUser?: Scalars['Boolean'];
}>;


export type IUpdateTaskByPkMutation = { __typename?: 'mutation_root', update_Task_by_pk: Maybe<{ __typename?: 'Task', id: number, name: string, project_id: number, Project: { __typename?: 'Project', id: number, name: string, user_id: number, Tasks_aggregate: { __typename?: 'Task_aggregate', aggregate: Maybe<{ __typename?: 'Task_aggregate_fields', count: Maybe<number> }> }, User: { __typename?: 'User', id: number, name: string } } }> };

export type IUpdateUserMutationVariables = Exact<{
  inc: Maybe<IUser_Inc_Input>;
  set: Maybe<IUser_Set_Input>;
  where: IUser_Bool_Exp;
  updateUserReturningReturningProjectsDistinctOn: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  updateUserReturningReturningProjectsLimit: Maybe<Scalars['Int']>;
  updateUserReturningReturningProjectsOffset: Maybe<Scalars['Int']>;
  updateUserReturningReturningProjectsOrderBy: Maybe<Array<IProject_Order_By> | IProject_Order_By>;
  updateUserReturningReturningProjectsWhere: Maybe<IProject_Bool_Exp>;
  updateUserReturningReturningProjectsProjectsTasksDistinctOn: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  updateUserReturningReturningProjectsProjectsTasksLimit: Maybe<Scalars['Int']>;
  updateUserReturningReturningProjectsProjectsTasksOffset: Maybe<Scalars['Int']>;
  updateUserReturningReturningProjectsProjectsTasksOrderBy: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  updateUserReturningReturningProjectsProjectsTasksWhere: Maybe<ITask_Bool_Exp>;
  updateUserReturningReturningProjectsAggregateDistinctOn: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  updateUserReturningReturningProjectsAggregateLimit: Maybe<Scalars['Int']>;
  updateUserReturningReturningProjectsAggregateOffset: Maybe<Scalars['Int']>;
  updateUserReturningReturningProjectsAggregateOrderBy: Maybe<Array<IProject_Order_By> | IProject_Order_By>;
  updateUserReturningReturningProjectsAggregateWhere: Maybe<IProject_Bool_Exp>;
  updateUserReturningReturningProjectsAggregateProjectsAggregateAggregateAggregateCountColumns: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  updateUserReturningReturningProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct: Maybe<Scalars['Boolean']>;
  includeUpdateUserReturning?: Scalars['Boolean'];
  includeUpdateUserReturningProjects?: Scalars['Boolean'];
  includeUpdateUserReturningProjectsTasks?: Scalars['Boolean'];
  includeUpdateUserReturningProjectsAggregate?: Scalars['Boolean'];
  includeUpdateUserReturningProjectsAggregateAggregate?: Scalars['Boolean'];
  includeUpdateUserReturningProjectsAggregateNodes?: Scalars['Boolean'];
}>;


export type IUpdateUserMutation = { __typename?: 'mutation_root', update_User: Maybe<{ __typename?: 'User_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'User', id: number, name: string, Projects: Array<{ __typename?: 'Project', id: number, name: string, user_id: number, Tasks: Array<{ __typename?: 'Task', id: number, name: string, project_id: number }> }>, Projects_aggregate: { __typename?: 'Project_aggregate', aggregate: Maybe<{ __typename?: 'Project_aggregate_fields', count: Maybe<number> }>, nodes: Array<{ __typename?: 'Project', id: number, name: string, user_id: number }> } }> }> };

export type IUpdateUserByPkMutationVariables = Exact<{
  inc: Maybe<IUser_Inc_Input>;
  set: Maybe<IUser_Set_Input>;
  pkColumns: IUser_Pk_Columns_Input;
  updateUserByPkProjectsDistinctOn: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  updateUserByPkProjectsLimit: Maybe<Scalars['Int']>;
  updateUserByPkProjectsOffset: Maybe<Scalars['Int']>;
  updateUserByPkProjectsOrderBy: Maybe<Array<IProject_Order_By> | IProject_Order_By>;
  updateUserByPkProjectsWhere: Maybe<IProject_Bool_Exp>;
  updateUserByPkProjectsProjectsTasksDistinctOn: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  updateUserByPkProjectsProjectsTasksLimit: Maybe<Scalars['Int']>;
  updateUserByPkProjectsProjectsTasksOffset: Maybe<Scalars['Int']>;
  updateUserByPkProjectsProjectsTasksOrderBy: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  updateUserByPkProjectsProjectsTasksWhere: Maybe<ITask_Bool_Exp>;
  updateUserByPkProjectsProjectsTasksAggregateDistinctOn: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  updateUserByPkProjectsProjectsTasksAggregateLimit: Maybe<Scalars['Int']>;
  updateUserByPkProjectsProjectsTasksAggregateOffset: Maybe<Scalars['Int']>;
  updateUserByPkProjectsProjectsTasksAggregateOrderBy: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  updateUserByPkProjectsProjectsTasksAggregateWhere: Maybe<ITask_Bool_Exp>;
  updateUserByPkProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountColumns: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  updateUserByPkProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountDistinct: Maybe<Scalars['Boolean']>;
  updateUserByPkProjectsAggregateDistinctOn: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  updateUserByPkProjectsAggregateLimit: Maybe<Scalars['Int']>;
  updateUserByPkProjectsAggregateOffset: Maybe<Scalars['Int']>;
  updateUserByPkProjectsAggregateOrderBy: Maybe<Array<IProject_Order_By> | IProject_Order_By>;
  updateUserByPkProjectsAggregateWhere: Maybe<IProject_Bool_Exp>;
  updateUserByPkProjectsAggregateProjectsAggregateAggregateAggregateCountColumns: Maybe<Array<IProject_Select_Column> | IProject_Select_Column>;
  updateUserByPkProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct: Maybe<Scalars['Boolean']>;
  updateUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksDistinctOn: Maybe<Array<ITask_Select_Column> | ITask_Select_Column>;
  updateUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksLimit: Maybe<Scalars['Int']>;
  updateUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksOffset: Maybe<Scalars['Int']>;
  updateUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksOrderBy: Maybe<Array<ITask_Order_By> | ITask_Order_By>;
  updateUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksWhere: Maybe<ITask_Bool_Exp>;
  includeUpdateUserByPkProjects?: Scalars['Boolean'];
  includeUpdateUserByPkProjectsTasks?: Scalars['Boolean'];
  includeUpdateUserByPkProjectsTasksAggregate?: Scalars['Boolean'];
  includeUpdateUserByPkProjectsTasksAggregateAggregate?: Scalars['Boolean'];
  includeUpdateUserByPkProjectsTasksAggregateNodes?: Scalars['Boolean'];
  includeUpdateUserByPkProjectsAggregate?: Scalars['Boolean'];
  includeUpdateUserByPkProjectsAggregateAggregate?: Scalars['Boolean'];
  includeUpdateUserByPkProjectsAggregateAggregateAvg?: Scalars['Boolean'];
  includeUpdateUserByPkProjectsAggregateAggregateMax?: Scalars['Boolean'];
  includeUpdateUserByPkProjectsAggregateAggregateMin?: Scalars['Boolean'];
  includeUpdateUserByPkProjectsAggregateAggregateStddev?: Scalars['Boolean'];
  includeUpdateUserByPkProjectsAggregateAggregateStddevPop?: Scalars['Boolean'];
  includeUpdateUserByPkProjectsAggregateAggregateStddevSamp?: Scalars['Boolean'];
  includeUpdateUserByPkProjectsAggregateAggregateSum?: Scalars['Boolean'];
  includeUpdateUserByPkProjectsAggregateAggregateVarPop?: Scalars['Boolean'];
  includeUpdateUserByPkProjectsAggregateAggregateVarSamp?: Scalars['Boolean'];
  includeUpdateUserByPkProjectsAggregateAggregateVariance?: Scalars['Boolean'];
  includeUpdateUserByPkProjectsAggregateNodes?: Scalars['Boolean'];
  includeUpdateUserByPkProjectsAggregateNodesTasks?: Scalars['Boolean'];
}>;


export type IUpdateUserByPkMutation = { __typename?: 'mutation_root', update_User_by_pk: Maybe<{ __typename?: 'User', id: number, name: string, Projects: Array<{ __typename?: 'Project', id: number, name: string, user_id: number, Tasks: Array<{ __typename?: 'Task', id: number, name: string, project_id: number }>, Tasks_aggregate: { __typename?: 'Task_aggregate', aggregate: Maybe<{ __typename?: 'Task_aggregate_fields', count: Maybe<number> }>, nodes: Array<{ __typename?: 'Task', id: number, name: string, project_id: number }> } }>, Projects_aggregate: { __typename?: 'Project_aggregate', aggregate: Maybe<{ __typename?: 'Project_aggregate_fields', count: Maybe<number>, avg: Maybe<{ __typename?: 'Project_avg_fields', id: Maybe<number>, user_id: Maybe<number> }>, max: Maybe<{ __typename?: 'Project_max_fields', id: Maybe<number>, name: Maybe<string>, user_id: Maybe<number> }>, min: Maybe<{ __typename?: 'Project_min_fields', id: Maybe<number>, name: Maybe<string>, user_id: Maybe<number> }>, stddev: Maybe<{ __typename?: 'Project_stddev_fields', id: Maybe<number>, user_id: Maybe<number> }>, stddev_pop: Maybe<{ __typename?: 'Project_stddev_pop_fields', id: Maybe<number>, user_id: Maybe<number> }>, stddev_samp: Maybe<{ __typename?: 'Project_stddev_samp_fields', id: Maybe<number>, user_id: Maybe<number> }>, sum: Maybe<{ __typename?: 'Project_sum_fields', id: Maybe<number>, user_id: Maybe<number> }>, var_pop: Maybe<{ __typename?: 'Project_var_pop_fields', id: Maybe<number>, user_id: Maybe<number> }>, var_samp: Maybe<{ __typename?: 'Project_var_samp_fields', id: Maybe<number>, user_id: Maybe<number> }>, variance: Maybe<{ __typename?: 'Project_variance_fields', id: Maybe<number>, user_id: Maybe<number> }> }>, nodes: Array<{ __typename?: 'Project', id: number, name: string, user_id: number, Tasks: Array<{ __typename?: 'Task', id: number, name: string, project_id: number }> }> } }> };


export const ProjectQueryDocument = /*#__PURE__*/ gql`
    query projectQuery($distinctOn: [Project_select_column!], $limit: Int, $offset: Int, $orderBy: [Project_order_by!], $where: Project_bool_exp, $projectTasksDistinctOn: [Task_select_column!], $projectTasksLimit: Int, $projectTasksOffset: Int, $projectTasksOrderBy: [Task_order_by!], $projectTasksWhere: Task_bool_exp, $projectTasksAggregateDistinctOn: [Task_select_column!], $projectTasksAggregateLimit: Int, $projectTasksAggregateOffset: Int, $projectTasksAggregateOrderBy: [Task_order_by!], $projectTasksAggregateWhere: Task_bool_exp, $projectTasksAggregateTasksAggregateAggregateAggregateCountColumns: [Task_select_column!], $projectTasksAggregateTasksAggregateAggregateAggregateCountDistinct: Boolean, $projectUserUserProjectsAggregateDistinctOn: [Project_select_column!], $projectUserUserProjectsAggregateLimit: Int, $projectUserUserProjectsAggregateOffset: Int, $projectUserUserProjectsAggregateOrderBy: [Project_order_by!], $projectUserUserProjectsAggregateWhere: Project_bool_exp, $projectUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountColumns: [Project_select_column!], $projectUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct: Boolean, $includeProjectTasks: Boolean! = false, $includeProjectTasksAggregate: Boolean! = false, $includeProjectTasksAggregateAggregate: Boolean! = false, $includeProjectTasksAggregateAggregateAvg: Boolean! = false, $includeProjectTasksAggregateAggregateMax: Boolean! = false, $includeProjectTasksAggregateAggregateMin: Boolean! = false, $includeProjectTasksAggregateAggregateStddev: Boolean! = false, $includeProjectTasksAggregateAggregateStddevPop: Boolean! = false, $includeProjectTasksAggregateAggregateStddevSamp: Boolean! = false, $includeProjectTasksAggregateAggregateSum: Boolean! = false, $includeProjectTasksAggregateAggregateVarPop: Boolean! = false, $includeProjectTasksAggregateAggregateVarSamp: Boolean! = false, $includeProjectTasksAggregateAggregateVariance: Boolean! = false, $includeProjectTasksAggregateNodes: Boolean! = false, $includeProjectUser: Boolean! = false, $includeProjectUserProjectsAggregate: Boolean! = false, $includeProjectUserProjectsAggregateAggregate: Boolean! = false) {
  Project(
    distinct_on: $distinctOn
    limit: $limit
    offset: $offset
    order_by: $orderBy
    where: $where
  ) {
    Tasks(
      distinct_on: $projectTasksDistinctOn
      limit: $projectTasksLimit
      offset: $projectTasksOffset
      order_by: $projectTasksOrderBy
      where: $projectTasksWhere
    ) @include(if: $includeProjectTasks) {
      id
      name
      project_id
    }
    Tasks_aggregate(
      distinct_on: $projectTasksAggregateDistinctOn
      limit: $projectTasksAggregateLimit
      offset: $projectTasksAggregateOffset
      order_by: $projectTasksAggregateOrderBy
      where: $projectTasksAggregateWhere
    ) @include(if: $includeProjectTasksAggregate) {
      aggregate @include(if: $includeProjectTasksAggregateAggregate) {
        avg @include(if: $includeProjectTasksAggregateAggregateAvg) {
          id
          project_id
        }
        count(
          columns: $projectTasksAggregateTasksAggregateAggregateAggregateCountColumns
          distinct: $projectTasksAggregateTasksAggregateAggregateAggregateCountDistinct
        )
        max @include(if: $includeProjectTasksAggregateAggregateMax) {
          id
          name
          project_id
        }
        min @include(if: $includeProjectTasksAggregateAggregateMin) {
          id
          name
          project_id
        }
        stddev @include(if: $includeProjectTasksAggregateAggregateStddev) {
          id
          project_id
        }
        stddev_pop @include(if: $includeProjectTasksAggregateAggregateStddevPop) {
          id
          project_id
        }
        stddev_samp @include(if: $includeProjectTasksAggregateAggregateStddevSamp) {
          id
          project_id
        }
        sum @include(if: $includeProjectTasksAggregateAggregateSum) {
          id
          project_id
        }
        var_pop @include(if: $includeProjectTasksAggregateAggregateVarPop) {
          id
          project_id
        }
        var_samp @include(if: $includeProjectTasksAggregateAggregateVarSamp) {
          id
          project_id
        }
        variance @include(if: $includeProjectTasksAggregateAggregateVariance) {
          id
          project_id
        }
      }
      nodes @include(if: $includeProjectTasksAggregateNodes) {
        id
        name
        project_id
      }
    }
    User @include(if: $includeProjectUser) {
      Projects_aggregate(
        distinct_on: $projectUserUserProjectsAggregateDistinctOn
        limit: $projectUserUserProjectsAggregateLimit
        offset: $projectUserUserProjectsAggregateOffset
        order_by: $projectUserUserProjectsAggregateOrderBy
        where: $projectUserUserProjectsAggregateWhere
      ) @include(if: $includeProjectUserProjectsAggregate) {
        aggregate @include(if: $includeProjectUserProjectsAggregateAggregate) {
          count(
            columns: $projectUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountColumns
            distinct: $projectUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct
          )
        }
      }
      id
      name
    }
    id
    name
    user_id
  }
}
    `;
export function useProjectQuery(baseOptions?: Apollo.QueryHookOptions<IProjectQuery, IProjectQueryVariables>) {
        return Apollo.useQuery<IProjectQuery, IProjectQueryVariables>(ProjectQueryDocument, baseOptions);
      }
export function useProjectQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IProjectQuery, IProjectQueryVariables>) {
          return Apollo.useLazyQuery<IProjectQuery, IProjectQueryVariables>(ProjectQueryDocument, baseOptions);
        }
export type ProjectQueryHookResult = ReturnType<typeof useProjectQuery>;
export type ProjectQueryLazyQueryHookResult = ReturnType<typeof useProjectQueryLazyQuery>;
export type ProjectQueryQueryResult = Apollo.QueryResult<IProjectQuery, IProjectQueryVariables>;
export const ProjectAggregateQueryDocument = /*#__PURE__*/ gql`
    query projectAggregateQuery($distinctOn: [Project_select_column!], $limit: Int, $offset: Int, $orderBy: [Project_order_by!], $where: Project_bool_exp, $projectAggregateAggregateAggregateCountColumns: [Project_select_column!], $projectAggregateAggregateAggregateCountDistinct: Boolean, $projectAggregateNodesNodesTasksDistinctOn: [Task_select_column!], $projectAggregateNodesNodesTasksLimit: Int, $projectAggregateNodesNodesTasksOffset: Int, $projectAggregateNodesNodesTasksOrderBy: [Task_order_by!], $projectAggregateNodesNodesTasksWhere: Task_bool_exp, $projectAggregateNodesNodesTasksAggregateDistinctOn: [Task_select_column!], $projectAggregateNodesNodesTasksAggregateLimit: Int, $projectAggregateNodesNodesTasksAggregateOffset: Int, $projectAggregateNodesNodesTasksAggregateOrderBy: [Task_order_by!], $projectAggregateNodesNodesTasksAggregateWhere: Task_bool_exp, $projectAggregateNodesNodesTasksAggregateTasksAggregateAggregateAggregateCountColumns: [Task_select_column!], $projectAggregateNodesNodesTasksAggregateTasksAggregateAggregateAggregateCountDistinct: Boolean, $includeProjectAggregateAggregate: Boolean! = false, $includeProjectAggregateAggregateAvg: Boolean! = false, $includeProjectAggregateAggregateMax: Boolean! = false, $includeProjectAggregateAggregateMin: Boolean! = false, $includeProjectAggregateAggregateStddev: Boolean! = false, $includeProjectAggregateAggregateStddevPop: Boolean! = false, $includeProjectAggregateAggregateStddevSamp: Boolean! = false, $includeProjectAggregateAggregateSum: Boolean! = false, $includeProjectAggregateAggregateVarPop: Boolean! = false, $includeProjectAggregateAggregateVarSamp: Boolean! = false, $includeProjectAggregateAggregateVariance: Boolean! = false, $includeProjectAggregateNodes: Boolean! = false, $includeProjectAggregateNodesTasks: Boolean! = false, $includeProjectAggregateNodesTasksAggregate: Boolean! = false, $includeProjectAggregateNodesTasksAggregateAggregate: Boolean! = false, $includeProjectAggregateNodesTasksAggregateNodes: Boolean! = false, $includeProjectAggregateNodesUser: Boolean! = false) {
  Project_aggregate(
    distinct_on: $distinctOn
    limit: $limit
    offset: $offset
    order_by: $orderBy
    where: $where
  ) {
    aggregate @include(if: $includeProjectAggregateAggregate) {
      avg @include(if: $includeProjectAggregateAggregateAvg) {
        id
        user_id
      }
      count(
        columns: $projectAggregateAggregateAggregateCountColumns
        distinct: $projectAggregateAggregateAggregateCountDistinct
      )
      max @include(if: $includeProjectAggregateAggregateMax) {
        id
        name
        user_id
      }
      min @include(if: $includeProjectAggregateAggregateMin) {
        id
        name
        user_id
      }
      stddev @include(if: $includeProjectAggregateAggregateStddev) {
        id
        user_id
      }
      stddev_pop @include(if: $includeProjectAggregateAggregateStddevPop) {
        id
        user_id
      }
      stddev_samp @include(if: $includeProjectAggregateAggregateStddevSamp) {
        id
        user_id
      }
      sum @include(if: $includeProjectAggregateAggregateSum) {
        id
        user_id
      }
      var_pop @include(if: $includeProjectAggregateAggregateVarPop) {
        id
        user_id
      }
      var_samp @include(if: $includeProjectAggregateAggregateVarSamp) {
        id
        user_id
      }
      variance @include(if: $includeProjectAggregateAggregateVariance) {
        id
        user_id
      }
    }
    nodes @include(if: $includeProjectAggregateNodes) {
      Tasks(
        distinct_on: $projectAggregateNodesNodesTasksDistinctOn
        limit: $projectAggregateNodesNodesTasksLimit
        offset: $projectAggregateNodesNodesTasksOffset
        order_by: $projectAggregateNodesNodesTasksOrderBy
        where: $projectAggregateNodesNodesTasksWhere
      ) @include(if: $includeProjectAggregateNodesTasks) {
        id
        name
        project_id
      }
      Tasks_aggregate(
        distinct_on: $projectAggregateNodesNodesTasksAggregateDistinctOn
        limit: $projectAggregateNodesNodesTasksAggregateLimit
        offset: $projectAggregateNodesNodesTasksAggregateOffset
        order_by: $projectAggregateNodesNodesTasksAggregateOrderBy
        where: $projectAggregateNodesNodesTasksAggregateWhere
      ) @include(if: $includeProjectAggregateNodesTasksAggregate) {
        aggregate @include(if: $includeProjectAggregateNodesTasksAggregateAggregate) {
          count(
            columns: $projectAggregateNodesNodesTasksAggregateTasksAggregateAggregateAggregateCountColumns
            distinct: $projectAggregateNodesNodesTasksAggregateTasksAggregateAggregateAggregateCountDistinct
          )
        }
        nodes @include(if: $includeProjectAggregateNodesTasksAggregateNodes) {
          id
          name
          project_id
        }
      }
      User @include(if: $includeProjectAggregateNodesUser) {
        id
        name
      }
      id
      name
      user_id
    }
  }
}
    `;
export function useProjectAggregateQuery(baseOptions?: Apollo.QueryHookOptions<IProjectAggregateQuery, IProjectAggregateQueryVariables>) {
        return Apollo.useQuery<IProjectAggregateQuery, IProjectAggregateQueryVariables>(ProjectAggregateQueryDocument, baseOptions);
      }
export function useProjectAggregateQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IProjectAggregateQuery, IProjectAggregateQueryVariables>) {
          return Apollo.useLazyQuery<IProjectAggregateQuery, IProjectAggregateQueryVariables>(ProjectAggregateQueryDocument, baseOptions);
        }
export type ProjectAggregateQueryHookResult = ReturnType<typeof useProjectAggregateQuery>;
export type ProjectAggregateQueryLazyQueryHookResult = ReturnType<typeof useProjectAggregateQueryLazyQuery>;
export type ProjectAggregateQueryQueryResult = Apollo.QueryResult<IProjectAggregateQuery, IProjectAggregateQueryVariables>;
export const ProjectByPkQueryDocument = /*#__PURE__*/ gql`
    query projectByPkQuery($id: Int!, $projectByPkTasksDistinctOn: [Task_select_column!], $projectByPkTasksLimit: Int, $projectByPkTasksOffset: Int, $projectByPkTasksOrderBy: [Task_order_by!], $projectByPkTasksWhere: Task_bool_exp, $projectByPkTasksAggregateDistinctOn: [Task_select_column!], $projectByPkTasksAggregateLimit: Int, $projectByPkTasksAggregateOffset: Int, $projectByPkTasksAggregateOrderBy: [Task_order_by!], $projectByPkTasksAggregateWhere: Task_bool_exp, $projectByPkTasksAggregateTasksAggregateAggregateAggregateCountColumns: [Task_select_column!], $projectByPkTasksAggregateTasksAggregateAggregateAggregateCountDistinct: Boolean, $projectByPkUserUserProjectsAggregateDistinctOn: [Project_select_column!], $projectByPkUserUserProjectsAggregateLimit: Int, $projectByPkUserUserProjectsAggregateOffset: Int, $projectByPkUserUserProjectsAggregateOrderBy: [Project_order_by!], $projectByPkUserUserProjectsAggregateWhere: Project_bool_exp, $projectByPkUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountColumns: [Project_select_column!], $projectByPkUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct: Boolean, $includeProjectByPkTasks: Boolean! = false, $includeProjectByPkTasksAggregate: Boolean! = false, $includeProjectByPkTasksAggregateAggregate: Boolean! = false, $includeProjectByPkTasksAggregateAggregateAvg: Boolean! = false, $includeProjectByPkTasksAggregateAggregateMax: Boolean! = false, $includeProjectByPkTasksAggregateAggregateMin: Boolean! = false, $includeProjectByPkTasksAggregateAggregateStddev: Boolean! = false, $includeProjectByPkTasksAggregateAggregateStddevPop: Boolean! = false, $includeProjectByPkTasksAggregateAggregateStddevSamp: Boolean! = false, $includeProjectByPkTasksAggregateAggregateSum: Boolean! = false, $includeProjectByPkTasksAggregateAggregateVarPop: Boolean! = false, $includeProjectByPkTasksAggregateAggregateVarSamp: Boolean! = false, $includeProjectByPkTasksAggregateAggregateVariance: Boolean! = false, $includeProjectByPkTasksAggregateNodes: Boolean! = false, $includeProjectByPkUser: Boolean! = false, $includeProjectByPkUserProjectsAggregate: Boolean! = false, $includeProjectByPkUserProjectsAggregateAggregate: Boolean! = false) {
  Project_by_pk(id: $id) {
    Tasks(
      distinct_on: $projectByPkTasksDistinctOn
      limit: $projectByPkTasksLimit
      offset: $projectByPkTasksOffset
      order_by: $projectByPkTasksOrderBy
      where: $projectByPkTasksWhere
    ) @include(if: $includeProjectByPkTasks) {
      id
      name
      project_id
    }
    Tasks_aggregate(
      distinct_on: $projectByPkTasksAggregateDistinctOn
      limit: $projectByPkTasksAggregateLimit
      offset: $projectByPkTasksAggregateOffset
      order_by: $projectByPkTasksAggregateOrderBy
      where: $projectByPkTasksAggregateWhere
    ) @include(if: $includeProjectByPkTasksAggregate) {
      aggregate @include(if: $includeProjectByPkTasksAggregateAggregate) {
        avg @include(if: $includeProjectByPkTasksAggregateAggregateAvg) {
          id
          project_id
        }
        count(
          columns: $projectByPkTasksAggregateTasksAggregateAggregateAggregateCountColumns
          distinct: $projectByPkTasksAggregateTasksAggregateAggregateAggregateCountDistinct
        )
        max @include(if: $includeProjectByPkTasksAggregateAggregateMax) {
          id
          name
          project_id
        }
        min @include(if: $includeProjectByPkTasksAggregateAggregateMin) {
          id
          name
          project_id
        }
        stddev @include(if: $includeProjectByPkTasksAggregateAggregateStddev) {
          id
          project_id
        }
        stddev_pop @include(if: $includeProjectByPkTasksAggregateAggregateStddevPop) {
          id
          project_id
        }
        stddev_samp @include(if: $includeProjectByPkTasksAggregateAggregateStddevSamp) {
          id
          project_id
        }
        sum @include(if: $includeProjectByPkTasksAggregateAggregateSum) {
          id
          project_id
        }
        var_pop @include(if: $includeProjectByPkTasksAggregateAggregateVarPop) {
          id
          project_id
        }
        var_samp @include(if: $includeProjectByPkTasksAggregateAggregateVarSamp) {
          id
          project_id
        }
        variance @include(if: $includeProjectByPkTasksAggregateAggregateVariance) {
          id
          project_id
        }
      }
      nodes @include(if: $includeProjectByPkTasksAggregateNodes) {
        id
        name
        project_id
      }
    }
    User @include(if: $includeProjectByPkUser) {
      Projects_aggregate(
        distinct_on: $projectByPkUserUserProjectsAggregateDistinctOn
        limit: $projectByPkUserUserProjectsAggregateLimit
        offset: $projectByPkUserUserProjectsAggregateOffset
        order_by: $projectByPkUserUserProjectsAggregateOrderBy
        where: $projectByPkUserUserProjectsAggregateWhere
      ) @include(if: $includeProjectByPkUserProjectsAggregate) {
        aggregate @include(if: $includeProjectByPkUserProjectsAggregateAggregate) {
          count(
            columns: $projectByPkUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountColumns
            distinct: $projectByPkUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct
          )
        }
      }
      id
      name
    }
    id
    name
    user_id
  }
}
    `;
export function useProjectByPkQuery(baseOptions: Apollo.QueryHookOptions<IProjectByPkQuery, IProjectByPkQueryVariables>) {
        return Apollo.useQuery<IProjectByPkQuery, IProjectByPkQueryVariables>(ProjectByPkQueryDocument, baseOptions);
      }
export function useProjectByPkQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IProjectByPkQuery, IProjectByPkQueryVariables>) {
          return Apollo.useLazyQuery<IProjectByPkQuery, IProjectByPkQueryVariables>(ProjectByPkQueryDocument, baseOptions);
        }
export type ProjectByPkQueryHookResult = ReturnType<typeof useProjectByPkQuery>;
export type ProjectByPkQueryLazyQueryHookResult = ReturnType<typeof useProjectByPkQueryLazyQuery>;
export type ProjectByPkQueryQueryResult = Apollo.QueryResult<IProjectByPkQuery, IProjectByPkQueryVariables>;
export const TaskQueryDocument = /*#__PURE__*/ gql`
    query taskQuery($distinctOn: [Task_select_column!], $limit: Int, $offset: Int, $orderBy: [Task_order_by!], $where: Task_bool_exp, $taskProjectProjectTasksAggregateDistinctOn: [Task_select_column!], $taskProjectProjectTasksAggregateLimit: Int, $taskProjectProjectTasksAggregateOffset: Int, $taskProjectProjectTasksAggregateOrderBy: [Task_order_by!], $taskProjectProjectTasksAggregateWhere: Task_bool_exp, $taskProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountColumns: [Task_select_column!], $taskProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountDistinct: Boolean, $includeTaskProject: Boolean! = false, $includeTaskProjectTasksAggregate: Boolean! = false, $includeTaskProjectTasksAggregateAggregate: Boolean! = false, $includeTaskProjectUser: Boolean! = false) {
  Task(
    distinct_on: $distinctOn
    limit: $limit
    offset: $offset
    order_by: $orderBy
    where: $where
  ) {
    Project @include(if: $includeTaskProject) {
      Tasks_aggregate(
        distinct_on: $taskProjectProjectTasksAggregateDistinctOn
        limit: $taskProjectProjectTasksAggregateLimit
        offset: $taskProjectProjectTasksAggregateOffset
        order_by: $taskProjectProjectTasksAggregateOrderBy
        where: $taskProjectProjectTasksAggregateWhere
      ) @include(if: $includeTaskProjectTasksAggregate) {
        aggregate @include(if: $includeTaskProjectTasksAggregateAggregate) {
          count(
            columns: $taskProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountColumns
            distinct: $taskProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountDistinct
          )
        }
      }
      User @include(if: $includeTaskProjectUser) {
        id
        name
      }
      id
      name
      user_id
    }
    id
    name
    project_id
  }
}
    `;
export function useTaskQuery(baseOptions?: Apollo.QueryHookOptions<ITaskQuery, ITaskQueryVariables>) {
        return Apollo.useQuery<ITaskQuery, ITaskQueryVariables>(TaskQueryDocument, baseOptions);
      }
export function useTaskQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ITaskQuery, ITaskQueryVariables>) {
          return Apollo.useLazyQuery<ITaskQuery, ITaskQueryVariables>(TaskQueryDocument, baseOptions);
        }
export type TaskQueryHookResult = ReturnType<typeof useTaskQuery>;
export type TaskQueryLazyQueryHookResult = ReturnType<typeof useTaskQueryLazyQuery>;
export type TaskQueryQueryResult = Apollo.QueryResult<ITaskQuery, ITaskQueryVariables>;
export const TaskAggregateQueryDocument = /*#__PURE__*/ gql`
    query taskAggregateQuery($distinctOn: [Task_select_column!], $limit: Int, $offset: Int, $orderBy: [Task_order_by!], $where: Task_bool_exp, $taskAggregateAggregateAggregateCountColumns: [Task_select_column!], $taskAggregateAggregateAggregateCountDistinct: Boolean, $includeTaskAggregateAggregate: Boolean! = false, $includeTaskAggregateAggregateAvg: Boolean! = false, $includeTaskAggregateAggregateMax: Boolean! = false, $includeTaskAggregateAggregateMin: Boolean! = false, $includeTaskAggregateAggregateStddev: Boolean! = false, $includeTaskAggregateAggregateStddevPop: Boolean! = false, $includeTaskAggregateAggregateStddevSamp: Boolean! = false, $includeTaskAggregateAggregateSum: Boolean! = false, $includeTaskAggregateAggregateVarPop: Boolean! = false, $includeTaskAggregateAggregateVarSamp: Boolean! = false, $includeTaskAggregateAggregateVariance: Boolean! = false, $includeTaskAggregateNodes: Boolean! = false, $includeTaskAggregateNodesProject: Boolean! = false, $includeTaskAggregateNodesProjectUser: Boolean! = false) {
  Task_aggregate(
    distinct_on: $distinctOn
    limit: $limit
    offset: $offset
    order_by: $orderBy
    where: $where
  ) {
    aggregate @include(if: $includeTaskAggregateAggregate) {
      avg @include(if: $includeTaskAggregateAggregateAvg) {
        id
        project_id
      }
      count(
        columns: $taskAggregateAggregateAggregateCountColumns
        distinct: $taskAggregateAggregateAggregateCountDistinct
      )
      max @include(if: $includeTaskAggregateAggregateMax) {
        id
        name
        project_id
      }
      min @include(if: $includeTaskAggregateAggregateMin) {
        id
        name
        project_id
      }
      stddev @include(if: $includeTaskAggregateAggregateStddev) {
        id
        project_id
      }
      stddev_pop @include(if: $includeTaskAggregateAggregateStddevPop) {
        id
        project_id
      }
      stddev_samp @include(if: $includeTaskAggregateAggregateStddevSamp) {
        id
        project_id
      }
      sum @include(if: $includeTaskAggregateAggregateSum) {
        id
        project_id
      }
      var_pop @include(if: $includeTaskAggregateAggregateVarPop) {
        id
        project_id
      }
      var_samp @include(if: $includeTaskAggregateAggregateVarSamp) {
        id
        project_id
      }
      variance @include(if: $includeTaskAggregateAggregateVariance) {
        id
        project_id
      }
    }
    nodes @include(if: $includeTaskAggregateNodes) {
      Project @include(if: $includeTaskAggregateNodesProject) {
        User @include(if: $includeTaskAggregateNodesProjectUser) {
          id
          name
        }
        id
        name
        user_id
      }
      id
      name
      project_id
    }
  }
}
    `;
export function useTaskAggregateQuery(baseOptions?: Apollo.QueryHookOptions<ITaskAggregateQuery, ITaskAggregateQueryVariables>) {
        return Apollo.useQuery<ITaskAggregateQuery, ITaskAggregateQueryVariables>(TaskAggregateQueryDocument, baseOptions);
      }
export function useTaskAggregateQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ITaskAggregateQuery, ITaskAggregateQueryVariables>) {
          return Apollo.useLazyQuery<ITaskAggregateQuery, ITaskAggregateQueryVariables>(TaskAggregateQueryDocument, baseOptions);
        }
export type TaskAggregateQueryHookResult = ReturnType<typeof useTaskAggregateQuery>;
export type TaskAggregateQueryLazyQueryHookResult = ReturnType<typeof useTaskAggregateQueryLazyQuery>;
export type TaskAggregateQueryQueryResult = Apollo.QueryResult<ITaskAggregateQuery, ITaskAggregateQueryVariables>;
export const TaskByPkQueryDocument = /*#__PURE__*/ gql`
    query taskByPkQuery($id: Int!, $taskByPkProjectProjectTasksAggregateDistinctOn: [Task_select_column!], $taskByPkProjectProjectTasksAggregateLimit: Int, $taskByPkProjectProjectTasksAggregateOffset: Int, $taskByPkProjectProjectTasksAggregateOrderBy: [Task_order_by!], $taskByPkProjectProjectTasksAggregateWhere: Task_bool_exp, $taskByPkProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountColumns: [Task_select_column!], $taskByPkProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountDistinct: Boolean, $includeTaskByPkProject: Boolean! = false, $includeTaskByPkProjectTasksAggregate: Boolean! = false, $includeTaskByPkProjectTasksAggregateAggregate: Boolean! = false, $includeTaskByPkProjectUser: Boolean! = false) {
  Task_by_pk(id: $id) {
    Project @include(if: $includeTaskByPkProject) {
      Tasks_aggregate(
        distinct_on: $taskByPkProjectProjectTasksAggregateDistinctOn
        limit: $taskByPkProjectProjectTasksAggregateLimit
        offset: $taskByPkProjectProjectTasksAggregateOffset
        order_by: $taskByPkProjectProjectTasksAggregateOrderBy
        where: $taskByPkProjectProjectTasksAggregateWhere
      ) @include(if: $includeTaskByPkProjectTasksAggregate) {
        aggregate @include(if: $includeTaskByPkProjectTasksAggregateAggregate) {
          count(
            columns: $taskByPkProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountColumns
            distinct: $taskByPkProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountDistinct
          )
        }
      }
      User @include(if: $includeTaskByPkProjectUser) {
        id
        name
      }
      id
      name
      user_id
    }
    id
    name
    project_id
  }
}
    `;
export function useTaskByPkQuery(baseOptions: Apollo.QueryHookOptions<ITaskByPkQuery, ITaskByPkQueryVariables>) {
        return Apollo.useQuery<ITaskByPkQuery, ITaskByPkQueryVariables>(TaskByPkQueryDocument, baseOptions);
      }
export function useTaskByPkQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ITaskByPkQuery, ITaskByPkQueryVariables>) {
          return Apollo.useLazyQuery<ITaskByPkQuery, ITaskByPkQueryVariables>(TaskByPkQueryDocument, baseOptions);
        }
export type TaskByPkQueryHookResult = ReturnType<typeof useTaskByPkQuery>;
export type TaskByPkQueryLazyQueryHookResult = ReturnType<typeof useTaskByPkQueryLazyQuery>;
export type TaskByPkQueryQueryResult = Apollo.QueryResult<ITaskByPkQuery, ITaskByPkQueryVariables>;
export const UserQueryDocument = /*#__PURE__*/ gql`
    query userQuery($distinctOn: [User_select_column!], $limit: Int, $offset: Int, $orderBy: [User_order_by!], $where: User_bool_exp, $userProjectsDistinctOn: [Project_select_column!], $userProjectsLimit: Int, $userProjectsOffset: Int, $userProjectsOrderBy: [Project_order_by!], $userProjectsWhere: Project_bool_exp, $userProjectsProjectsTasksDistinctOn: [Task_select_column!], $userProjectsProjectsTasksLimit: Int, $userProjectsProjectsTasksOffset: Int, $userProjectsProjectsTasksOrderBy: [Task_order_by!], $userProjectsProjectsTasksWhere: Task_bool_exp, $userProjectsProjectsTasksAggregateDistinctOn: [Task_select_column!], $userProjectsProjectsTasksAggregateLimit: Int, $userProjectsProjectsTasksAggregateOffset: Int, $userProjectsProjectsTasksAggregateOrderBy: [Task_order_by!], $userProjectsProjectsTasksAggregateWhere: Task_bool_exp, $userProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountColumns: [Task_select_column!], $userProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountDistinct: Boolean, $userProjectsAggregateDistinctOn: [Project_select_column!], $userProjectsAggregateLimit: Int, $userProjectsAggregateOffset: Int, $userProjectsAggregateOrderBy: [Project_order_by!], $userProjectsAggregateWhere: Project_bool_exp, $userProjectsAggregateProjectsAggregateAggregateAggregateCountColumns: [Project_select_column!], $userProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct: Boolean, $userProjectsAggregateProjectsAggregateNodesNodesTasksDistinctOn: [Task_select_column!], $userProjectsAggregateProjectsAggregateNodesNodesTasksLimit: Int, $userProjectsAggregateProjectsAggregateNodesNodesTasksOffset: Int, $userProjectsAggregateProjectsAggregateNodesNodesTasksOrderBy: [Task_order_by!], $userProjectsAggregateProjectsAggregateNodesNodesTasksWhere: Task_bool_exp, $includeUserProjects: Boolean! = false, $includeUserProjectsTasks: Boolean! = false, $includeUserProjectsTasksAggregate: Boolean! = false, $includeUserProjectsTasksAggregateAggregate: Boolean! = false, $includeUserProjectsTasksAggregateNodes: Boolean! = false, $includeUserProjectsAggregate: Boolean! = false, $includeUserProjectsAggregateAggregate: Boolean! = false, $includeUserProjectsAggregateAggregateAvg: Boolean! = false, $includeUserProjectsAggregateAggregateMax: Boolean! = false, $includeUserProjectsAggregateAggregateMin: Boolean! = false, $includeUserProjectsAggregateAggregateStddev: Boolean! = false, $includeUserProjectsAggregateAggregateStddevPop: Boolean! = false, $includeUserProjectsAggregateAggregateStddevSamp: Boolean! = false, $includeUserProjectsAggregateAggregateSum: Boolean! = false, $includeUserProjectsAggregateAggregateVarPop: Boolean! = false, $includeUserProjectsAggregateAggregateVarSamp: Boolean! = false, $includeUserProjectsAggregateAggregateVariance: Boolean! = false, $includeUserProjectsAggregateNodes: Boolean! = false, $includeUserProjectsAggregateNodesTasks: Boolean! = false) {
  User(
    distinct_on: $distinctOn
    limit: $limit
    offset: $offset
    order_by: $orderBy
    where: $where
  ) {
    Projects(
      distinct_on: $userProjectsDistinctOn
      limit: $userProjectsLimit
      offset: $userProjectsOffset
      order_by: $userProjectsOrderBy
      where: $userProjectsWhere
    ) @include(if: $includeUserProjects) {
      Tasks(
        distinct_on: $userProjectsProjectsTasksDistinctOn
        limit: $userProjectsProjectsTasksLimit
        offset: $userProjectsProjectsTasksOffset
        order_by: $userProjectsProjectsTasksOrderBy
        where: $userProjectsProjectsTasksWhere
      ) @include(if: $includeUserProjectsTasks) {
        id
        name
        project_id
      }
      Tasks_aggregate(
        distinct_on: $userProjectsProjectsTasksAggregateDistinctOn
        limit: $userProjectsProjectsTasksAggregateLimit
        offset: $userProjectsProjectsTasksAggregateOffset
        order_by: $userProjectsProjectsTasksAggregateOrderBy
        where: $userProjectsProjectsTasksAggregateWhere
      ) @include(if: $includeUserProjectsTasksAggregate) {
        aggregate @include(if: $includeUserProjectsTasksAggregateAggregate) {
          count(
            columns: $userProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountColumns
            distinct: $userProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountDistinct
          )
        }
        nodes @include(if: $includeUserProjectsTasksAggregateNodes) {
          id
          name
          project_id
        }
      }
      id
      name
      user_id
    }
    Projects_aggregate(
      distinct_on: $userProjectsAggregateDistinctOn
      limit: $userProjectsAggregateLimit
      offset: $userProjectsAggregateOffset
      order_by: $userProjectsAggregateOrderBy
      where: $userProjectsAggregateWhere
    ) @include(if: $includeUserProjectsAggregate) {
      aggregate @include(if: $includeUserProjectsAggregateAggregate) {
        avg @include(if: $includeUserProjectsAggregateAggregateAvg) {
          id
          user_id
        }
        count(
          columns: $userProjectsAggregateProjectsAggregateAggregateAggregateCountColumns
          distinct: $userProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct
        )
        max @include(if: $includeUserProjectsAggregateAggregateMax) {
          id
          name
          user_id
        }
        min @include(if: $includeUserProjectsAggregateAggregateMin) {
          id
          name
          user_id
        }
        stddev @include(if: $includeUserProjectsAggregateAggregateStddev) {
          id
          user_id
        }
        stddev_pop @include(if: $includeUserProjectsAggregateAggregateStddevPop) {
          id
          user_id
        }
        stddev_samp @include(if: $includeUserProjectsAggregateAggregateStddevSamp) {
          id
          user_id
        }
        sum @include(if: $includeUserProjectsAggregateAggregateSum) {
          id
          user_id
        }
        var_pop @include(if: $includeUserProjectsAggregateAggregateVarPop) {
          id
          user_id
        }
        var_samp @include(if: $includeUserProjectsAggregateAggregateVarSamp) {
          id
          user_id
        }
        variance @include(if: $includeUserProjectsAggregateAggregateVariance) {
          id
          user_id
        }
      }
      nodes @include(if: $includeUserProjectsAggregateNodes) {
        Tasks(
          distinct_on: $userProjectsAggregateProjectsAggregateNodesNodesTasksDistinctOn
          limit: $userProjectsAggregateProjectsAggregateNodesNodesTasksLimit
          offset: $userProjectsAggregateProjectsAggregateNodesNodesTasksOffset
          order_by: $userProjectsAggregateProjectsAggregateNodesNodesTasksOrderBy
          where: $userProjectsAggregateProjectsAggregateNodesNodesTasksWhere
        ) @include(if: $includeUserProjectsAggregateNodesTasks) {
          id
          name
          project_id
        }
        id
        name
        user_id
      }
    }
    id
    name
  }
}
    `;
export function useUserQuery(baseOptions?: Apollo.QueryHookOptions<IUserQuery, IUserQueryVariables>) {
        return Apollo.useQuery<IUserQuery, IUserQueryVariables>(UserQueryDocument, baseOptions);
      }
export function useUserQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IUserQuery, IUserQueryVariables>) {
          return Apollo.useLazyQuery<IUserQuery, IUserQueryVariables>(UserQueryDocument, baseOptions);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserQueryLazyQueryHookResult = ReturnType<typeof useUserQueryLazyQuery>;
export type UserQueryQueryResult = Apollo.QueryResult<IUserQuery, IUserQueryVariables>;
export const UserAggregateQueryDocument = /*#__PURE__*/ gql`
    query userAggregateQuery($distinctOn: [User_select_column!], $limit: Int, $offset: Int, $orderBy: [User_order_by!], $where: User_bool_exp, $userAggregateAggregateAggregateCountColumns: [User_select_column!], $userAggregateAggregateAggregateCountDistinct: Boolean, $userAggregateNodesNodesProjectsDistinctOn: [Project_select_column!], $userAggregateNodesNodesProjectsLimit: Int, $userAggregateNodesNodesProjectsOffset: Int, $userAggregateNodesNodesProjectsOrderBy: [Project_order_by!], $userAggregateNodesNodesProjectsWhere: Project_bool_exp, $userAggregateNodesNodesProjectsProjectsTasksDistinctOn: [Task_select_column!], $userAggregateNodesNodesProjectsProjectsTasksLimit: Int, $userAggregateNodesNodesProjectsProjectsTasksOffset: Int, $userAggregateNodesNodesProjectsProjectsTasksOrderBy: [Task_order_by!], $userAggregateNodesNodesProjectsProjectsTasksWhere: Task_bool_exp, $userAggregateNodesNodesProjectsAggregateDistinctOn: [Project_select_column!], $userAggregateNodesNodesProjectsAggregateLimit: Int, $userAggregateNodesNodesProjectsAggregateOffset: Int, $userAggregateNodesNodesProjectsAggregateOrderBy: [Project_order_by!], $userAggregateNodesNodesProjectsAggregateWhere: Project_bool_exp, $userAggregateNodesNodesProjectsAggregateProjectsAggregateAggregateAggregateCountColumns: [Project_select_column!], $userAggregateNodesNodesProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct: Boolean, $includeUserAggregateAggregate: Boolean! = false, $includeUserAggregateAggregateAvg: Boolean! = false, $includeUserAggregateAggregateMax: Boolean! = false, $includeUserAggregateAggregateMin: Boolean! = false, $includeUserAggregateAggregateStddev: Boolean! = false, $includeUserAggregateAggregateStddevPop: Boolean! = false, $includeUserAggregateAggregateStddevSamp: Boolean! = false, $includeUserAggregateAggregateSum: Boolean! = false, $includeUserAggregateAggregateVarPop: Boolean! = false, $includeUserAggregateAggregateVarSamp: Boolean! = false, $includeUserAggregateAggregateVariance: Boolean! = false, $includeUserAggregateNodes: Boolean! = false, $includeUserAggregateNodesProjects: Boolean! = false, $includeUserAggregateNodesProjectsTasks: Boolean! = false, $includeUserAggregateNodesProjectsAggregate: Boolean! = false, $includeUserAggregateNodesProjectsAggregateAggregate: Boolean! = false, $includeUserAggregateNodesProjectsAggregateNodes: Boolean! = false) {
  User_aggregate(
    distinct_on: $distinctOn
    limit: $limit
    offset: $offset
    order_by: $orderBy
    where: $where
  ) {
    aggregate @include(if: $includeUserAggregateAggregate) {
      avg @include(if: $includeUserAggregateAggregateAvg) {
        id
      }
      count(
        columns: $userAggregateAggregateAggregateCountColumns
        distinct: $userAggregateAggregateAggregateCountDistinct
      )
      max @include(if: $includeUserAggregateAggregateMax) {
        id
        name
      }
      min @include(if: $includeUserAggregateAggregateMin) {
        id
        name
      }
      stddev @include(if: $includeUserAggregateAggregateStddev) {
        id
      }
      stddev_pop @include(if: $includeUserAggregateAggregateStddevPop) {
        id
      }
      stddev_samp @include(if: $includeUserAggregateAggregateStddevSamp) {
        id
      }
      sum @include(if: $includeUserAggregateAggregateSum) {
        id
      }
      var_pop @include(if: $includeUserAggregateAggregateVarPop) {
        id
      }
      var_samp @include(if: $includeUserAggregateAggregateVarSamp) {
        id
      }
      variance @include(if: $includeUserAggregateAggregateVariance) {
        id
      }
    }
    nodes @include(if: $includeUserAggregateNodes) {
      Projects(
        distinct_on: $userAggregateNodesNodesProjectsDistinctOn
        limit: $userAggregateNodesNodesProjectsLimit
        offset: $userAggregateNodesNodesProjectsOffset
        order_by: $userAggregateNodesNodesProjectsOrderBy
        where: $userAggregateNodesNodesProjectsWhere
      ) @include(if: $includeUserAggregateNodesProjects) {
        Tasks(
          distinct_on: $userAggregateNodesNodesProjectsProjectsTasksDistinctOn
          limit: $userAggregateNodesNodesProjectsProjectsTasksLimit
          offset: $userAggregateNodesNodesProjectsProjectsTasksOffset
          order_by: $userAggregateNodesNodesProjectsProjectsTasksOrderBy
          where: $userAggregateNodesNodesProjectsProjectsTasksWhere
        ) @include(if: $includeUserAggregateNodesProjectsTasks) {
          id
          name
          project_id
        }
        id
        name
        user_id
      }
      Projects_aggregate(
        distinct_on: $userAggregateNodesNodesProjectsAggregateDistinctOn
        limit: $userAggregateNodesNodesProjectsAggregateLimit
        offset: $userAggregateNodesNodesProjectsAggregateOffset
        order_by: $userAggregateNodesNodesProjectsAggregateOrderBy
        where: $userAggregateNodesNodesProjectsAggregateWhere
      ) @include(if: $includeUserAggregateNodesProjectsAggregate) {
        aggregate @include(if: $includeUserAggregateNodesProjectsAggregateAggregate) {
          count(
            columns: $userAggregateNodesNodesProjectsAggregateProjectsAggregateAggregateAggregateCountColumns
            distinct: $userAggregateNodesNodesProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct
          )
        }
        nodes @include(if: $includeUserAggregateNodesProjectsAggregateNodes) {
          id
          name
          user_id
        }
      }
      id
      name
    }
  }
}
    `;
export function useUserAggregateQuery(baseOptions?: Apollo.QueryHookOptions<IUserAggregateQuery, IUserAggregateQueryVariables>) {
        return Apollo.useQuery<IUserAggregateQuery, IUserAggregateQueryVariables>(UserAggregateQueryDocument, baseOptions);
      }
export function useUserAggregateQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IUserAggregateQuery, IUserAggregateQueryVariables>) {
          return Apollo.useLazyQuery<IUserAggregateQuery, IUserAggregateQueryVariables>(UserAggregateQueryDocument, baseOptions);
        }
export type UserAggregateQueryHookResult = ReturnType<typeof useUserAggregateQuery>;
export type UserAggregateQueryLazyQueryHookResult = ReturnType<typeof useUserAggregateQueryLazyQuery>;
export type UserAggregateQueryQueryResult = Apollo.QueryResult<IUserAggregateQuery, IUserAggregateQueryVariables>;
export const UserByPkQueryDocument = /*#__PURE__*/ gql`
    query userByPkQuery($id: Int!, $userByPkProjectsDistinctOn: [Project_select_column!], $userByPkProjectsLimit: Int, $userByPkProjectsOffset: Int, $userByPkProjectsOrderBy: [Project_order_by!], $userByPkProjectsWhere: Project_bool_exp, $userByPkProjectsProjectsTasksDistinctOn: [Task_select_column!], $userByPkProjectsProjectsTasksLimit: Int, $userByPkProjectsProjectsTasksOffset: Int, $userByPkProjectsProjectsTasksOrderBy: [Task_order_by!], $userByPkProjectsProjectsTasksWhere: Task_bool_exp, $userByPkProjectsProjectsTasksAggregateDistinctOn: [Task_select_column!], $userByPkProjectsProjectsTasksAggregateLimit: Int, $userByPkProjectsProjectsTasksAggregateOffset: Int, $userByPkProjectsProjectsTasksAggregateOrderBy: [Task_order_by!], $userByPkProjectsProjectsTasksAggregateWhere: Task_bool_exp, $userByPkProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountColumns: [Task_select_column!], $userByPkProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountDistinct: Boolean, $userByPkProjectsAggregateDistinctOn: [Project_select_column!], $userByPkProjectsAggregateLimit: Int, $userByPkProjectsAggregateOffset: Int, $userByPkProjectsAggregateOrderBy: [Project_order_by!], $userByPkProjectsAggregateWhere: Project_bool_exp, $userByPkProjectsAggregateProjectsAggregateAggregateAggregateCountColumns: [Project_select_column!], $userByPkProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct: Boolean, $userByPkProjectsAggregateProjectsAggregateNodesNodesTasksDistinctOn: [Task_select_column!], $userByPkProjectsAggregateProjectsAggregateNodesNodesTasksLimit: Int, $userByPkProjectsAggregateProjectsAggregateNodesNodesTasksOffset: Int, $userByPkProjectsAggregateProjectsAggregateNodesNodesTasksOrderBy: [Task_order_by!], $userByPkProjectsAggregateProjectsAggregateNodesNodesTasksWhere: Task_bool_exp, $includeUserByPkProjects: Boolean! = false, $includeUserByPkProjectsTasks: Boolean! = false, $includeUserByPkProjectsTasksAggregate: Boolean! = false, $includeUserByPkProjectsTasksAggregateAggregate: Boolean! = false, $includeUserByPkProjectsTasksAggregateNodes: Boolean! = false, $includeUserByPkProjectsAggregate: Boolean! = false, $includeUserByPkProjectsAggregateAggregate: Boolean! = false, $includeUserByPkProjectsAggregateAggregateAvg: Boolean! = false, $includeUserByPkProjectsAggregateAggregateMax: Boolean! = false, $includeUserByPkProjectsAggregateAggregateMin: Boolean! = false, $includeUserByPkProjectsAggregateAggregateStddev: Boolean! = false, $includeUserByPkProjectsAggregateAggregateStddevPop: Boolean! = false, $includeUserByPkProjectsAggregateAggregateStddevSamp: Boolean! = false, $includeUserByPkProjectsAggregateAggregateSum: Boolean! = false, $includeUserByPkProjectsAggregateAggregateVarPop: Boolean! = false, $includeUserByPkProjectsAggregateAggregateVarSamp: Boolean! = false, $includeUserByPkProjectsAggregateAggregateVariance: Boolean! = false, $includeUserByPkProjectsAggregateNodes: Boolean! = false, $includeUserByPkProjectsAggregateNodesTasks: Boolean! = false) {
  User_by_pk(id: $id) {
    Projects(
      distinct_on: $userByPkProjectsDistinctOn
      limit: $userByPkProjectsLimit
      offset: $userByPkProjectsOffset
      order_by: $userByPkProjectsOrderBy
      where: $userByPkProjectsWhere
    ) @include(if: $includeUserByPkProjects) {
      Tasks(
        distinct_on: $userByPkProjectsProjectsTasksDistinctOn
        limit: $userByPkProjectsProjectsTasksLimit
        offset: $userByPkProjectsProjectsTasksOffset
        order_by: $userByPkProjectsProjectsTasksOrderBy
        where: $userByPkProjectsProjectsTasksWhere
      ) @include(if: $includeUserByPkProjectsTasks) {
        id
        name
        project_id
      }
      Tasks_aggregate(
        distinct_on: $userByPkProjectsProjectsTasksAggregateDistinctOn
        limit: $userByPkProjectsProjectsTasksAggregateLimit
        offset: $userByPkProjectsProjectsTasksAggregateOffset
        order_by: $userByPkProjectsProjectsTasksAggregateOrderBy
        where: $userByPkProjectsProjectsTasksAggregateWhere
      ) @include(if: $includeUserByPkProjectsTasksAggregate) {
        aggregate @include(if: $includeUserByPkProjectsTasksAggregateAggregate) {
          count(
            columns: $userByPkProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountColumns
            distinct: $userByPkProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountDistinct
          )
        }
        nodes @include(if: $includeUserByPkProjectsTasksAggregateNodes) {
          id
          name
          project_id
        }
      }
      id
      name
      user_id
    }
    Projects_aggregate(
      distinct_on: $userByPkProjectsAggregateDistinctOn
      limit: $userByPkProjectsAggregateLimit
      offset: $userByPkProjectsAggregateOffset
      order_by: $userByPkProjectsAggregateOrderBy
      where: $userByPkProjectsAggregateWhere
    ) @include(if: $includeUserByPkProjectsAggregate) {
      aggregate @include(if: $includeUserByPkProjectsAggregateAggregate) {
        avg @include(if: $includeUserByPkProjectsAggregateAggregateAvg) {
          id
          user_id
        }
        count(
          columns: $userByPkProjectsAggregateProjectsAggregateAggregateAggregateCountColumns
          distinct: $userByPkProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct
        )
        max @include(if: $includeUserByPkProjectsAggregateAggregateMax) {
          id
          name
          user_id
        }
        min @include(if: $includeUserByPkProjectsAggregateAggregateMin) {
          id
          name
          user_id
        }
        stddev @include(if: $includeUserByPkProjectsAggregateAggregateStddev) {
          id
          user_id
        }
        stddev_pop @include(if: $includeUserByPkProjectsAggregateAggregateStddevPop) {
          id
          user_id
        }
        stddev_samp @include(if: $includeUserByPkProjectsAggregateAggregateStddevSamp) {
          id
          user_id
        }
        sum @include(if: $includeUserByPkProjectsAggregateAggregateSum) {
          id
          user_id
        }
        var_pop @include(if: $includeUserByPkProjectsAggregateAggregateVarPop) {
          id
          user_id
        }
        var_samp @include(if: $includeUserByPkProjectsAggregateAggregateVarSamp) {
          id
          user_id
        }
        variance @include(if: $includeUserByPkProjectsAggregateAggregateVariance) {
          id
          user_id
        }
      }
      nodes @include(if: $includeUserByPkProjectsAggregateNodes) {
        Tasks(
          distinct_on: $userByPkProjectsAggregateProjectsAggregateNodesNodesTasksDistinctOn
          limit: $userByPkProjectsAggregateProjectsAggregateNodesNodesTasksLimit
          offset: $userByPkProjectsAggregateProjectsAggregateNodesNodesTasksOffset
          order_by: $userByPkProjectsAggregateProjectsAggregateNodesNodesTasksOrderBy
          where: $userByPkProjectsAggregateProjectsAggregateNodesNodesTasksWhere
        ) @include(if: $includeUserByPkProjectsAggregateNodesTasks) {
          id
          name
          project_id
        }
        id
        name
        user_id
      }
    }
    id
    name
  }
}
    `;
export function useUserByPkQuery(baseOptions: Apollo.QueryHookOptions<IUserByPkQuery, IUserByPkQueryVariables>) {
        return Apollo.useQuery<IUserByPkQuery, IUserByPkQueryVariables>(UserByPkQueryDocument, baseOptions);
      }
export function useUserByPkQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IUserByPkQuery, IUserByPkQueryVariables>) {
          return Apollo.useLazyQuery<IUserByPkQuery, IUserByPkQueryVariables>(UserByPkQueryDocument, baseOptions);
        }
export type UserByPkQueryHookResult = ReturnType<typeof useUserByPkQuery>;
export type UserByPkQueryLazyQueryHookResult = ReturnType<typeof useUserByPkQueryLazyQuery>;
export type UserByPkQueryQueryResult = Apollo.QueryResult<IUserByPkQuery, IUserByPkQueryVariables>;
export const DeleteProjectMutationDocument = /*#__PURE__*/ gql`
    mutation deleteProjectMutation($where: Project_bool_exp!, $deleteProjectReturningReturningTasksDistinctOn: [Task_select_column!], $deleteProjectReturningReturningTasksLimit: Int, $deleteProjectReturningReturningTasksOffset: Int, $deleteProjectReturningReturningTasksOrderBy: [Task_order_by!], $deleteProjectReturningReturningTasksWhere: Task_bool_exp, $deleteProjectReturningReturningTasksAggregateDistinctOn: [Task_select_column!], $deleteProjectReturningReturningTasksAggregateLimit: Int, $deleteProjectReturningReturningTasksAggregateOffset: Int, $deleteProjectReturningReturningTasksAggregateOrderBy: [Task_order_by!], $deleteProjectReturningReturningTasksAggregateWhere: Task_bool_exp, $deleteProjectReturningReturningTasksAggregateTasksAggregateAggregateAggregateCountColumns: [Task_select_column!], $deleteProjectReturningReturningTasksAggregateTasksAggregateAggregateAggregateCountDistinct: Boolean, $includeDeleteProjectReturning: Boolean! = false, $includeDeleteProjectReturningTasks: Boolean! = false, $includeDeleteProjectReturningTasksAggregate: Boolean! = false, $includeDeleteProjectReturningTasksAggregateAggregate: Boolean! = false, $includeDeleteProjectReturningTasksAggregateNodes: Boolean! = false, $includeDeleteProjectReturningUser: Boolean! = false) {
  delete_Project(where: $where) {
    affected_rows
    returning @include(if: $includeDeleteProjectReturning) {
      Tasks(
        distinct_on: $deleteProjectReturningReturningTasksDistinctOn
        limit: $deleteProjectReturningReturningTasksLimit
        offset: $deleteProjectReturningReturningTasksOffset
        order_by: $deleteProjectReturningReturningTasksOrderBy
        where: $deleteProjectReturningReturningTasksWhere
      ) @include(if: $includeDeleteProjectReturningTasks) {
        id
        name
        project_id
      }
      Tasks_aggregate(
        distinct_on: $deleteProjectReturningReturningTasksAggregateDistinctOn
        limit: $deleteProjectReturningReturningTasksAggregateLimit
        offset: $deleteProjectReturningReturningTasksAggregateOffset
        order_by: $deleteProjectReturningReturningTasksAggregateOrderBy
        where: $deleteProjectReturningReturningTasksAggregateWhere
      ) @include(if: $includeDeleteProjectReturningTasksAggregate) {
        aggregate @include(if: $includeDeleteProjectReturningTasksAggregateAggregate) {
          count(
            columns: $deleteProjectReturningReturningTasksAggregateTasksAggregateAggregateAggregateCountColumns
            distinct: $deleteProjectReturningReturningTasksAggregateTasksAggregateAggregateAggregateCountDistinct
          )
        }
        nodes @include(if: $includeDeleteProjectReturningTasksAggregateNodes) {
          id
          name
          project_id
        }
      }
      User @include(if: $includeDeleteProjectReturningUser) {
        id
        name
      }
      id
      name
      user_id
    }
  }
}
    `;
export type IDeleteProjectMutationMutationFn = Apollo.MutationFunction<IDeleteProjectMutation, IDeleteProjectMutationVariables>;
export function useDeleteProjectMutation(baseOptions?: Apollo.MutationHookOptions<IDeleteProjectMutation, IDeleteProjectMutationVariables>) {
        return Apollo.useMutation<IDeleteProjectMutation, IDeleteProjectMutationVariables>(DeleteProjectMutationDocument, baseOptions);
      }
export type DeleteProjectMutationHookResult = ReturnType<typeof useDeleteProjectMutation>;
export type DeleteProjectMutationMutationResult = Apollo.MutationResult<IDeleteProjectMutation>;
export type DeleteProjectMutationMutationOptions = Apollo.BaseMutationOptions<IDeleteProjectMutation, IDeleteProjectMutationVariables>;
export const DeleteProjectByPkMutationDocument = /*#__PURE__*/ gql`
    mutation deleteProjectByPkMutation($id: Int!, $deleteProjectByPkTasksDistinctOn: [Task_select_column!], $deleteProjectByPkTasksLimit: Int, $deleteProjectByPkTasksOffset: Int, $deleteProjectByPkTasksOrderBy: [Task_order_by!], $deleteProjectByPkTasksWhere: Task_bool_exp, $deleteProjectByPkTasksAggregateDistinctOn: [Task_select_column!], $deleteProjectByPkTasksAggregateLimit: Int, $deleteProjectByPkTasksAggregateOffset: Int, $deleteProjectByPkTasksAggregateOrderBy: [Task_order_by!], $deleteProjectByPkTasksAggregateWhere: Task_bool_exp, $deleteProjectByPkTasksAggregateTasksAggregateAggregateAggregateCountColumns: [Task_select_column!], $deleteProjectByPkTasksAggregateTasksAggregateAggregateAggregateCountDistinct: Boolean, $deleteProjectByPkUserUserProjectsAggregateDistinctOn: [Project_select_column!], $deleteProjectByPkUserUserProjectsAggregateLimit: Int, $deleteProjectByPkUserUserProjectsAggregateOffset: Int, $deleteProjectByPkUserUserProjectsAggregateOrderBy: [Project_order_by!], $deleteProjectByPkUserUserProjectsAggregateWhere: Project_bool_exp, $deleteProjectByPkUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountColumns: [Project_select_column!], $deleteProjectByPkUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct: Boolean, $includeDeleteProjectByPkTasks: Boolean! = false, $includeDeleteProjectByPkTasksAggregate: Boolean! = false, $includeDeleteProjectByPkTasksAggregateAggregate: Boolean! = false, $includeDeleteProjectByPkTasksAggregateAggregateAvg: Boolean! = false, $includeDeleteProjectByPkTasksAggregateAggregateMax: Boolean! = false, $includeDeleteProjectByPkTasksAggregateAggregateMin: Boolean! = false, $includeDeleteProjectByPkTasksAggregateAggregateStddev: Boolean! = false, $includeDeleteProjectByPkTasksAggregateAggregateStddevPop: Boolean! = false, $includeDeleteProjectByPkTasksAggregateAggregateStddevSamp: Boolean! = false, $includeDeleteProjectByPkTasksAggregateAggregateSum: Boolean! = false, $includeDeleteProjectByPkTasksAggregateAggregateVarPop: Boolean! = false, $includeDeleteProjectByPkTasksAggregateAggregateVarSamp: Boolean! = false, $includeDeleteProjectByPkTasksAggregateAggregateVariance: Boolean! = false, $includeDeleteProjectByPkTasksAggregateNodes: Boolean! = false, $includeDeleteProjectByPkUser: Boolean! = false, $includeDeleteProjectByPkUserProjectsAggregate: Boolean! = false, $includeDeleteProjectByPkUserProjectsAggregateAggregate: Boolean! = false) {
  delete_Project_by_pk(id: $id) {
    Tasks(
      distinct_on: $deleteProjectByPkTasksDistinctOn
      limit: $deleteProjectByPkTasksLimit
      offset: $deleteProjectByPkTasksOffset
      order_by: $deleteProjectByPkTasksOrderBy
      where: $deleteProjectByPkTasksWhere
    ) @include(if: $includeDeleteProjectByPkTasks) {
      id
      name
      project_id
    }
    Tasks_aggregate(
      distinct_on: $deleteProjectByPkTasksAggregateDistinctOn
      limit: $deleteProjectByPkTasksAggregateLimit
      offset: $deleteProjectByPkTasksAggregateOffset
      order_by: $deleteProjectByPkTasksAggregateOrderBy
      where: $deleteProjectByPkTasksAggregateWhere
    ) @include(if: $includeDeleteProjectByPkTasksAggregate) {
      aggregate @include(if: $includeDeleteProjectByPkTasksAggregateAggregate) {
        avg @include(if: $includeDeleteProjectByPkTasksAggregateAggregateAvg) {
          id
          project_id
        }
        count(
          columns: $deleteProjectByPkTasksAggregateTasksAggregateAggregateAggregateCountColumns
          distinct: $deleteProjectByPkTasksAggregateTasksAggregateAggregateAggregateCountDistinct
        )
        max @include(if: $includeDeleteProjectByPkTasksAggregateAggregateMax) {
          id
          name
          project_id
        }
        min @include(if: $includeDeleteProjectByPkTasksAggregateAggregateMin) {
          id
          name
          project_id
        }
        stddev @include(if: $includeDeleteProjectByPkTasksAggregateAggregateStddev) {
          id
          project_id
        }
        stddev_pop @include(if: $includeDeleteProjectByPkTasksAggregateAggregateStddevPop) {
          id
          project_id
        }
        stddev_samp @include(if: $includeDeleteProjectByPkTasksAggregateAggregateStddevSamp) {
          id
          project_id
        }
        sum @include(if: $includeDeleteProjectByPkTasksAggregateAggregateSum) {
          id
          project_id
        }
        var_pop @include(if: $includeDeleteProjectByPkTasksAggregateAggregateVarPop) {
          id
          project_id
        }
        var_samp @include(if: $includeDeleteProjectByPkTasksAggregateAggregateVarSamp) {
          id
          project_id
        }
        variance @include(if: $includeDeleteProjectByPkTasksAggregateAggregateVariance) {
          id
          project_id
        }
      }
      nodes @include(if: $includeDeleteProjectByPkTasksAggregateNodes) {
        id
        name
        project_id
      }
    }
    User @include(if: $includeDeleteProjectByPkUser) {
      Projects_aggregate(
        distinct_on: $deleteProjectByPkUserUserProjectsAggregateDistinctOn
        limit: $deleteProjectByPkUserUserProjectsAggregateLimit
        offset: $deleteProjectByPkUserUserProjectsAggregateOffset
        order_by: $deleteProjectByPkUserUserProjectsAggregateOrderBy
        where: $deleteProjectByPkUserUserProjectsAggregateWhere
      ) @include(if: $includeDeleteProjectByPkUserProjectsAggregate) {
        aggregate @include(if: $includeDeleteProjectByPkUserProjectsAggregateAggregate) {
          count(
            columns: $deleteProjectByPkUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountColumns
            distinct: $deleteProjectByPkUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct
          )
        }
      }
      id
      name
    }
    id
    name
    user_id
  }
}
    `;
export type IDeleteProjectByPkMutationMutationFn = Apollo.MutationFunction<IDeleteProjectByPkMutation, IDeleteProjectByPkMutationVariables>;
export function useDeleteProjectByPkMutation(baseOptions?: Apollo.MutationHookOptions<IDeleteProjectByPkMutation, IDeleteProjectByPkMutationVariables>) {
        return Apollo.useMutation<IDeleteProjectByPkMutation, IDeleteProjectByPkMutationVariables>(DeleteProjectByPkMutationDocument, baseOptions);
      }
export type DeleteProjectByPkMutationHookResult = ReturnType<typeof useDeleteProjectByPkMutation>;
export type DeleteProjectByPkMutationMutationResult = Apollo.MutationResult<IDeleteProjectByPkMutation>;
export type DeleteProjectByPkMutationMutationOptions = Apollo.BaseMutationOptions<IDeleteProjectByPkMutation, IDeleteProjectByPkMutationVariables>;
export const DeleteTaskMutationDocument = /*#__PURE__*/ gql`
    mutation deleteTaskMutation($where: Task_bool_exp!, $includeDeleteTaskReturning: Boolean! = false, $includeDeleteTaskReturningProject: Boolean! = false, $includeDeleteTaskReturningProjectUser: Boolean! = false) {
  delete_Task(where: $where) {
    affected_rows
    returning @include(if: $includeDeleteTaskReturning) {
      Project @include(if: $includeDeleteTaskReturningProject) {
        User @include(if: $includeDeleteTaskReturningProjectUser) {
          id
          name
        }
        id
        name
        user_id
      }
      id
      name
      project_id
    }
  }
}
    `;
export type IDeleteTaskMutationMutationFn = Apollo.MutationFunction<IDeleteTaskMutation, IDeleteTaskMutationVariables>;
export function useDeleteTaskMutation(baseOptions?: Apollo.MutationHookOptions<IDeleteTaskMutation, IDeleteTaskMutationVariables>) {
        return Apollo.useMutation<IDeleteTaskMutation, IDeleteTaskMutationVariables>(DeleteTaskMutationDocument, baseOptions);
      }
export type DeleteTaskMutationHookResult = ReturnType<typeof useDeleteTaskMutation>;
export type DeleteTaskMutationMutationResult = Apollo.MutationResult<IDeleteTaskMutation>;
export type DeleteTaskMutationMutationOptions = Apollo.BaseMutationOptions<IDeleteTaskMutation, IDeleteTaskMutationVariables>;
export const DeleteTaskByPkMutationDocument = /*#__PURE__*/ gql`
    mutation deleteTaskByPkMutation($id: Int!, $deleteTaskByPkProjectProjectTasksAggregateDistinctOn: [Task_select_column!], $deleteTaskByPkProjectProjectTasksAggregateLimit: Int, $deleteTaskByPkProjectProjectTasksAggregateOffset: Int, $deleteTaskByPkProjectProjectTasksAggregateOrderBy: [Task_order_by!], $deleteTaskByPkProjectProjectTasksAggregateWhere: Task_bool_exp, $deleteTaskByPkProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountColumns: [Task_select_column!], $deleteTaskByPkProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountDistinct: Boolean, $includeDeleteTaskByPkProject: Boolean! = false, $includeDeleteTaskByPkProjectTasksAggregate: Boolean! = false, $includeDeleteTaskByPkProjectTasksAggregateAggregate: Boolean! = false, $includeDeleteTaskByPkProjectUser: Boolean! = false) {
  delete_Task_by_pk(id: $id) {
    Project @include(if: $includeDeleteTaskByPkProject) {
      Tasks_aggregate(
        distinct_on: $deleteTaskByPkProjectProjectTasksAggregateDistinctOn
        limit: $deleteTaskByPkProjectProjectTasksAggregateLimit
        offset: $deleteTaskByPkProjectProjectTasksAggregateOffset
        order_by: $deleteTaskByPkProjectProjectTasksAggregateOrderBy
        where: $deleteTaskByPkProjectProjectTasksAggregateWhere
      ) @include(if: $includeDeleteTaskByPkProjectTasksAggregate) {
        aggregate @include(if: $includeDeleteTaskByPkProjectTasksAggregateAggregate) {
          count(
            columns: $deleteTaskByPkProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountColumns
            distinct: $deleteTaskByPkProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountDistinct
          )
        }
      }
      User @include(if: $includeDeleteTaskByPkProjectUser) {
        id
        name
      }
      id
      name
      user_id
    }
    id
    name
    project_id
  }
}
    `;
export type IDeleteTaskByPkMutationMutationFn = Apollo.MutationFunction<IDeleteTaskByPkMutation, IDeleteTaskByPkMutationVariables>;
export function useDeleteTaskByPkMutation(baseOptions?: Apollo.MutationHookOptions<IDeleteTaskByPkMutation, IDeleteTaskByPkMutationVariables>) {
        return Apollo.useMutation<IDeleteTaskByPkMutation, IDeleteTaskByPkMutationVariables>(DeleteTaskByPkMutationDocument, baseOptions);
      }
export type DeleteTaskByPkMutationHookResult = ReturnType<typeof useDeleteTaskByPkMutation>;
export type DeleteTaskByPkMutationMutationResult = Apollo.MutationResult<IDeleteTaskByPkMutation>;
export type DeleteTaskByPkMutationMutationOptions = Apollo.BaseMutationOptions<IDeleteTaskByPkMutation, IDeleteTaskByPkMutationVariables>;
export const DeleteUserMutationDocument = /*#__PURE__*/ gql`
    mutation deleteUserMutation($where: User_bool_exp!, $deleteUserReturningReturningProjectsDistinctOn: [Project_select_column!], $deleteUserReturningReturningProjectsLimit: Int, $deleteUserReturningReturningProjectsOffset: Int, $deleteUserReturningReturningProjectsOrderBy: [Project_order_by!], $deleteUserReturningReturningProjectsWhere: Project_bool_exp, $deleteUserReturningReturningProjectsProjectsTasksDistinctOn: [Task_select_column!], $deleteUserReturningReturningProjectsProjectsTasksLimit: Int, $deleteUserReturningReturningProjectsProjectsTasksOffset: Int, $deleteUserReturningReturningProjectsProjectsTasksOrderBy: [Task_order_by!], $deleteUserReturningReturningProjectsProjectsTasksWhere: Task_bool_exp, $deleteUserReturningReturningProjectsAggregateDistinctOn: [Project_select_column!], $deleteUserReturningReturningProjectsAggregateLimit: Int, $deleteUserReturningReturningProjectsAggregateOffset: Int, $deleteUserReturningReturningProjectsAggregateOrderBy: [Project_order_by!], $deleteUserReturningReturningProjectsAggregateWhere: Project_bool_exp, $deleteUserReturningReturningProjectsAggregateProjectsAggregateAggregateAggregateCountColumns: [Project_select_column!], $deleteUserReturningReturningProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct: Boolean, $includeDeleteUserReturning: Boolean! = false, $includeDeleteUserReturningProjects: Boolean! = false, $includeDeleteUserReturningProjectsTasks: Boolean! = false, $includeDeleteUserReturningProjectsAggregate: Boolean! = false, $includeDeleteUserReturningProjectsAggregateAggregate: Boolean! = false, $includeDeleteUserReturningProjectsAggregateNodes: Boolean! = false) {
  delete_User(where: $where) {
    affected_rows
    returning @include(if: $includeDeleteUserReturning) {
      Projects(
        distinct_on: $deleteUserReturningReturningProjectsDistinctOn
        limit: $deleteUserReturningReturningProjectsLimit
        offset: $deleteUserReturningReturningProjectsOffset
        order_by: $deleteUserReturningReturningProjectsOrderBy
        where: $deleteUserReturningReturningProjectsWhere
      ) @include(if: $includeDeleteUserReturningProjects) {
        Tasks(
          distinct_on: $deleteUserReturningReturningProjectsProjectsTasksDistinctOn
          limit: $deleteUserReturningReturningProjectsProjectsTasksLimit
          offset: $deleteUserReturningReturningProjectsProjectsTasksOffset
          order_by: $deleteUserReturningReturningProjectsProjectsTasksOrderBy
          where: $deleteUserReturningReturningProjectsProjectsTasksWhere
        ) @include(if: $includeDeleteUserReturningProjectsTasks) {
          id
          name
          project_id
        }
        id
        name
        user_id
      }
      Projects_aggregate(
        distinct_on: $deleteUserReturningReturningProjectsAggregateDistinctOn
        limit: $deleteUserReturningReturningProjectsAggregateLimit
        offset: $deleteUserReturningReturningProjectsAggregateOffset
        order_by: $deleteUserReturningReturningProjectsAggregateOrderBy
        where: $deleteUserReturningReturningProjectsAggregateWhere
      ) @include(if: $includeDeleteUserReturningProjectsAggregate) {
        aggregate @include(if: $includeDeleteUserReturningProjectsAggregateAggregate) {
          count(
            columns: $deleteUserReturningReturningProjectsAggregateProjectsAggregateAggregateAggregateCountColumns
            distinct: $deleteUserReturningReturningProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct
          )
        }
        nodes @include(if: $includeDeleteUserReturningProjectsAggregateNodes) {
          id
          name
          user_id
        }
      }
      id
      name
    }
  }
}
    `;
export type IDeleteUserMutationMutationFn = Apollo.MutationFunction<IDeleteUserMutation, IDeleteUserMutationVariables>;
export function useDeleteUserMutation(baseOptions?: Apollo.MutationHookOptions<IDeleteUserMutation, IDeleteUserMutationVariables>) {
        return Apollo.useMutation<IDeleteUserMutation, IDeleteUserMutationVariables>(DeleteUserMutationDocument, baseOptions);
      }
export type DeleteUserMutationHookResult = ReturnType<typeof useDeleteUserMutation>;
export type DeleteUserMutationMutationResult = Apollo.MutationResult<IDeleteUserMutation>;
export type DeleteUserMutationMutationOptions = Apollo.BaseMutationOptions<IDeleteUserMutation, IDeleteUserMutationVariables>;
export const DeleteUserByPkMutationDocument = /*#__PURE__*/ gql`
    mutation deleteUserByPkMutation($id: Int!, $deleteUserByPkProjectsDistinctOn: [Project_select_column!], $deleteUserByPkProjectsLimit: Int, $deleteUserByPkProjectsOffset: Int, $deleteUserByPkProjectsOrderBy: [Project_order_by!], $deleteUserByPkProjectsWhere: Project_bool_exp, $deleteUserByPkProjectsProjectsTasksDistinctOn: [Task_select_column!], $deleteUserByPkProjectsProjectsTasksLimit: Int, $deleteUserByPkProjectsProjectsTasksOffset: Int, $deleteUserByPkProjectsProjectsTasksOrderBy: [Task_order_by!], $deleteUserByPkProjectsProjectsTasksWhere: Task_bool_exp, $deleteUserByPkProjectsProjectsTasksAggregateDistinctOn: [Task_select_column!], $deleteUserByPkProjectsProjectsTasksAggregateLimit: Int, $deleteUserByPkProjectsProjectsTasksAggregateOffset: Int, $deleteUserByPkProjectsProjectsTasksAggregateOrderBy: [Task_order_by!], $deleteUserByPkProjectsProjectsTasksAggregateWhere: Task_bool_exp, $deleteUserByPkProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountColumns: [Task_select_column!], $deleteUserByPkProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountDistinct: Boolean, $deleteUserByPkProjectsAggregateDistinctOn: [Project_select_column!], $deleteUserByPkProjectsAggregateLimit: Int, $deleteUserByPkProjectsAggregateOffset: Int, $deleteUserByPkProjectsAggregateOrderBy: [Project_order_by!], $deleteUserByPkProjectsAggregateWhere: Project_bool_exp, $deleteUserByPkProjectsAggregateProjectsAggregateAggregateAggregateCountColumns: [Project_select_column!], $deleteUserByPkProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct: Boolean, $deleteUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksDistinctOn: [Task_select_column!], $deleteUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksLimit: Int, $deleteUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksOffset: Int, $deleteUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksOrderBy: [Task_order_by!], $deleteUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksWhere: Task_bool_exp, $includeDeleteUserByPkProjects: Boolean! = false, $includeDeleteUserByPkProjectsTasks: Boolean! = false, $includeDeleteUserByPkProjectsTasksAggregate: Boolean! = false, $includeDeleteUserByPkProjectsTasksAggregateAggregate: Boolean! = false, $includeDeleteUserByPkProjectsTasksAggregateNodes: Boolean! = false, $includeDeleteUserByPkProjectsAggregate: Boolean! = false, $includeDeleteUserByPkProjectsAggregateAggregate: Boolean! = false, $includeDeleteUserByPkProjectsAggregateAggregateAvg: Boolean! = false, $includeDeleteUserByPkProjectsAggregateAggregateMax: Boolean! = false, $includeDeleteUserByPkProjectsAggregateAggregateMin: Boolean! = false, $includeDeleteUserByPkProjectsAggregateAggregateStddev: Boolean! = false, $includeDeleteUserByPkProjectsAggregateAggregateStddevPop: Boolean! = false, $includeDeleteUserByPkProjectsAggregateAggregateStddevSamp: Boolean! = false, $includeDeleteUserByPkProjectsAggregateAggregateSum: Boolean! = false, $includeDeleteUserByPkProjectsAggregateAggregateVarPop: Boolean! = false, $includeDeleteUserByPkProjectsAggregateAggregateVarSamp: Boolean! = false, $includeDeleteUserByPkProjectsAggregateAggregateVariance: Boolean! = false, $includeDeleteUserByPkProjectsAggregateNodes: Boolean! = false, $includeDeleteUserByPkProjectsAggregateNodesTasks: Boolean! = false) {
  delete_User_by_pk(id: $id) {
    Projects(
      distinct_on: $deleteUserByPkProjectsDistinctOn
      limit: $deleteUserByPkProjectsLimit
      offset: $deleteUserByPkProjectsOffset
      order_by: $deleteUserByPkProjectsOrderBy
      where: $deleteUserByPkProjectsWhere
    ) @include(if: $includeDeleteUserByPkProjects) {
      Tasks(
        distinct_on: $deleteUserByPkProjectsProjectsTasksDistinctOn
        limit: $deleteUserByPkProjectsProjectsTasksLimit
        offset: $deleteUserByPkProjectsProjectsTasksOffset
        order_by: $deleteUserByPkProjectsProjectsTasksOrderBy
        where: $deleteUserByPkProjectsProjectsTasksWhere
      ) @include(if: $includeDeleteUserByPkProjectsTasks) {
        id
        name
        project_id
      }
      Tasks_aggregate(
        distinct_on: $deleteUserByPkProjectsProjectsTasksAggregateDistinctOn
        limit: $deleteUserByPkProjectsProjectsTasksAggregateLimit
        offset: $deleteUserByPkProjectsProjectsTasksAggregateOffset
        order_by: $deleteUserByPkProjectsProjectsTasksAggregateOrderBy
        where: $deleteUserByPkProjectsProjectsTasksAggregateWhere
      ) @include(if: $includeDeleteUserByPkProjectsTasksAggregate) {
        aggregate @include(if: $includeDeleteUserByPkProjectsTasksAggregateAggregate) {
          count(
            columns: $deleteUserByPkProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountColumns
            distinct: $deleteUserByPkProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountDistinct
          )
        }
        nodes @include(if: $includeDeleteUserByPkProjectsTasksAggregateNodes) {
          id
          name
          project_id
        }
      }
      id
      name
      user_id
    }
    Projects_aggregate(
      distinct_on: $deleteUserByPkProjectsAggregateDistinctOn
      limit: $deleteUserByPkProjectsAggregateLimit
      offset: $deleteUserByPkProjectsAggregateOffset
      order_by: $deleteUserByPkProjectsAggregateOrderBy
      where: $deleteUserByPkProjectsAggregateWhere
    ) @include(if: $includeDeleteUserByPkProjectsAggregate) {
      aggregate @include(if: $includeDeleteUserByPkProjectsAggregateAggregate) {
        avg @include(if: $includeDeleteUserByPkProjectsAggregateAggregateAvg) {
          id
          user_id
        }
        count(
          columns: $deleteUserByPkProjectsAggregateProjectsAggregateAggregateAggregateCountColumns
          distinct: $deleteUserByPkProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct
        )
        max @include(if: $includeDeleteUserByPkProjectsAggregateAggregateMax) {
          id
          name
          user_id
        }
        min @include(if: $includeDeleteUserByPkProjectsAggregateAggregateMin) {
          id
          name
          user_id
        }
        stddev @include(if: $includeDeleteUserByPkProjectsAggregateAggregateStddev) {
          id
          user_id
        }
        stddev_pop @include(if: $includeDeleteUserByPkProjectsAggregateAggregateStddevPop) {
          id
          user_id
        }
        stddev_samp @include(if: $includeDeleteUserByPkProjectsAggregateAggregateStddevSamp) {
          id
          user_id
        }
        sum @include(if: $includeDeleteUserByPkProjectsAggregateAggregateSum) {
          id
          user_id
        }
        var_pop @include(if: $includeDeleteUserByPkProjectsAggregateAggregateVarPop) {
          id
          user_id
        }
        var_samp @include(if: $includeDeleteUserByPkProjectsAggregateAggregateVarSamp) {
          id
          user_id
        }
        variance @include(if: $includeDeleteUserByPkProjectsAggregateAggregateVariance) {
          id
          user_id
        }
      }
      nodes @include(if: $includeDeleteUserByPkProjectsAggregateNodes) {
        Tasks(
          distinct_on: $deleteUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksDistinctOn
          limit: $deleteUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksLimit
          offset: $deleteUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksOffset
          order_by: $deleteUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksOrderBy
          where: $deleteUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksWhere
        ) @include(if: $includeDeleteUserByPkProjectsAggregateNodesTasks) {
          id
          name
          project_id
        }
        id
        name
        user_id
      }
    }
    id
    name
  }
}
    `;
export type IDeleteUserByPkMutationMutationFn = Apollo.MutationFunction<IDeleteUserByPkMutation, IDeleteUserByPkMutationVariables>;
export function useDeleteUserByPkMutation(baseOptions?: Apollo.MutationHookOptions<IDeleteUserByPkMutation, IDeleteUserByPkMutationVariables>) {
        return Apollo.useMutation<IDeleteUserByPkMutation, IDeleteUserByPkMutationVariables>(DeleteUserByPkMutationDocument, baseOptions);
      }
export type DeleteUserByPkMutationHookResult = ReturnType<typeof useDeleteUserByPkMutation>;
export type DeleteUserByPkMutationMutationResult = Apollo.MutationResult<IDeleteUserByPkMutation>;
export type DeleteUserByPkMutationMutationOptions = Apollo.BaseMutationOptions<IDeleteUserByPkMutation, IDeleteUserByPkMutationVariables>;
export const InsertProjectMutationDocument = /*#__PURE__*/ gql`
    mutation insertProjectMutation($objects: [Project_insert_input!]!, $onConflict: Project_on_conflict, $insertProjectReturningReturningTasksDistinctOn: [Task_select_column!], $insertProjectReturningReturningTasksLimit: Int, $insertProjectReturningReturningTasksOffset: Int, $insertProjectReturningReturningTasksOrderBy: [Task_order_by!], $insertProjectReturningReturningTasksWhere: Task_bool_exp, $insertProjectReturningReturningTasksAggregateDistinctOn: [Task_select_column!], $insertProjectReturningReturningTasksAggregateLimit: Int, $insertProjectReturningReturningTasksAggregateOffset: Int, $insertProjectReturningReturningTasksAggregateOrderBy: [Task_order_by!], $insertProjectReturningReturningTasksAggregateWhere: Task_bool_exp, $insertProjectReturningReturningTasksAggregateTasksAggregateAggregateAggregateCountColumns: [Task_select_column!], $insertProjectReturningReturningTasksAggregateTasksAggregateAggregateAggregateCountDistinct: Boolean, $includeInsertProjectReturning: Boolean! = false, $includeInsertProjectReturningTasks: Boolean! = false, $includeInsertProjectReturningTasksAggregate: Boolean! = false, $includeInsertProjectReturningTasksAggregateAggregate: Boolean! = false, $includeInsertProjectReturningTasksAggregateNodes: Boolean! = false, $includeInsertProjectReturningUser: Boolean! = false) {
  insert_Project(objects: $objects, on_conflict: $onConflict) {
    affected_rows
    returning @include(if: $includeInsertProjectReturning) {
      Tasks(
        distinct_on: $insertProjectReturningReturningTasksDistinctOn
        limit: $insertProjectReturningReturningTasksLimit
        offset: $insertProjectReturningReturningTasksOffset
        order_by: $insertProjectReturningReturningTasksOrderBy
        where: $insertProjectReturningReturningTasksWhere
      ) @include(if: $includeInsertProjectReturningTasks) {
        id
        name
        project_id
      }
      Tasks_aggregate(
        distinct_on: $insertProjectReturningReturningTasksAggregateDistinctOn
        limit: $insertProjectReturningReturningTasksAggregateLimit
        offset: $insertProjectReturningReturningTasksAggregateOffset
        order_by: $insertProjectReturningReturningTasksAggregateOrderBy
        where: $insertProjectReturningReturningTasksAggregateWhere
      ) @include(if: $includeInsertProjectReturningTasksAggregate) {
        aggregate @include(if: $includeInsertProjectReturningTasksAggregateAggregate) {
          count(
            columns: $insertProjectReturningReturningTasksAggregateTasksAggregateAggregateAggregateCountColumns
            distinct: $insertProjectReturningReturningTasksAggregateTasksAggregateAggregateAggregateCountDistinct
          )
        }
        nodes @include(if: $includeInsertProjectReturningTasksAggregateNodes) {
          id
          name
          project_id
        }
      }
      User @include(if: $includeInsertProjectReturningUser) {
        id
        name
      }
      id
      name
      user_id
    }
  }
}
    `;
export type IInsertProjectMutationMutationFn = Apollo.MutationFunction<IInsertProjectMutation, IInsertProjectMutationVariables>;
export function useInsertProjectMutation(baseOptions?: Apollo.MutationHookOptions<IInsertProjectMutation, IInsertProjectMutationVariables>) {
        return Apollo.useMutation<IInsertProjectMutation, IInsertProjectMutationVariables>(InsertProjectMutationDocument, baseOptions);
      }
export type InsertProjectMutationHookResult = ReturnType<typeof useInsertProjectMutation>;
export type InsertProjectMutationMutationResult = Apollo.MutationResult<IInsertProjectMutation>;
export type InsertProjectMutationMutationOptions = Apollo.BaseMutationOptions<IInsertProjectMutation, IInsertProjectMutationVariables>;
export const InsertProjectOneMutationDocument = /*#__PURE__*/ gql`
    mutation insertProjectOneMutation($object: Project_insert_input!, $onConflict: Project_on_conflict, $insertProjectOneTasksDistinctOn: [Task_select_column!], $insertProjectOneTasksLimit: Int, $insertProjectOneTasksOffset: Int, $insertProjectOneTasksOrderBy: [Task_order_by!], $insertProjectOneTasksWhere: Task_bool_exp, $insertProjectOneTasksAggregateDistinctOn: [Task_select_column!], $insertProjectOneTasksAggregateLimit: Int, $insertProjectOneTasksAggregateOffset: Int, $insertProjectOneTasksAggregateOrderBy: [Task_order_by!], $insertProjectOneTasksAggregateWhere: Task_bool_exp, $insertProjectOneTasksAggregateTasksAggregateAggregateAggregateCountColumns: [Task_select_column!], $insertProjectOneTasksAggregateTasksAggregateAggregateAggregateCountDistinct: Boolean, $insertProjectOneUserUserProjectsAggregateDistinctOn: [Project_select_column!], $insertProjectOneUserUserProjectsAggregateLimit: Int, $insertProjectOneUserUserProjectsAggregateOffset: Int, $insertProjectOneUserUserProjectsAggregateOrderBy: [Project_order_by!], $insertProjectOneUserUserProjectsAggregateWhere: Project_bool_exp, $insertProjectOneUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountColumns: [Project_select_column!], $insertProjectOneUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct: Boolean, $includeInsertProjectOneTasks: Boolean! = false, $includeInsertProjectOneTasksAggregate: Boolean! = false, $includeInsertProjectOneTasksAggregateAggregate: Boolean! = false, $includeInsertProjectOneTasksAggregateAggregateAvg: Boolean! = false, $includeInsertProjectOneTasksAggregateAggregateMax: Boolean! = false, $includeInsertProjectOneTasksAggregateAggregateMin: Boolean! = false, $includeInsertProjectOneTasksAggregateAggregateStddev: Boolean! = false, $includeInsertProjectOneTasksAggregateAggregateStddevPop: Boolean! = false, $includeInsertProjectOneTasksAggregateAggregateStddevSamp: Boolean! = false, $includeInsertProjectOneTasksAggregateAggregateSum: Boolean! = false, $includeInsertProjectOneTasksAggregateAggregateVarPop: Boolean! = false, $includeInsertProjectOneTasksAggregateAggregateVarSamp: Boolean! = false, $includeInsertProjectOneTasksAggregateAggregateVariance: Boolean! = false, $includeInsertProjectOneTasksAggregateNodes: Boolean! = false, $includeInsertProjectOneUser: Boolean! = false, $includeInsertProjectOneUserProjectsAggregate: Boolean! = false, $includeInsertProjectOneUserProjectsAggregateAggregate: Boolean! = false) {
  insert_Project_one(object: $object, on_conflict: $onConflict) {
    Tasks(
      distinct_on: $insertProjectOneTasksDistinctOn
      limit: $insertProjectOneTasksLimit
      offset: $insertProjectOneTasksOffset
      order_by: $insertProjectOneTasksOrderBy
      where: $insertProjectOneTasksWhere
    ) @include(if: $includeInsertProjectOneTasks) {
      id
      name
      project_id
    }
    Tasks_aggregate(
      distinct_on: $insertProjectOneTasksAggregateDistinctOn
      limit: $insertProjectOneTasksAggregateLimit
      offset: $insertProjectOneTasksAggregateOffset
      order_by: $insertProjectOneTasksAggregateOrderBy
      where: $insertProjectOneTasksAggregateWhere
    ) @include(if: $includeInsertProjectOneTasksAggregate) {
      aggregate @include(if: $includeInsertProjectOneTasksAggregateAggregate) {
        avg @include(if: $includeInsertProjectOneTasksAggregateAggregateAvg) {
          id
          project_id
        }
        count(
          columns: $insertProjectOneTasksAggregateTasksAggregateAggregateAggregateCountColumns
          distinct: $insertProjectOneTasksAggregateTasksAggregateAggregateAggregateCountDistinct
        )
        max @include(if: $includeInsertProjectOneTasksAggregateAggregateMax) {
          id
          name
          project_id
        }
        min @include(if: $includeInsertProjectOneTasksAggregateAggregateMin) {
          id
          name
          project_id
        }
        stddev @include(if: $includeInsertProjectOneTasksAggregateAggregateStddev) {
          id
          project_id
        }
        stddev_pop @include(if: $includeInsertProjectOneTasksAggregateAggregateStddevPop) {
          id
          project_id
        }
        stddev_samp @include(if: $includeInsertProjectOneTasksAggregateAggregateStddevSamp) {
          id
          project_id
        }
        sum @include(if: $includeInsertProjectOneTasksAggregateAggregateSum) {
          id
          project_id
        }
        var_pop @include(if: $includeInsertProjectOneTasksAggregateAggregateVarPop) {
          id
          project_id
        }
        var_samp @include(if: $includeInsertProjectOneTasksAggregateAggregateVarSamp) {
          id
          project_id
        }
        variance @include(if: $includeInsertProjectOneTasksAggregateAggregateVariance) {
          id
          project_id
        }
      }
      nodes @include(if: $includeInsertProjectOneTasksAggregateNodes) {
        id
        name
        project_id
      }
    }
    User @include(if: $includeInsertProjectOneUser) {
      Projects_aggregate(
        distinct_on: $insertProjectOneUserUserProjectsAggregateDistinctOn
        limit: $insertProjectOneUserUserProjectsAggregateLimit
        offset: $insertProjectOneUserUserProjectsAggregateOffset
        order_by: $insertProjectOneUserUserProjectsAggregateOrderBy
        where: $insertProjectOneUserUserProjectsAggregateWhere
      ) @include(if: $includeInsertProjectOneUserProjectsAggregate) {
        aggregate @include(if: $includeInsertProjectOneUserProjectsAggregateAggregate) {
          count(
            columns: $insertProjectOneUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountColumns
            distinct: $insertProjectOneUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct
          )
        }
      }
      id
      name
    }
    id
    name
    user_id
  }
}
    `;
export type IInsertProjectOneMutationMutationFn = Apollo.MutationFunction<IInsertProjectOneMutation, IInsertProjectOneMutationVariables>;
export function useInsertProjectOneMutation(baseOptions?: Apollo.MutationHookOptions<IInsertProjectOneMutation, IInsertProjectOneMutationVariables>) {
        return Apollo.useMutation<IInsertProjectOneMutation, IInsertProjectOneMutationVariables>(InsertProjectOneMutationDocument, baseOptions);
      }
export type InsertProjectOneMutationHookResult = ReturnType<typeof useInsertProjectOneMutation>;
export type InsertProjectOneMutationMutationResult = Apollo.MutationResult<IInsertProjectOneMutation>;
export type InsertProjectOneMutationMutationOptions = Apollo.BaseMutationOptions<IInsertProjectOneMutation, IInsertProjectOneMutationVariables>;
export const InsertTaskMutationDocument = /*#__PURE__*/ gql`
    mutation insertTaskMutation($objects: [Task_insert_input!]!, $onConflict: Task_on_conflict, $includeInsertTaskReturning: Boolean! = false, $includeInsertTaskReturningProject: Boolean! = false, $includeInsertTaskReturningProjectUser: Boolean! = false) {
  insert_Task(objects: $objects, on_conflict: $onConflict) {
    affected_rows
    returning @include(if: $includeInsertTaskReturning) {
      Project @include(if: $includeInsertTaskReturningProject) {
        User @include(if: $includeInsertTaskReturningProjectUser) {
          id
          name
        }
        id
        name
        user_id
      }
      id
      name
      project_id
    }
  }
}
    `;
export type IInsertTaskMutationMutationFn = Apollo.MutationFunction<IInsertTaskMutation, IInsertTaskMutationVariables>;
export function useInsertTaskMutation(baseOptions?: Apollo.MutationHookOptions<IInsertTaskMutation, IInsertTaskMutationVariables>) {
        return Apollo.useMutation<IInsertTaskMutation, IInsertTaskMutationVariables>(InsertTaskMutationDocument, baseOptions);
      }
export type InsertTaskMutationHookResult = ReturnType<typeof useInsertTaskMutation>;
export type InsertTaskMutationMutationResult = Apollo.MutationResult<IInsertTaskMutation>;
export type InsertTaskMutationMutationOptions = Apollo.BaseMutationOptions<IInsertTaskMutation, IInsertTaskMutationVariables>;
export const InsertTaskOneMutationDocument = /*#__PURE__*/ gql`
    mutation insertTaskOneMutation($object: Task_insert_input!, $onConflict: Task_on_conflict, $insertTaskOneProjectProjectTasksAggregateDistinctOn: [Task_select_column!], $insertTaskOneProjectProjectTasksAggregateLimit: Int, $insertTaskOneProjectProjectTasksAggregateOffset: Int, $insertTaskOneProjectProjectTasksAggregateOrderBy: [Task_order_by!], $insertTaskOneProjectProjectTasksAggregateWhere: Task_bool_exp, $insertTaskOneProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountColumns: [Task_select_column!], $insertTaskOneProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountDistinct: Boolean, $includeInsertTaskOneProject: Boolean! = false, $includeInsertTaskOneProjectTasksAggregate: Boolean! = false, $includeInsertTaskOneProjectTasksAggregateAggregate: Boolean! = false, $includeInsertTaskOneProjectUser: Boolean! = false) {
  insert_Task_one(object: $object, on_conflict: $onConflict) {
    Project @include(if: $includeInsertTaskOneProject) {
      Tasks_aggregate(
        distinct_on: $insertTaskOneProjectProjectTasksAggregateDistinctOn
        limit: $insertTaskOneProjectProjectTasksAggregateLimit
        offset: $insertTaskOneProjectProjectTasksAggregateOffset
        order_by: $insertTaskOneProjectProjectTasksAggregateOrderBy
        where: $insertTaskOneProjectProjectTasksAggregateWhere
      ) @include(if: $includeInsertTaskOneProjectTasksAggregate) {
        aggregate @include(if: $includeInsertTaskOneProjectTasksAggregateAggregate) {
          count(
            columns: $insertTaskOneProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountColumns
            distinct: $insertTaskOneProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountDistinct
          )
        }
      }
      User @include(if: $includeInsertTaskOneProjectUser) {
        id
        name
      }
      id
      name
      user_id
    }
    id
    name
    project_id
  }
}
    `;
export type IInsertTaskOneMutationMutationFn = Apollo.MutationFunction<IInsertTaskOneMutation, IInsertTaskOneMutationVariables>;
export function useInsertTaskOneMutation(baseOptions?: Apollo.MutationHookOptions<IInsertTaskOneMutation, IInsertTaskOneMutationVariables>) {
        return Apollo.useMutation<IInsertTaskOneMutation, IInsertTaskOneMutationVariables>(InsertTaskOneMutationDocument, baseOptions);
      }
export type InsertTaskOneMutationHookResult = ReturnType<typeof useInsertTaskOneMutation>;
export type InsertTaskOneMutationMutationResult = Apollo.MutationResult<IInsertTaskOneMutation>;
export type InsertTaskOneMutationMutationOptions = Apollo.BaseMutationOptions<IInsertTaskOneMutation, IInsertTaskOneMutationVariables>;
export const InsertUserMutationDocument = /*#__PURE__*/ gql`
    mutation insertUserMutation($objects: [User_insert_input!]!, $onConflict: User_on_conflict, $insertUserReturningReturningProjectsDistinctOn: [Project_select_column!], $insertUserReturningReturningProjectsLimit: Int, $insertUserReturningReturningProjectsOffset: Int, $insertUserReturningReturningProjectsOrderBy: [Project_order_by!], $insertUserReturningReturningProjectsWhere: Project_bool_exp, $insertUserReturningReturningProjectsProjectsTasksDistinctOn: [Task_select_column!], $insertUserReturningReturningProjectsProjectsTasksLimit: Int, $insertUserReturningReturningProjectsProjectsTasksOffset: Int, $insertUserReturningReturningProjectsProjectsTasksOrderBy: [Task_order_by!], $insertUserReturningReturningProjectsProjectsTasksWhere: Task_bool_exp, $insertUserReturningReturningProjectsAggregateDistinctOn: [Project_select_column!], $insertUserReturningReturningProjectsAggregateLimit: Int, $insertUserReturningReturningProjectsAggregateOffset: Int, $insertUserReturningReturningProjectsAggregateOrderBy: [Project_order_by!], $insertUserReturningReturningProjectsAggregateWhere: Project_bool_exp, $insertUserReturningReturningProjectsAggregateProjectsAggregateAggregateAggregateCountColumns: [Project_select_column!], $insertUserReturningReturningProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct: Boolean, $includeInsertUserReturning: Boolean! = false, $includeInsertUserReturningProjects: Boolean! = false, $includeInsertUserReturningProjectsTasks: Boolean! = false, $includeInsertUserReturningProjectsAggregate: Boolean! = false, $includeInsertUserReturningProjectsAggregateAggregate: Boolean! = false, $includeInsertUserReturningProjectsAggregateNodes: Boolean! = false) {
  insert_User(objects: $objects, on_conflict: $onConflict) {
    affected_rows
    returning @include(if: $includeInsertUserReturning) {
      Projects(
        distinct_on: $insertUserReturningReturningProjectsDistinctOn
        limit: $insertUserReturningReturningProjectsLimit
        offset: $insertUserReturningReturningProjectsOffset
        order_by: $insertUserReturningReturningProjectsOrderBy
        where: $insertUserReturningReturningProjectsWhere
      ) @include(if: $includeInsertUserReturningProjects) {
        Tasks(
          distinct_on: $insertUserReturningReturningProjectsProjectsTasksDistinctOn
          limit: $insertUserReturningReturningProjectsProjectsTasksLimit
          offset: $insertUserReturningReturningProjectsProjectsTasksOffset
          order_by: $insertUserReturningReturningProjectsProjectsTasksOrderBy
          where: $insertUserReturningReturningProjectsProjectsTasksWhere
        ) @include(if: $includeInsertUserReturningProjectsTasks) {
          id
          name
          project_id
        }
        id
        name
        user_id
      }
      Projects_aggregate(
        distinct_on: $insertUserReturningReturningProjectsAggregateDistinctOn
        limit: $insertUserReturningReturningProjectsAggregateLimit
        offset: $insertUserReturningReturningProjectsAggregateOffset
        order_by: $insertUserReturningReturningProjectsAggregateOrderBy
        where: $insertUserReturningReturningProjectsAggregateWhere
      ) @include(if: $includeInsertUserReturningProjectsAggregate) {
        aggregate @include(if: $includeInsertUserReturningProjectsAggregateAggregate) {
          count(
            columns: $insertUserReturningReturningProjectsAggregateProjectsAggregateAggregateAggregateCountColumns
            distinct: $insertUserReturningReturningProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct
          )
        }
        nodes @include(if: $includeInsertUserReturningProjectsAggregateNodes) {
          id
          name
          user_id
        }
      }
      id
      name
    }
  }
}
    `;
export type IInsertUserMutationMutationFn = Apollo.MutationFunction<IInsertUserMutation, IInsertUserMutationVariables>;
export function useInsertUserMutation(baseOptions?: Apollo.MutationHookOptions<IInsertUserMutation, IInsertUserMutationVariables>) {
        return Apollo.useMutation<IInsertUserMutation, IInsertUserMutationVariables>(InsertUserMutationDocument, baseOptions);
      }
export type InsertUserMutationHookResult = ReturnType<typeof useInsertUserMutation>;
export type InsertUserMutationMutationResult = Apollo.MutationResult<IInsertUserMutation>;
export type InsertUserMutationMutationOptions = Apollo.BaseMutationOptions<IInsertUserMutation, IInsertUserMutationVariables>;
export const InsertUserOneMutationDocument = /*#__PURE__*/ gql`
    mutation insertUserOneMutation($object: User_insert_input!, $onConflict: User_on_conflict, $insertUserOneProjectsDistinctOn: [Project_select_column!], $insertUserOneProjectsLimit: Int, $insertUserOneProjectsOffset: Int, $insertUserOneProjectsOrderBy: [Project_order_by!], $insertUserOneProjectsWhere: Project_bool_exp, $insertUserOneProjectsProjectsTasksDistinctOn: [Task_select_column!], $insertUserOneProjectsProjectsTasksLimit: Int, $insertUserOneProjectsProjectsTasksOffset: Int, $insertUserOneProjectsProjectsTasksOrderBy: [Task_order_by!], $insertUserOneProjectsProjectsTasksWhere: Task_bool_exp, $insertUserOneProjectsProjectsTasksAggregateDistinctOn: [Task_select_column!], $insertUserOneProjectsProjectsTasksAggregateLimit: Int, $insertUserOneProjectsProjectsTasksAggregateOffset: Int, $insertUserOneProjectsProjectsTasksAggregateOrderBy: [Task_order_by!], $insertUserOneProjectsProjectsTasksAggregateWhere: Task_bool_exp, $insertUserOneProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountColumns: [Task_select_column!], $insertUserOneProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountDistinct: Boolean, $insertUserOneProjectsAggregateDistinctOn: [Project_select_column!], $insertUserOneProjectsAggregateLimit: Int, $insertUserOneProjectsAggregateOffset: Int, $insertUserOneProjectsAggregateOrderBy: [Project_order_by!], $insertUserOneProjectsAggregateWhere: Project_bool_exp, $insertUserOneProjectsAggregateProjectsAggregateAggregateAggregateCountColumns: [Project_select_column!], $insertUserOneProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct: Boolean, $insertUserOneProjectsAggregateProjectsAggregateNodesNodesTasksDistinctOn: [Task_select_column!], $insertUserOneProjectsAggregateProjectsAggregateNodesNodesTasksLimit: Int, $insertUserOneProjectsAggregateProjectsAggregateNodesNodesTasksOffset: Int, $insertUserOneProjectsAggregateProjectsAggregateNodesNodesTasksOrderBy: [Task_order_by!], $insertUserOneProjectsAggregateProjectsAggregateNodesNodesTasksWhere: Task_bool_exp, $includeInsertUserOneProjects: Boolean! = false, $includeInsertUserOneProjectsTasks: Boolean! = false, $includeInsertUserOneProjectsTasksAggregate: Boolean! = false, $includeInsertUserOneProjectsTasksAggregateAggregate: Boolean! = false, $includeInsertUserOneProjectsTasksAggregateNodes: Boolean! = false, $includeInsertUserOneProjectsAggregate: Boolean! = false, $includeInsertUserOneProjectsAggregateAggregate: Boolean! = false, $includeInsertUserOneProjectsAggregateAggregateAvg: Boolean! = false, $includeInsertUserOneProjectsAggregateAggregateMax: Boolean! = false, $includeInsertUserOneProjectsAggregateAggregateMin: Boolean! = false, $includeInsertUserOneProjectsAggregateAggregateStddev: Boolean! = false, $includeInsertUserOneProjectsAggregateAggregateStddevPop: Boolean! = false, $includeInsertUserOneProjectsAggregateAggregateStddevSamp: Boolean! = false, $includeInsertUserOneProjectsAggregateAggregateSum: Boolean! = false, $includeInsertUserOneProjectsAggregateAggregateVarPop: Boolean! = false, $includeInsertUserOneProjectsAggregateAggregateVarSamp: Boolean! = false, $includeInsertUserOneProjectsAggregateAggregateVariance: Boolean! = false, $includeInsertUserOneProjectsAggregateNodes: Boolean! = false, $includeInsertUserOneProjectsAggregateNodesTasks: Boolean! = false) {
  insert_User_one(object: $object, on_conflict: $onConflict) {
    Projects(
      distinct_on: $insertUserOneProjectsDistinctOn
      limit: $insertUserOneProjectsLimit
      offset: $insertUserOneProjectsOffset
      order_by: $insertUserOneProjectsOrderBy
      where: $insertUserOneProjectsWhere
    ) @include(if: $includeInsertUserOneProjects) {
      Tasks(
        distinct_on: $insertUserOneProjectsProjectsTasksDistinctOn
        limit: $insertUserOneProjectsProjectsTasksLimit
        offset: $insertUserOneProjectsProjectsTasksOffset
        order_by: $insertUserOneProjectsProjectsTasksOrderBy
        where: $insertUserOneProjectsProjectsTasksWhere
      ) @include(if: $includeInsertUserOneProjectsTasks) {
        id
        name
        project_id
      }
      Tasks_aggregate(
        distinct_on: $insertUserOneProjectsProjectsTasksAggregateDistinctOn
        limit: $insertUserOneProjectsProjectsTasksAggregateLimit
        offset: $insertUserOneProjectsProjectsTasksAggregateOffset
        order_by: $insertUserOneProjectsProjectsTasksAggregateOrderBy
        where: $insertUserOneProjectsProjectsTasksAggregateWhere
      ) @include(if: $includeInsertUserOneProjectsTasksAggregate) {
        aggregate @include(if: $includeInsertUserOneProjectsTasksAggregateAggregate) {
          count(
            columns: $insertUserOneProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountColumns
            distinct: $insertUserOneProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountDistinct
          )
        }
        nodes @include(if: $includeInsertUserOneProjectsTasksAggregateNodes) {
          id
          name
          project_id
        }
      }
      id
      name
      user_id
    }
    Projects_aggregate(
      distinct_on: $insertUserOneProjectsAggregateDistinctOn
      limit: $insertUserOneProjectsAggregateLimit
      offset: $insertUserOneProjectsAggregateOffset
      order_by: $insertUserOneProjectsAggregateOrderBy
      where: $insertUserOneProjectsAggregateWhere
    ) @include(if: $includeInsertUserOneProjectsAggregate) {
      aggregate @include(if: $includeInsertUserOneProjectsAggregateAggregate) {
        avg @include(if: $includeInsertUserOneProjectsAggregateAggregateAvg) {
          id
          user_id
        }
        count(
          columns: $insertUserOneProjectsAggregateProjectsAggregateAggregateAggregateCountColumns
          distinct: $insertUserOneProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct
        )
        max @include(if: $includeInsertUserOneProjectsAggregateAggregateMax) {
          id
          name
          user_id
        }
        min @include(if: $includeInsertUserOneProjectsAggregateAggregateMin) {
          id
          name
          user_id
        }
        stddev @include(if: $includeInsertUserOneProjectsAggregateAggregateStddev) {
          id
          user_id
        }
        stddev_pop @include(if: $includeInsertUserOneProjectsAggregateAggregateStddevPop) {
          id
          user_id
        }
        stddev_samp @include(if: $includeInsertUserOneProjectsAggregateAggregateStddevSamp) {
          id
          user_id
        }
        sum @include(if: $includeInsertUserOneProjectsAggregateAggregateSum) {
          id
          user_id
        }
        var_pop @include(if: $includeInsertUserOneProjectsAggregateAggregateVarPop) {
          id
          user_id
        }
        var_samp @include(if: $includeInsertUserOneProjectsAggregateAggregateVarSamp) {
          id
          user_id
        }
        variance @include(if: $includeInsertUserOneProjectsAggregateAggregateVariance) {
          id
          user_id
        }
      }
      nodes @include(if: $includeInsertUserOneProjectsAggregateNodes) {
        Tasks(
          distinct_on: $insertUserOneProjectsAggregateProjectsAggregateNodesNodesTasksDistinctOn
          limit: $insertUserOneProjectsAggregateProjectsAggregateNodesNodesTasksLimit
          offset: $insertUserOneProjectsAggregateProjectsAggregateNodesNodesTasksOffset
          order_by: $insertUserOneProjectsAggregateProjectsAggregateNodesNodesTasksOrderBy
          where: $insertUserOneProjectsAggregateProjectsAggregateNodesNodesTasksWhere
        ) @include(if: $includeInsertUserOneProjectsAggregateNodesTasks) {
          id
          name
          project_id
        }
        id
        name
        user_id
      }
    }
    id
    name
  }
}
    `;
export type IInsertUserOneMutationMutationFn = Apollo.MutationFunction<IInsertUserOneMutation, IInsertUserOneMutationVariables>;
export function useInsertUserOneMutation(baseOptions?: Apollo.MutationHookOptions<IInsertUserOneMutation, IInsertUserOneMutationVariables>) {
        return Apollo.useMutation<IInsertUserOneMutation, IInsertUserOneMutationVariables>(InsertUserOneMutationDocument, baseOptions);
      }
export type InsertUserOneMutationHookResult = ReturnType<typeof useInsertUserOneMutation>;
export type InsertUserOneMutationMutationResult = Apollo.MutationResult<IInsertUserOneMutation>;
export type InsertUserOneMutationMutationOptions = Apollo.BaseMutationOptions<IInsertUserOneMutation, IInsertUserOneMutationVariables>;
export const UpdateProjectMutationDocument = /*#__PURE__*/ gql`
    mutation updateProjectMutation($inc: Project_inc_input, $set: Project_set_input, $where: Project_bool_exp!, $updateProjectReturningReturningTasksDistinctOn: [Task_select_column!], $updateProjectReturningReturningTasksLimit: Int, $updateProjectReturningReturningTasksOffset: Int, $updateProjectReturningReturningTasksOrderBy: [Task_order_by!], $updateProjectReturningReturningTasksWhere: Task_bool_exp, $updateProjectReturningReturningTasksAggregateDistinctOn: [Task_select_column!], $updateProjectReturningReturningTasksAggregateLimit: Int, $updateProjectReturningReturningTasksAggregateOffset: Int, $updateProjectReturningReturningTasksAggregateOrderBy: [Task_order_by!], $updateProjectReturningReturningTasksAggregateWhere: Task_bool_exp, $updateProjectReturningReturningTasksAggregateTasksAggregateAggregateAggregateCountColumns: [Task_select_column!], $updateProjectReturningReturningTasksAggregateTasksAggregateAggregateAggregateCountDistinct: Boolean, $includeUpdateProjectReturning: Boolean! = false, $includeUpdateProjectReturningTasks: Boolean! = false, $includeUpdateProjectReturningTasksAggregate: Boolean! = false, $includeUpdateProjectReturningTasksAggregateAggregate: Boolean! = false, $includeUpdateProjectReturningTasksAggregateNodes: Boolean! = false, $includeUpdateProjectReturningUser: Boolean! = false) {
  update_Project(_inc: $inc, _set: $set, where: $where) {
    affected_rows
    returning @include(if: $includeUpdateProjectReturning) {
      Tasks(
        distinct_on: $updateProjectReturningReturningTasksDistinctOn
        limit: $updateProjectReturningReturningTasksLimit
        offset: $updateProjectReturningReturningTasksOffset
        order_by: $updateProjectReturningReturningTasksOrderBy
        where: $updateProjectReturningReturningTasksWhere
      ) @include(if: $includeUpdateProjectReturningTasks) {
        id
        name
        project_id
      }
      Tasks_aggregate(
        distinct_on: $updateProjectReturningReturningTasksAggregateDistinctOn
        limit: $updateProjectReturningReturningTasksAggregateLimit
        offset: $updateProjectReturningReturningTasksAggregateOffset
        order_by: $updateProjectReturningReturningTasksAggregateOrderBy
        where: $updateProjectReturningReturningTasksAggregateWhere
      ) @include(if: $includeUpdateProjectReturningTasksAggregate) {
        aggregate @include(if: $includeUpdateProjectReturningTasksAggregateAggregate) {
          count(
            columns: $updateProjectReturningReturningTasksAggregateTasksAggregateAggregateAggregateCountColumns
            distinct: $updateProjectReturningReturningTasksAggregateTasksAggregateAggregateAggregateCountDistinct
          )
        }
        nodes @include(if: $includeUpdateProjectReturningTasksAggregateNodes) {
          id
          name
          project_id
        }
      }
      User @include(if: $includeUpdateProjectReturningUser) {
        id
        name
      }
      id
      name
      user_id
    }
  }
}
    `;
export type IUpdateProjectMutationMutationFn = Apollo.MutationFunction<IUpdateProjectMutation, IUpdateProjectMutationVariables>;
export function useUpdateProjectMutation(baseOptions?: Apollo.MutationHookOptions<IUpdateProjectMutation, IUpdateProjectMutationVariables>) {
        return Apollo.useMutation<IUpdateProjectMutation, IUpdateProjectMutationVariables>(UpdateProjectMutationDocument, baseOptions);
      }
export type UpdateProjectMutationHookResult = ReturnType<typeof useUpdateProjectMutation>;
export type UpdateProjectMutationMutationResult = Apollo.MutationResult<IUpdateProjectMutation>;
export type UpdateProjectMutationMutationOptions = Apollo.BaseMutationOptions<IUpdateProjectMutation, IUpdateProjectMutationVariables>;
export const UpdateProjectByPkMutationDocument = /*#__PURE__*/ gql`
    mutation updateProjectByPkMutation($inc: Project_inc_input, $set: Project_set_input, $pkColumns: Project_pk_columns_input!, $updateProjectByPkTasksDistinctOn: [Task_select_column!], $updateProjectByPkTasksLimit: Int, $updateProjectByPkTasksOffset: Int, $updateProjectByPkTasksOrderBy: [Task_order_by!], $updateProjectByPkTasksWhere: Task_bool_exp, $updateProjectByPkTasksAggregateDistinctOn: [Task_select_column!], $updateProjectByPkTasksAggregateLimit: Int, $updateProjectByPkTasksAggregateOffset: Int, $updateProjectByPkTasksAggregateOrderBy: [Task_order_by!], $updateProjectByPkTasksAggregateWhere: Task_bool_exp, $updateProjectByPkTasksAggregateTasksAggregateAggregateAggregateCountColumns: [Task_select_column!], $updateProjectByPkTasksAggregateTasksAggregateAggregateAggregateCountDistinct: Boolean, $updateProjectByPkUserUserProjectsAggregateDistinctOn: [Project_select_column!], $updateProjectByPkUserUserProjectsAggregateLimit: Int, $updateProjectByPkUserUserProjectsAggregateOffset: Int, $updateProjectByPkUserUserProjectsAggregateOrderBy: [Project_order_by!], $updateProjectByPkUserUserProjectsAggregateWhere: Project_bool_exp, $updateProjectByPkUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountColumns: [Project_select_column!], $updateProjectByPkUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct: Boolean, $includeUpdateProjectByPkTasks: Boolean! = false, $includeUpdateProjectByPkTasksAggregate: Boolean! = false, $includeUpdateProjectByPkTasksAggregateAggregate: Boolean! = false, $includeUpdateProjectByPkTasksAggregateAggregateAvg: Boolean! = false, $includeUpdateProjectByPkTasksAggregateAggregateMax: Boolean! = false, $includeUpdateProjectByPkTasksAggregateAggregateMin: Boolean! = false, $includeUpdateProjectByPkTasksAggregateAggregateStddev: Boolean! = false, $includeUpdateProjectByPkTasksAggregateAggregateStddevPop: Boolean! = false, $includeUpdateProjectByPkTasksAggregateAggregateStddevSamp: Boolean! = false, $includeUpdateProjectByPkTasksAggregateAggregateSum: Boolean! = false, $includeUpdateProjectByPkTasksAggregateAggregateVarPop: Boolean! = false, $includeUpdateProjectByPkTasksAggregateAggregateVarSamp: Boolean! = false, $includeUpdateProjectByPkTasksAggregateAggregateVariance: Boolean! = false, $includeUpdateProjectByPkTasksAggregateNodes: Boolean! = false, $includeUpdateProjectByPkUser: Boolean! = false, $includeUpdateProjectByPkUserProjectsAggregate: Boolean! = false, $includeUpdateProjectByPkUserProjectsAggregateAggregate: Boolean! = false) {
  update_Project_by_pk(_inc: $inc, _set: $set, pk_columns: $pkColumns) {
    Tasks(
      distinct_on: $updateProjectByPkTasksDistinctOn
      limit: $updateProjectByPkTasksLimit
      offset: $updateProjectByPkTasksOffset
      order_by: $updateProjectByPkTasksOrderBy
      where: $updateProjectByPkTasksWhere
    ) @include(if: $includeUpdateProjectByPkTasks) {
      id
      name
      project_id
    }
    Tasks_aggregate(
      distinct_on: $updateProjectByPkTasksAggregateDistinctOn
      limit: $updateProjectByPkTasksAggregateLimit
      offset: $updateProjectByPkTasksAggregateOffset
      order_by: $updateProjectByPkTasksAggregateOrderBy
      where: $updateProjectByPkTasksAggregateWhere
    ) @include(if: $includeUpdateProjectByPkTasksAggregate) {
      aggregate @include(if: $includeUpdateProjectByPkTasksAggregateAggregate) {
        avg @include(if: $includeUpdateProjectByPkTasksAggregateAggregateAvg) {
          id
          project_id
        }
        count(
          columns: $updateProjectByPkTasksAggregateTasksAggregateAggregateAggregateCountColumns
          distinct: $updateProjectByPkTasksAggregateTasksAggregateAggregateAggregateCountDistinct
        )
        max @include(if: $includeUpdateProjectByPkTasksAggregateAggregateMax) {
          id
          name
          project_id
        }
        min @include(if: $includeUpdateProjectByPkTasksAggregateAggregateMin) {
          id
          name
          project_id
        }
        stddev @include(if: $includeUpdateProjectByPkTasksAggregateAggregateStddev) {
          id
          project_id
        }
        stddev_pop @include(if: $includeUpdateProjectByPkTasksAggregateAggregateStddevPop) {
          id
          project_id
        }
        stddev_samp @include(if: $includeUpdateProjectByPkTasksAggregateAggregateStddevSamp) {
          id
          project_id
        }
        sum @include(if: $includeUpdateProjectByPkTasksAggregateAggregateSum) {
          id
          project_id
        }
        var_pop @include(if: $includeUpdateProjectByPkTasksAggregateAggregateVarPop) {
          id
          project_id
        }
        var_samp @include(if: $includeUpdateProjectByPkTasksAggregateAggregateVarSamp) {
          id
          project_id
        }
        variance @include(if: $includeUpdateProjectByPkTasksAggregateAggregateVariance) {
          id
          project_id
        }
      }
      nodes @include(if: $includeUpdateProjectByPkTasksAggregateNodes) {
        id
        name
        project_id
      }
    }
    User @include(if: $includeUpdateProjectByPkUser) {
      Projects_aggregate(
        distinct_on: $updateProjectByPkUserUserProjectsAggregateDistinctOn
        limit: $updateProjectByPkUserUserProjectsAggregateLimit
        offset: $updateProjectByPkUserUserProjectsAggregateOffset
        order_by: $updateProjectByPkUserUserProjectsAggregateOrderBy
        where: $updateProjectByPkUserUserProjectsAggregateWhere
      ) @include(if: $includeUpdateProjectByPkUserProjectsAggregate) {
        aggregate @include(if: $includeUpdateProjectByPkUserProjectsAggregateAggregate) {
          count(
            columns: $updateProjectByPkUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountColumns
            distinct: $updateProjectByPkUserUserProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct
          )
        }
      }
      id
      name
    }
    id
    name
    user_id
  }
}
    `;
export type IUpdateProjectByPkMutationMutationFn = Apollo.MutationFunction<IUpdateProjectByPkMutation, IUpdateProjectByPkMutationVariables>;
export function useUpdateProjectByPkMutation(baseOptions?: Apollo.MutationHookOptions<IUpdateProjectByPkMutation, IUpdateProjectByPkMutationVariables>) {
        return Apollo.useMutation<IUpdateProjectByPkMutation, IUpdateProjectByPkMutationVariables>(UpdateProjectByPkMutationDocument, baseOptions);
      }
export type UpdateProjectByPkMutationHookResult = ReturnType<typeof useUpdateProjectByPkMutation>;
export type UpdateProjectByPkMutationMutationResult = Apollo.MutationResult<IUpdateProjectByPkMutation>;
export type UpdateProjectByPkMutationMutationOptions = Apollo.BaseMutationOptions<IUpdateProjectByPkMutation, IUpdateProjectByPkMutationVariables>;
export const UpdateTaskMutationDocument = /*#__PURE__*/ gql`
    mutation updateTaskMutation($inc: Task_inc_input, $set: Task_set_input, $where: Task_bool_exp!, $includeUpdateTaskReturning: Boolean! = false, $includeUpdateTaskReturningProject: Boolean! = false, $includeUpdateTaskReturningProjectUser: Boolean! = false) {
  update_Task(_inc: $inc, _set: $set, where: $where) {
    affected_rows
    returning @include(if: $includeUpdateTaskReturning) {
      Project @include(if: $includeUpdateTaskReturningProject) {
        User @include(if: $includeUpdateTaskReturningProjectUser) {
          id
          name
        }
        id
        name
        user_id
      }
      id
      name
      project_id
    }
  }
}
    `;
export type IUpdateTaskMutationMutationFn = Apollo.MutationFunction<IUpdateTaskMutation, IUpdateTaskMutationVariables>;
export function useUpdateTaskMutation(baseOptions?: Apollo.MutationHookOptions<IUpdateTaskMutation, IUpdateTaskMutationVariables>) {
        return Apollo.useMutation<IUpdateTaskMutation, IUpdateTaskMutationVariables>(UpdateTaskMutationDocument, baseOptions);
      }
export type UpdateTaskMutationHookResult = ReturnType<typeof useUpdateTaskMutation>;
export type UpdateTaskMutationMutationResult = Apollo.MutationResult<IUpdateTaskMutation>;
export type UpdateTaskMutationMutationOptions = Apollo.BaseMutationOptions<IUpdateTaskMutation, IUpdateTaskMutationVariables>;
export const UpdateTaskByPkMutationDocument = /*#__PURE__*/ gql`
    mutation updateTaskByPkMutation($inc: Task_inc_input, $set: Task_set_input, $pkColumns: Task_pk_columns_input!, $updateTaskByPkProjectProjectTasksAggregateDistinctOn: [Task_select_column!], $updateTaskByPkProjectProjectTasksAggregateLimit: Int, $updateTaskByPkProjectProjectTasksAggregateOffset: Int, $updateTaskByPkProjectProjectTasksAggregateOrderBy: [Task_order_by!], $updateTaskByPkProjectProjectTasksAggregateWhere: Task_bool_exp, $updateTaskByPkProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountColumns: [Task_select_column!], $updateTaskByPkProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountDistinct: Boolean, $includeUpdateTaskByPkProject: Boolean! = false, $includeUpdateTaskByPkProjectTasksAggregate: Boolean! = false, $includeUpdateTaskByPkProjectTasksAggregateAggregate: Boolean! = false, $includeUpdateTaskByPkProjectUser: Boolean! = false) {
  update_Task_by_pk(_inc: $inc, _set: $set, pk_columns: $pkColumns) {
    Project @include(if: $includeUpdateTaskByPkProject) {
      Tasks_aggregate(
        distinct_on: $updateTaskByPkProjectProjectTasksAggregateDistinctOn
        limit: $updateTaskByPkProjectProjectTasksAggregateLimit
        offset: $updateTaskByPkProjectProjectTasksAggregateOffset
        order_by: $updateTaskByPkProjectProjectTasksAggregateOrderBy
        where: $updateTaskByPkProjectProjectTasksAggregateWhere
      ) @include(if: $includeUpdateTaskByPkProjectTasksAggregate) {
        aggregate @include(if: $includeUpdateTaskByPkProjectTasksAggregateAggregate) {
          count(
            columns: $updateTaskByPkProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountColumns
            distinct: $updateTaskByPkProjectProjectTasksAggregateTasksAggregateAggregateAggregateCountDistinct
          )
        }
      }
      User @include(if: $includeUpdateTaskByPkProjectUser) {
        id
        name
      }
      id
      name
      user_id
    }
    id
    name
    project_id
  }
}
    `;
export type IUpdateTaskByPkMutationMutationFn = Apollo.MutationFunction<IUpdateTaskByPkMutation, IUpdateTaskByPkMutationVariables>;
export function useUpdateTaskByPkMutation(baseOptions?: Apollo.MutationHookOptions<IUpdateTaskByPkMutation, IUpdateTaskByPkMutationVariables>) {
        return Apollo.useMutation<IUpdateTaskByPkMutation, IUpdateTaskByPkMutationVariables>(UpdateTaskByPkMutationDocument, baseOptions);
      }
export type UpdateTaskByPkMutationHookResult = ReturnType<typeof useUpdateTaskByPkMutation>;
export type UpdateTaskByPkMutationMutationResult = Apollo.MutationResult<IUpdateTaskByPkMutation>;
export type UpdateTaskByPkMutationMutationOptions = Apollo.BaseMutationOptions<IUpdateTaskByPkMutation, IUpdateTaskByPkMutationVariables>;
export const UpdateUserMutationDocument = /*#__PURE__*/ gql`
    mutation updateUserMutation($inc: User_inc_input, $set: User_set_input, $where: User_bool_exp!, $updateUserReturningReturningProjectsDistinctOn: [Project_select_column!], $updateUserReturningReturningProjectsLimit: Int, $updateUserReturningReturningProjectsOffset: Int, $updateUserReturningReturningProjectsOrderBy: [Project_order_by!], $updateUserReturningReturningProjectsWhere: Project_bool_exp, $updateUserReturningReturningProjectsProjectsTasksDistinctOn: [Task_select_column!], $updateUserReturningReturningProjectsProjectsTasksLimit: Int, $updateUserReturningReturningProjectsProjectsTasksOffset: Int, $updateUserReturningReturningProjectsProjectsTasksOrderBy: [Task_order_by!], $updateUserReturningReturningProjectsProjectsTasksWhere: Task_bool_exp, $updateUserReturningReturningProjectsAggregateDistinctOn: [Project_select_column!], $updateUserReturningReturningProjectsAggregateLimit: Int, $updateUserReturningReturningProjectsAggregateOffset: Int, $updateUserReturningReturningProjectsAggregateOrderBy: [Project_order_by!], $updateUserReturningReturningProjectsAggregateWhere: Project_bool_exp, $updateUserReturningReturningProjectsAggregateProjectsAggregateAggregateAggregateCountColumns: [Project_select_column!], $updateUserReturningReturningProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct: Boolean, $includeUpdateUserReturning: Boolean! = false, $includeUpdateUserReturningProjects: Boolean! = false, $includeUpdateUserReturningProjectsTasks: Boolean! = false, $includeUpdateUserReturningProjectsAggregate: Boolean! = false, $includeUpdateUserReturningProjectsAggregateAggregate: Boolean! = false, $includeUpdateUserReturningProjectsAggregateNodes: Boolean! = false) {
  update_User(_inc: $inc, _set: $set, where: $where) {
    affected_rows
    returning @include(if: $includeUpdateUserReturning) {
      Projects(
        distinct_on: $updateUserReturningReturningProjectsDistinctOn
        limit: $updateUserReturningReturningProjectsLimit
        offset: $updateUserReturningReturningProjectsOffset
        order_by: $updateUserReturningReturningProjectsOrderBy
        where: $updateUserReturningReturningProjectsWhere
      ) @include(if: $includeUpdateUserReturningProjects) {
        Tasks(
          distinct_on: $updateUserReturningReturningProjectsProjectsTasksDistinctOn
          limit: $updateUserReturningReturningProjectsProjectsTasksLimit
          offset: $updateUserReturningReturningProjectsProjectsTasksOffset
          order_by: $updateUserReturningReturningProjectsProjectsTasksOrderBy
          where: $updateUserReturningReturningProjectsProjectsTasksWhere
        ) @include(if: $includeUpdateUserReturningProjectsTasks) {
          id
          name
          project_id
        }
        id
        name
        user_id
      }
      Projects_aggregate(
        distinct_on: $updateUserReturningReturningProjectsAggregateDistinctOn
        limit: $updateUserReturningReturningProjectsAggregateLimit
        offset: $updateUserReturningReturningProjectsAggregateOffset
        order_by: $updateUserReturningReturningProjectsAggregateOrderBy
        where: $updateUserReturningReturningProjectsAggregateWhere
      ) @include(if: $includeUpdateUserReturningProjectsAggregate) {
        aggregate @include(if: $includeUpdateUserReturningProjectsAggregateAggregate) {
          count(
            columns: $updateUserReturningReturningProjectsAggregateProjectsAggregateAggregateAggregateCountColumns
            distinct: $updateUserReturningReturningProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct
          )
        }
        nodes @include(if: $includeUpdateUserReturningProjectsAggregateNodes) {
          id
          name
          user_id
        }
      }
      id
      name
    }
  }
}
    `;
export type IUpdateUserMutationMutationFn = Apollo.MutationFunction<IUpdateUserMutation, IUpdateUserMutationVariables>;
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<IUpdateUserMutation, IUpdateUserMutationVariables>) {
        return Apollo.useMutation<IUpdateUserMutation, IUpdateUserMutationVariables>(UpdateUserMutationDocument, baseOptions);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationMutationResult = Apollo.MutationResult<IUpdateUserMutation>;
export type UpdateUserMutationMutationOptions = Apollo.BaseMutationOptions<IUpdateUserMutation, IUpdateUserMutationVariables>;
export const UpdateUserByPkMutationDocument = /*#__PURE__*/ gql`
    mutation updateUserByPkMutation($inc: User_inc_input, $set: User_set_input, $pkColumns: User_pk_columns_input!, $updateUserByPkProjectsDistinctOn: [Project_select_column!], $updateUserByPkProjectsLimit: Int, $updateUserByPkProjectsOffset: Int, $updateUserByPkProjectsOrderBy: [Project_order_by!], $updateUserByPkProjectsWhere: Project_bool_exp, $updateUserByPkProjectsProjectsTasksDistinctOn: [Task_select_column!], $updateUserByPkProjectsProjectsTasksLimit: Int, $updateUserByPkProjectsProjectsTasksOffset: Int, $updateUserByPkProjectsProjectsTasksOrderBy: [Task_order_by!], $updateUserByPkProjectsProjectsTasksWhere: Task_bool_exp, $updateUserByPkProjectsProjectsTasksAggregateDistinctOn: [Task_select_column!], $updateUserByPkProjectsProjectsTasksAggregateLimit: Int, $updateUserByPkProjectsProjectsTasksAggregateOffset: Int, $updateUserByPkProjectsProjectsTasksAggregateOrderBy: [Task_order_by!], $updateUserByPkProjectsProjectsTasksAggregateWhere: Task_bool_exp, $updateUserByPkProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountColumns: [Task_select_column!], $updateUserByPkProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountDistinct: Boolean, $updateUserByPkProjectsAggregateDistinctOn: [Project_select_column!], $updateUserByPkProjectsAggregateLimit: Int, $updateUserByPkProjectsAggregateOffset: Int, $updateUserByPkProjectsAggregateOrderBy: [Project_order_by!], $updateUserByPkProjectsAggregateWhere: Project_bool_exp, $updateUserByPkProjectsAggregateProjectsAggregateAggregateAggregateCountColumns: [Project_select_column!], $updateUserByPkProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct: Boolean, $updateUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksDistinctOn: [Task_select_column!], $updateUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksLimit: Int, $updateUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksOffset: Int, $updateUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksOrderBy: [Task_order_by!], $updateUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksWhere: Task_bool_exp, $includeUpdateUserByPkProjects: Boolean! = false, $includeUpdateUserByPkProjectsTasks: Boolean! = false, $includeUpdateUserByPkProjectsTasksAggregate: Boolean! = false, $includeUpdateUserByPkProjectsTasksAggregateAggregate: Boolean! = false, $includeUpdateUserByPkProjectsTasksAggregateNodes: Boolean! = false, $includeUpdateUserByPkProjectsAggregate: Boolean! = false, $includeUpdateUserByPkProjectsAggregateAggregate: Boolean! = false, $includeUpdateUserByPkProjectsAggregateAggregateAvg: Boolean! = false, $includeUpdateUserByPkProjectsAggregateAggregateMax: Boolean! = false, $includeUpdateUserByPkProjectsAggregateAggregateMin: Boolean! = false, $includeUpdateUserByPkProjectsAggregateAggregateStddev: Boolean! = false, $includeUpdateUserByPkProjectsAggregateAggregateStddevPop: Boolean! = false, $includeUpdateUserByPkProjectsAggregateAggregateStddevSamp: Boolean! = false, $includeUpdateUserByPkProjectsAggregateAggregateSum: Boolean! = false, $includeUpdateUserByPkProjectsAggregateAggregateVarPop: Boolean! = false, $includeUpdateUserByPkProjectsAggregateAggregateVarSamp: Boolean! = false, $includeUpdateUserByPkProjectsAggregateAggregateVariance: Boolean! = false, $includeUpdateUserByPkProjectsAggregateNodes: Boolean! = false, $includeUpdateUserByPkProjectsAggregateNodesTasks: Boolean! = false) {
  update_User_by_pk(_inc: $inc, _set: $set, pk_columns: $pkColumns) {
    Projects(
      distinct_on: $updateUserByPkProjectsDistinctOn
      limit: $updateUserByPkProjectsLimit
      offset: $updateUserByPkProjectsOffset
      order_by: $updateUserByPkProjectsOrderBy
      where: $updateUserByPkProjectsWhere
    ) @include(if: $includeUpdateUserByPkProjects) {
      Tasks(
        distinct_on: $updateUserByPkProjectsProjectsTasksDistinctOn
        limit: $updateUserByPkProjectsProjectsTasksLimit
        offset: $updateUserByPkProjectsProjectsTasksOffset
        order_by: $updateUserByPkProjectsProjectsTasksOrderBy
        where: $updateUserByPkProjectsProjectsTasksWhere
      ) @include(if: $includeUpdateUserByPkProjectsTasks) {
        id
        name
        project_id
      }
      Tasks_aggregate(
        distinct_on: $updateUserByPkProjectsProjectsTasksAggregateDistinctOn
        limit: $updateUserByPkProjectsProjectsTasksAggregateLimit
        offset: $updateUserByPkProjectsProjectsTasksAggregateOffset
        order_by: $updateUserByPkProjectsProjectsTasksAggregateOrderBy
        where: $updateUserByPkProjectsProjectsTasksAggregateWhere
      ) @include(if: $includeUpdateUserByPkProjectsTasksAggregate) {
        aggregate @include(if: $includeUpdateUserByPkProjectsTasksAggregateAggregate) {
          count(
            columns: $updateUserByPkProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountColumns
            distinct: $updateUserByPkProjectsProjectsTasksAggregateTasksAggregateAggregateAggregateCountDistinct
          )
        }
        nodes @include(if: $includeUpdateUserByPkProjectsTasksAggregateNodes) {
          id
          name
          project_id
        }
      }
      id
      name
      user_id
    }
    Projects_aggregate(
      distinct_on: $updateUserByPkProjectsAggregateDistinctOn
      limit: $updateUserByPkProjectsAggregateLimit
      offset: $updateUserByPkProjectsAggregateOffset
      order_by: $updateUserByPkProjectsAggregateOrderBy
      where: $updateUserByPkProjectsAggregateWhere
    ) @include(if: $includeUpdateUserByPkProjectsAggregate) {
      aggregate @include(if: $includeUpdateUserByPkProjectsAggregateAggregate) {
        avg @include(if: $includeUpdateUserByPkProjectsAggregateAggregateAvg) {
          id
          user_id
        }
        count(
          columns: $updateUserByPkProjectsAggregateProjectsAggregateAggregateAggregateCountColumns
          distinct: $updateUserByPkProjectsAggregateProjectsAggregateAggregateAggregateCountDistinct
        )
        max @include(if: $includeUpdateUserByPkProjectsAggregateAggregateMax) {
          id
          name
          user_id
        }
        min @include(if: $includeUpdateUserByPkProjectsAggregateAggregateMin) {
          id
          name
          user_id
        }
        stddev @include(if: $includeUpdateUserByPkProjectsAggregateAggregateStddev) {
          id
          user_id
        }
        stddev_pop @include(if: $includeUpdateUserByPkProjectsAggregateAggregateStddevPop) {
          id
          user_id
        }
        stddev_samp @include(if: $includeUpdateUserByPkProjectsAggregateAggregateStddevSamp) {
          id
          user_id
        }
        sum @include(if: $includeUpdateUserByPkProjectsAggregateAggregateSum) {
          id
          user_id
        }
        var_pop @include(if: $includeUpdateUserByPkProjectsAggregateAggregateVarPop) {
          id
          user_id
        }
        var_samp @include(if: $includeUpdateUserByPkProjectsAggregateAggregateVarSamp) {
          id
          user_id
        }
        variance @include(if: $includeUpdateUserByPkProjectsAggregateAggregateVariance) {
          id
          user_id
        }
      }
      nodes @include(if: $includeUpdateUserByPkProjectsAggregateNodes) {
        Tasks(
          distinct_on: $updateUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksDistinctOn
          limit: $updateUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksLimit
          offset: $updateUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksOffset
          order_by: $updateUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksOrderBy
          where: $updateUserByPkProjectsAggregateProjectsAggregateNodesNodesTasksWhere
        ) @include(if: $includeUpdateUserByPkProjectsAggregateNodesTasks) {
          id
          name
          project_id
        }
        id
        name
        user_id
      }
    }
    id
    name
  }
}
    `;
export type IUpdateUserByPkMutationMutationFn = Apollo.MutationFunction<IUpdateUserByPkMutation, IUpdateUserByPkMutationVariables>;
export function useUpdateUserByPkMutation(baseOptions?: Apollo.MutationHookOptions<IUpdateUserByPkMutation, IUpdateUserByPkMutationVariables>) {
        return Apollo.useMutation<IUpdateUserByPkMutation, IUpdateUserByPkMutationVariables>(UpdateUserByPkMutationDocument, baseOptions);
      }
export type UpdateUserByPkMutationHookResult = ReturnType<typeof useUpdateUserByPkMutation>;
export type UpdateUserByPkMutationMutationResult = Apollo.MutationResult<IUpdateUserByPkMutation>;
export type UpdateUserByPkMutationMutationOptions = Apollo.BaseMutationOptions<IUpdateUserByPkMutation, IUpdateUserByPkMutationVariables>;