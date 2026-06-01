
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Simulation
 * 
 */
export type Simulation = $Result.DefaultSelection<Prisma.$SimulationPayload>
/**
 * Model RevenueSource
 * 
 */
export type RevenueSource = $Result.DefaultSelection<Prisma.$RevenueSourcePayload>
/**
 * Model ExpenseItem
 * 
 */
export type ExpenseItem = $Result.DefaultSelection<Prisma.$ExpenseItemPayload>
/**
 * Model Classroom
 * 
 */
export type Classroom = $Result.DefaultSelection<Prisma.$ClassroomPayload>
/**
 * Model BusinessGoal
 * 
 */
export type BusinessGoal = $Result.DefaultSelection<Prisma.$BusinessGoalPayload>
/**
 * Model Insight
 * 
 */
export type Insight = $Result.DefaultSelection<Prisma.$InsightPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const SimStatus: {
  DRAFT: 'DRAFT',
  COMPLETED: 'COMPLETED'
};

export type SimStatus = (typeof SimStatus)[keyof typeof SimStatus]

}

export type SimStatus = $Enums.SimStatus

export const SimStatus: typeof $Enums.SimStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.simulation`: Exposes CRUD operations for the **Simulation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Simulations
    * const simulations = await prisma.simulation.findMany()
    * ```
    */
  get simulation(): Prisma.SimulationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.revenueSource`: Exposes CRUD operations for the **RevenueSource** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RevenueSources
    * const revenueSources = await prisma.revenueSource.findMany()
    * ```
    */
  get revenueSource(): Prisma.RevenueSourceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.expenseItem`: Exposes CRUD operations for the **ExpenseItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExpenseItems
    * const expenseItems = await prisma.expenseItem.findMany()
    * ```
    */
  get expenseItem(): Prisma.ExpenseItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.classroom`: Exposes CRUD operations for the **Classroom** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Classrooms
    * const classrooms = await prisma.classroom.findMany()
    * ```
    */
  get classroom(): Prisma.ClassroomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.businessGoal`: Exposes CRUD operations for the **BusinessGoal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BusinessGoals
    * const businessGoals = await prisma.businessGoal.findMany()
    * ```
    */
  get businessGoal(): Prisma.BusinessGoalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.insight`: Exposes CRUD operations for the **Insight** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Insights
    * const insights = await prisma.insight.findMany()
    * ```
    */
  get insight(): Prisma.InsightDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Simulation: 'Simulation',
    RevenueSource: 'RevenueSource',
    ExpenseItem: 'ExpenseItem',
    Classroom: 'Classroom',
    BusinessGoal: 'BusinessGoal',
    Insight: 'Insight'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "simulation" | "revenueSource" | "expenseItem" | "classroom" | "businessGoal" | "insight"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Simulation: {
        payload: Prisma.$SimulationPayload<ExtArgs>
        fields: Prisma.SimulationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SimulationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimulationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SimulationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimulationPayload>
          }
          findFirst: {
            args: Prisma.SimulationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimulationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SimulationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimulationPayload>
          }
          findMany: {
            args: Prisma.SimulationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimulationPayload>[]
          }
          create: {
            args: Prisma.SimulationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimulationPayload>
          }
          createMany: {
            args: Prisma.SimulationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SimulationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimulationPayload>[]
          }
          delete: {
            args: Prisma.SimulationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimulationPayload>
          }
          update: {
            args: Prisma.SimulationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimulationPayload>
          }
          deleteMany: {
            args: Prisma.SimulationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SimulationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SimulationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimulationPayload>[]
          }
          upsert: {
            args: Prisma.SimulationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimulationPayload>
          }
          aggregate: {
            args: Prisma.SimulationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSimulation>
          }
          groupBy: {
            args: Prisma.SimulationGroupByArgs<ExtArgs>
            result: $Utils.Optional<SimulationGroupByOutputType>[]
          }
          count: {
            args: Prisma.SimulationCountArgs<ExtArgs>
            result: $Utils.Optional<SimulationCountAggregateOutputType> | number
          }
        }
      }
      RevenueSource: {
        payload: Prisma.$RevenueSourcePayload<ExtArgs>
        fields: Prisma.RevenueSourceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RevenueSourceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevenueSourcePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RevenueSourceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevenueSourcePayload>
          }
          findFirst: {
            args: Prisma.RevenueSourceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevenueSourcePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RevenueSourceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevenueSourcePayload>
          }
          findMany: {
            args: Prisma.RevenueSourceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevenueSourcePayload>[]
          }
          create: {
            args: Prisma.RevenueSourceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevenueSourcePayload>
          }
          createMany: {
            args: Prisma.RevenueSourceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RevenueSourceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevenueSourcePayload>[]
          }
          delete: {
            args: Prisma.RevenueSourceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevenueSourcePayload>
          }
          update: {
            args: Prisma.RevenueSourceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevenueSourcePayload>
          }
          deleteMany: {
            args: Prisma.RevenueSourceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RevenueSourceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RevenueSourceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevenueSourcePayload>[]
          }
          upsert: {
            args: Prisma.RevenueSourceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevenueSourcePayload>
          }
          aggregate: {
            args: Prisma.RevenueSourceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRevenueSource>
          }
          groupBy: {
            args: Prisma.RevenueSourceGroupByArgs<ExtArgs>
            result: $Utils.Optional<RevenueSourceGroupByOutputType>[]
          }
          count: {
            args: Prisma.RevenueSourceCountArgs<ExtArgs>
            result: $Utils.Optional<RevenueSourceCountAggregateOutputType> | number
          }
        }
      }
      ExpenseItem: {
        payload: Prisma.$ExpenseItemPayload<ExtArgs>
        fields: Prisma.ExpenseItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExpenseItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExpenseItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseItemPayload>
          }
          findFirst: {
            args: Prisma.ExpenseItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExpenseItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseItemPayload>
          }
          findMany: {
            args: Prisma.ExpenseItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseItemPayload>[]
          }
          create: {
            args: Prisma.ExpenseItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseItemPayload>
          }
          createMany: {
            args: Prisma.ExpenseItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExpenseItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseItemPayload>[]
          }
          delete: {
            args: Prisma.ExpenseItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseItemPayload>
          }
          update: {
            args: Prisma.ExpenseItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseItemPayload>
          }
          deleteMany: {
            args: Prisma.ExpenseItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExpenseItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExpenseItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseItemPayload>[]
          }
          upsert: {
            args: Prisma.ExpenseItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseItemPayload>
          }
          aggregate: {
            args: Prisma.ExpenseItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpenseItem>
          }
          groupBy: {
            args: Prisma.ExpenseItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpenseItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExpenseItemCountArgs<ExtArgs>
            result: $Utils.Optional<ExpenseItemCountAggregateOutputType> | number
          }
        }
      }
      Classroom: {
        payload: Prisma.$ClassroomPayload<ExtArgs>
        fields: Prisma.ClassroomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClassroomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClassroomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomPayload>
          }
          findFirst: {
            args: Prisma.ClassroomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClassroomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomPayload>
          }
          findMany: {
            args: Prisma.ClassroomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomPayload>[]
          }
          create: {
            args: Prisma.ClassroomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomPayload>
          }
          createMany: {
            args: Prisma.ClassroomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClassroomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomPayload>[]
          }
          delete: {
            args: Prisma.ClassroomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomPayload>
          }
          update: {
            args: Prisma.ClassroomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomPayload>
          }
          deleteMany: {
            args: Prisma.ClassroomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClassroomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClassroomUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomPayload>[]
          }
          upsert: {
            args: Prisma.ClassroomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomPayload>
          }
          aggregate: {
            args: Prisma.ClassroomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClassroom>
          }
          groupBy: {
            args: Prisma.ClassroomGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClassroomGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClassroomCountArgs<ExtArgs>
            result: $Utils.Optional<ClassroomCountAggregateOutputType> | number
          }
        }
      }
      BusinessGoal: {
        payload: Prisma.$BusinessGoalPayload<ExtArgs>
        fields: Prisma.BusinessGoalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BusinessGoalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessGoalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BusinessGoalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessGoalPayload>
          }
          findFirst: {
            args: Prisma.BusinessGoalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessGoalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BusinessGoalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessGoalPayload>
          }
          findMany: {
            args: Prisma.BusinessGoalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessGoalPayload>[]
          }
          create: {
            args: Prisma.BusinessGoalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessGoalPayload>
          }
          createMany: {
            args: Prisma.BusinessGoalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BusinessGoalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessGoalPayload>[]
          }
          delete: {
            args: Prisma.BusinessGoalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessGoalPayload>
          }
          update: {
            args: Prisma.BusinessGoalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessGoalPayload>
          }
          deleteMany: {
            args: Prisma.BusinessGoalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BusinessGoalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BusinessGoalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessGoalPayload>[]
          }
          upsert: {
            args: Prisma.BusinessGoalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessGoalPayload>
          }
          aggregate: {
            args: Prisma.BusinessGoalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBusinessGoal>
          }
          groupBy: {
            args: Prisma.BusinessGoalGroupByArgs<ExtArgs>
            result: $Utils.Optional<BusinessGoalGroupByOutputType>[]
          }
          count: {
            args: Prisma.BusinessGoalCountArgs<ExtArgs>
            result: $Utils.Optional<BusinessGoalCountAggregateOutputType> | number
          }
        }
      }
      Insight: {
        payload: Prisma.$InsightPayload<ExtArgs>
        fields: Prisma.InsightFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InsightFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsightPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InsightFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsightPayload>
          }
          findFirst: {
            args: Prisma.InsightFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsightPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InsightFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsightPayload>
          }
          findMany: {
            args: Prisma.InsightFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsightPayload>[]
          }
          create: {
            args: Prisma.InsightCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsightPayload>
          }
          createMany: {
            args: Prisma.InsightCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InsightCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsightPayload>[]
          }
          delete: {
            args: Prisma.InsightDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsightPayload>
          }
          update: {
            args: Prisma.InsightUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsightPayload>
          }
          deleteMany: {
            args: Prisma.InsightDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InsightUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InsightUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsightPayload>[]
          }
          upsert: {
            args: Prisma.InsightUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsightPayload>
          }
          aggregate: {
            args: Prisma.InsightAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInsight>
          }
          groupBy: {
            args: Prisma.InsightGroupByArgs<ExtArgs>
            result: $Utils.Optional<InsightGroupByOutputType>[]
          }
          count: {
            args: Prisma.InsightCountArgs<ExtArgs>
            result: $Utils.Optional<InsightCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    simulation?: SimulationOmit
    revenueSource?: RevenueSourceOmit
    expenseItem?: ExpenseItemOmit
    classroom?: ClassroomOmit
    businessGoal?: BusinessGoalOmit
    insight?: InsightOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    simulations: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    simulations?: boolean | UserCountOutputTypeCountSimulationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSimulationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SimulationWhereInput
  }


  /**
   * Count Type SimulationCountOutputType
   */

  export type SimulationCountOutputType = {
    revenueSources: number
    expenseItems: number
    classrooms: number
    businessGoals: number
  }

  export type SimulationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    revenueSources?: boolean | SimulationCountOutputTypeCountRevenueSourcesArgs
    expenseItems?: boolean | SimulationCountOutputTypeCountExpenseItemsArgs
    classrooms?: boolean | SimulationCountOutputTypeCountClassroomsArgs
    businessGoals?: boolean | SimulationCountOutputTypeCountBusinessGoalsArgs
  }

  // Custom InputTypes
  /**
   * SimulationCountOutputType without action
   */
  export type SimulationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SimulationCountOutputType
     */
    select?: SimulationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SimulationCountOutputType without action
   */
  export type SimulationCountOutputTypeCountRevenueSourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RevenueSourceWhereInput
  }

  /**
   * SimulationCountOutputType without action
   */
  export type SimulationCountOutputTypeCountExpenseItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseItemWhereInput
  }

  /**
   * SimulationCountOutputType without action
   */
  export type SimulationCountOutputTypeCountClassroomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassroomWhereInput
  }

  /**
   * SimulationCountOutputType without action
   */
  export type SimulationCountOutputTypeCountBusinessGoalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusinessGoalWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    name: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    simulations?: boolean | User$simulationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    simulations?: boolean | User$simulationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      simulations: Prisma.$SimulationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    simulations<T extends User$simulationsArgs<ExtArgs> = {}>(args?: Subset<T, User$simulationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SimulationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.simulations
   */
  export type User$simulationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Simulation
     */
    select?: SimulationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Simulation
     */
    omit?: SimulationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimulationInclude<ExtArgs> | null
    where?: SimulationWhereInput
    orderBy?: SimulationOrderByWithRelationInput | SimulationOrderByWithRelationInput[]
    cursor?: SimulationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SimulationScalarFieldEnum | SimulationScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Simulation
   */

  export type AggregateSimulation = {
    _count: SimulationCountAggregateOutputType | null
    _avg: SimulationAvgAggregateOutputType | null
    _sum: SimulationSumAggregateOutputType | null
    _min: SimulationMinAggregateOutputType | null
    _max: SimulationMaxAggregateOutputType | null
  }

  export type SimulationAvgAggregateOutputType = {
    operatingHours: number | null
    operatingDays: number | null
  }

  export type SimulationSumAggregateOutputType = {
    operatingHours: number | null
    operatingDays: number | null
  }

  export type SimulationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    businessName: string | null
    operatingHours: number | null
    operatingDays: number | null
    status: $Enums.SimStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SimulationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    businessName: string | null
    operatingHours: number | null
    operatingDays: number | null
    status: $Enums.SimStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SimulationCountAggregateOutputType = {
    id: number
    userId: number
    businessName: number
    operatingHours: number
    operatingDays: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SimulationAvgAggregateInputType = {
    operatingHours?: true
    operatingDays?: true
  }

  export type SimulationSumAggregateInputType = {
    operatingHours?: true
    operatingDays?: true
  }

  export type SimulationMinAggregateInputType = {
    id?: true
    userId?: true
    businessName?: true
    operatingHours?: true
    operatingDays?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SimulationMaxAggregateInputType = {
    id?: true
    userId?: true
    businessName?: true
    operatingHours?: true
    operatingDays?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SimulationCountAggregateInputType = {
    id?: true
    userId?: true
    businessName?: true
    operatingHours?: true
    operatingDays?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SimulationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Simulation to aggregate.
     */
    where?: SimulationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Simulations to fetch.
     */
    orderBy?: SimulationOrderByWithRelationInput | SimulationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SimulationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Simulations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Simulations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Simulations
    **/
    _count?: true | SimulationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SimulationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SimulationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SimulationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SimulationMaxAggregateInputType
  }

  export type GetSimulationAggregateType<T extends SimulationAggregateArgs> = {
        [P in keyof T & keyof AggregateSimulation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSimulation[P]>
      : GetScalarType<T[P], AggregateSimulation[P]>
  }




  export type SimulationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SimulationWhereInput
    orderBy?: SimulationOrderByWithAggregationInput | SimulationOrderByWithAggregationInput[]
    by: SimulationScalarFieldEnum[] | SimulationScalarFieldEnum
    having?: SimulationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SimulationCountAggregateInputType | true
    _avg?: SimulationAvgAggregateInputType
    _sum?: SimulationSumAggregateInputType
    _min?: SimulationMinAggregateInputType
    _max?: SimulationMaxAggregateInputType
  }

  export type SimulationGroupByOutputType = {
    id: string
    userId: string
    businessName: string
    operatingHours: number
    operatingDays: number
    status: $Enums.SimStatus
    createdAt: Date
    updatedAt: Date
    _count: SimulationCountAggregateOutputType | null
    _avg: SimulationAvgAggregateOutputType | null
    _sum: SimulationSumAggregateOutputType | null
    _min: SimulationMinAggregateOutputType | null
    _max: SimulationMaxAggregateOutputType | null
  }

  type GetSimulationGroupByPayload<T extends SimulationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SimulationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SimulationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SimulationGroupByOutputType[P]>
            : GetScalarType<T[P], SimulationGroupByOutputType[P]>
        }
      >
    >


  export type SimulationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    businessName?: boolean
    operatingHours?: boolean
    operatingDays?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    revenueSources?: boolean | Simulation$revenueSourcesArgs<ExtArgs>
    expenseItems?: boolean | Simulation$expenseItemsArgs<ExtArgs>
    classrooms?: boolean | Simulation$classroomsArgs<ExtArgs>
    businessGoals?: boolean | Simulation$businessGoalsArgs<ExtArgs>
    insight?: boolean | Simulation$insightArgs<ExtArgs>
    _count?: boolean | SimulationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["simulation"]>

  export type SimulationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    businessName?: boolean
    operatingHours?: boolean
    operatingDays?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["simulation"]>

  export type SimulationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    businessName?: boolean
    operatingHours?: boolean
    operatingDays?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["simulation"]>

  export type SimulationSelectScalar = {
    id?: boolean
    userId?: boolean
    businessName?: boolean
    operatingHours?: boolean
    operatingDays?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SimulationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "businessName" | "operatingHours" | "operatingDays" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["simulation"]>
  export type SimulationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    revenueSources?: boolean | Simulation$revenueSourcesArgs<ExtArgs>
    expenseItems?: boolean | Simulation$expenseItemsArgs<ExtArgs>
    classrooms?: boolean | Simulation$classroomsArgs<ExtArgs>
    businessGoals?: boolean | Simulation$businessGoalsArgs<ExtArgs>
    insight?: boolean | Simulation$insightArgs<ExtArgs>
    _count?: boolean | SimulationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SimulationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SimulationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SimulationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Simulation"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      revenueSources: Prisma.$RevenueSourcePayload<ExtArgs>[]
      expenseItems: Prisma.$ExpenseItemPayload<ExtArgs>[]
      classrooms: Prisma.$ClassroomPayload<ExtArgs>[]
      businessGoals: Prisma.$BusinessGoalPayload<ExtArgs>[]
      insight: Prisma.$InsightPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      businessName: string
      operatingHours: number
      operatingDays: number
      status: $Enums.SimStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["simulation"]>
    composites: {}
  }

  type SimulationGetPayload<S extends boolean | null | undefined | SimulationDefaultArgs> = $Result.GetResult<Prisma.$SimulationPayload, S>

  type SimulationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SimulationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SimulationCountAggregateInputType | true
    }

  export interface SimulationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Simulation'], meta: { name: 'Simulation' } }
    /**
     * Find zero or one Simulation that matches the filter.
     * @param {SimulationFindUniqueArgs} args - Arguments to find a Simulation
     * @example
     * // Get one Simulation
     * const simulation = await prisma.simulation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SimulationFindUniqueArgs>(args: SelectSubset<T, SimulationFindUniqueArgs<ExtArgs>>): Prisma__SimulationClient<$Result.GetResult<Prisma.$SimulationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Simulation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SimulationFindUniqueOrThrowArgs} args - Arguments to find a Simulation
     * @example
     * // Get one Simulation
     * const simulation = await prisma.simulation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SimulationFindUniqueOrThrowArgs>(args: SelectSubset<T, SimulationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SimulationClient<$Result.GetResult<Prisma.$SimulationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Simulation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SimulationFindFirstArgs} args - Arguments to find a Simulation
     * @example
     * // Get one Simulation
     * const simulation = await prisma.simulation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SimulationFindFirstArgs>(args?: SelectSubset<T, SimulationFindFirstArgs<ExtArgs>>): Prisma__SimulationClient<$Result.GetResult<Prisma.$SimulationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Simulation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SimulationFindFirstOrThrowArgs} args - Arguments to find a Simulation
     * @example
     * // Get one Simulation
     * const simulation = await prisma.simulation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SimulationFindFirstOrThrowArgs>(args?: SelectSubset<T, SimulationFindFirstOrThrowArgs<ExtArgs>>): Prisma__SimulationClient<$Result.GetResult<Prisma.$SimulationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Simulations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SimulationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Simulations
     * const simulations = await prisma.simulation.findMany()
     * 
     * // Get first 10 Simulations
     * const simulations = await prisma.simulation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const simulationWithIdOnly = await prisma.simulation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SimulationFindManyArgs>(args?: SelectSubset<T, SimulationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SimulationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Simulation.
     * @param {SimulationCreateArgs} args - Arguments to create a Simulation.
     * @example
     * // Create one Simulation
     * const Simulation = await prisma.simulation.create({
     *   data: {
     *     // ... data to create a Simulation
     *   }
     * })
     * 
     */
    create<T extends SimulationCreateArgs>(args: SelectSubset<T, SimulationCreateArgs<ExtArgs>>): Prisma__SimulationClient<$Result.GetResult<Prisma.$SimulationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Simulations.
     * @param {SimulationCreateManyArgs} args - Arguments to create many Simulations.
     * @example
     * // Create many Simulations
     * const simulation = await prisma.simulation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SimulationCreateManyArgs>(args?: SelectSubset<T, SimulationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Simulations and returns the data saved in the database.
     * @param {SimulationCreateManyAndReturnArgs} args - Arguments to create many Simulations.
     * @example
     * // Create many Simulations
     * const simulation = await prisma.simulation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Simulations and only return the `id`
     * const simulationWithIdOnly = await prisma.simulation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SimulationCreateManyAndReturnArgs>(args?: SelectSubset<T, SimulationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SimulationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Simulation.
     * @param {SimulationDeleteArgs} args - Arguments to delete one Simulation.
     * @example
     * // Delete one Simulation
     * const Simulation = await prisma.simulation.delete({
     *   where: {
     *     // ... filter to delete one Simulation
     *   }
     * })
     * 
     */
    delete<T extends SimulationDeleteArgs>(args: SelectSubset<T, SimulationDeleteArgs<ExtArgs>>): Prisma__SimulationClient<$Result.GetResult<Prisma.$SimulationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Simulation.
     * @param {SimulationUpdateArgs} args - Arguments to update one Simulation.
     * @example
     * // Update one Simulation
     * const simulation = await prisma.simulation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SimulationUpdateArgs>(args: SelectSubset<T, SimulationUpdateArgs<ExtArgs>>): Prisma__SimulationClient<$Result.GetResult<Prisma.$SimulationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Simulations.
     * @param {SimulationDeleteManyArgs} args - Arguments to filter Simulations to delete.
     * @example
     * // Delete a few Simulations
     * const { count } = await prisma.simulation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SimulationDeleteManyArgs>(args?: SelectSubset<T, SimulationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Simulations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SimulationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Simulations
     * const simulation = await prisma.simulation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SimulationUpdateManyArgs>(args: SelectSubset<T, SimulationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Simulations and returns the data updated in the database.
     * @param {SimulationUpdateManyAndReturnArgs} args - Arguments to update many Simulations.
     * @example
     * // Update many Simulations
     * const simulation = await prisma.simulation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Simulations and only return the `id`
     * const simulationWithIdOnly = await prisma.simulation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SimulationUpdateManyAndReturnArgs>(args: SelectSubset<T, SimulationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SimulationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Simulation.
     * @param {SimulationUpsertArgs} args - Arguments to update or create a Simulation.
     * @example
     * // Update or create a Simulation
     * const simulation = await prisma.simulation.upsert({
     *   create: {
     *     // ... data to create a Simulation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Simulation we want to update
     *   }
     * })
     */
    upsert<T extends SimulationUpsertArgs>(args: SelectSubset<T, SimulationUpsertArgs<ExtArgs>>): Prisma__SimulationClient<$Result.GetResult<Prisma.$SimulationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Simulations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SimulationCountArgs} args - Arguments to filter Simulations to count.
     * @example
     * // Count the number of Simulations
     * const count = await prisma.simulation.count({
     *   where: {
     *     // ... the filter for the Simulations we want to count
     *   }
     * })
    **/
    count<T extends SimulationCountArgs>(
      args?: Subset<T, SimulationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SimulationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Simulation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SimulationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SimulationAggregateArgs>(args: Subset<T, SimulationAggregateArgs>): Prisma.PrismaPromise<GetSimulationAggregateType<T>>

    /**
     * Group by Simulation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SimulationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SimulationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SimulationGroupByArgs['orderBy'] }
        : { orderBy?: SimulationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SimulationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSimulationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Simulation model
   */
  readonly fields: SimulationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Simulation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SimulationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    revenueSources<T extends Simulation$revenueSourcesArgs<ExtArgs> = {}>(args?: Subset<T, Simulation$revenueSourcesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RevenueSourcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    expenseItems<T extends Simulation$expenseItemsArgs<ExtArgs> = {}>(args?: Subset<T, Simulation$expenseItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpenseItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    classrooms<T extends Simulation$classroomsArgs<ExtArgs> = {}>(args?: Subset<T, Simulation$classroomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    businessGoals<T extends Simulation$businessGoalsArgs<ExtArgs> = {}>(args?: Subset<T, Simulation$businessGoalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessGoalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    insight<T extends Simulation$insightArgs<ExtArgs> = {}>(args?: Subset<T, Simulation$insightArgs<ExtArgs>>): Prisma__InsightClient<$Result.GetResult<Prisma.$InsightPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Simulation model
   */
  interface SimulationFieldRefs {
    readonly id: FieldRef<"Simulation", 'String'>
    readonly userId: FieldRef<"Simulation", 'String'>
    readonly businessName: FieldRef<"Simulation", 'String'>
    readonly operatingHours: FieldRef<"Simulation", 'Float'>
    readonly operatingDays: FieldRef<"Simulation", 'Int'>
    readonly status: FieldRef<"Simulation", 'SimStatus'>
    readonly createdAt: FieldRef<"Simulation", 'DateTime'>
    readonly updatedAt: FieldRef<"Simulation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Simulation findUnique
   */
  export type SimulationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Simulation
     */
    select?: SimulationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Simulation
     */
    omit?: SimulationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimulationInclude<ExtArgs> | null
    /**
     * Filter, which Simulation to fetch.
     */
    where: SimulationWhereUniqueInput
  }

  /**
   * Simulation findUniqueOrThrow
   */
  export type SimulationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Simulation
     */
    select?: SimulationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Simulation
     */
    omit?: SimulationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimulationInclude<ExtArgs> | null
    /**
     * Filter, which Simulation to fetch.
     */
    where: SimulationWhereUniqueInput
  }

  /**
   * Simulation findFirst
   */
  export type SimulationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Simulation
     */
    select?: SimulationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Simulation
     */
    omit?: SimulationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimulationInclude<ExtArgs> | null
    /**
     * Filter, which Simulation to fetch.
     */
    where?: SimulationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Simulations to fetch.
     */
    orderBy?: SimulationOrderByWithRelationInput | SimulationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Simulations.
     */
    cursor?: SimulationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Simulations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Simulations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Simulations.
     */
    distinct?: SimulationScalarFieldEnum | SimulationScalarFieldEnum[]
  }

  /**
   * Simulation findFirstOrThrow
   */
  export type SimulationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Simulation
     */
    select?: SimulationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Simulation
     */
    omit?: SimulationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimulationInclude<ExtArgs> | null
    /**
     * Filter, which Simulation to fetch.
     */
    where?: SimulationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Simulations to fetch.
     */
    orderBy?: SimulationOrderByWithRelationInput | SimulationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Simulations.
     */
    cursor?: SimulationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Simulations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Simulations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Simulations.
     */
    distinct?: SimulationScalarFieldEnum | SimulationScalarFieldEnum[]
  }

  /**
   * Simulation findMany
   */
  export type SimulationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Simulation
     */
    select?: SimulationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Simulation
     */
    omit?: SimulationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimulationInclude<ExtArgs> | null
    /**
     * Filter, which Simulations to fetch.
     */
    where?: SimulationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Simulations to fetch.
     */
    orderBy?: SimulationOrderByWithRelationInput | SimulationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Simulations.
     */
    cursor?: SimulationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Simulations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Simulations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Simulations.
     */
    distinct?: SimulationScalarFieldEnum | SimulationScalarFieldEnum[]
  }

  /**
   * Simulation create
   */
  export type SimulationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Simulation
     */
    select?: SimulationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Simulation
     */
    omit?: SimulationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimulationInclude<ExtArgs> | null
    /**
     * The data needed to create a Simulation.
     */
    data: XOR<SimulationCreateInput, SimulationUncheckedCreateInput>
  }

  /**
   * Simulation createMany
   */
  export type SimulationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Simulations.
     */
    data: SimulationCreateManyInput | SimulationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Simulation createManyAndReturn
   */
  export type SimulationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Simulation
     */
    select?: SimulationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Simulation
     */
    omit?: SimulationOmit<ExtArgs> | null
    /**
     * The data used to create many Simulations.
     */
    data: SimulationCreateManyInput | SimulationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimulationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Simulation update
   */
  export type SimulationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Simulation
     */
    select?: SimulationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Simulation
     */
    omit?: SimulationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimulationInclude<ExtArgs> | null
    /**
     * The data needed to update a Simulation.
     */
    data: XOR<SimulationUpdateInput, SimulationUncheckedUpdateInput>
    /**
     * Choose, which Simulation to update.
     */
    where: SimulationWhereUniqueInput
  }

  /**
   * Simulation updateMany
   */
  export type SimulationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Simulations.
     */
    data: XOR<SimulationUpdateManyMutationInput, SimulationUncheckedUpdateManyInput>
    /**
     * Filter which Simulations to update
     */
    where?: SimulationWhereInput
    /**
     * Limit how many Simulations to update.
     */
    limit?: number
  }

  /**
   * Simulation updateManyAndReturn
   */
  export type SimulationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Simulation
     */
    select?: SimulationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Simulation
     */
    omit?: SimulationOmit<ExtArgs> | null
    /**
     * The data used to update Simulations.
     */
    data: XOR<SimulationUpdateManyMutationInput, SimulationUncheckedUpdateManyInput>
    /**
     * Filter which Simulations to update
     */
    where?: SimulationWhereInput
    /**
     * Limit how many Simulations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimulationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Simulation upsert
   */
  export type SimulationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Simulation
     */
    select?: SimulationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Simulation
     */
    omit?: SimulationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimulationInclude<ExtArgs> | null
    /**
     * The filter to search for the Simulation to update in case it exists.
     */
    where: SimulationWhereUniqueInput
    /**
     * In case the Simulation found by the `where` argument doesn't exist, create a new Simulation with this data.
     */
    create: XOR<SimulationCreateInput, SimulationUncheckedCreateInput>
    /**
     * In case the Simulation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SimulationUpdateInput, SimulationUncheckedUpdateInput>
  }

  /**
   * Simulation delete
   */
  export type SimulationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Simulation
     */
    select?: SimulationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Simulation
     */
    omit?: SimulationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimulationInclude<ExtArgs> | null
    /**
     * Filter which Simulation to delete.
     */
    where: SimulationWhereUniqueInput
  }

  /**
   * Simulation deleteMany
   */
  export type SimulationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Simulations to delete
     */
    where?: SimulationWhereInput
    /**
     * Limit how many Simulations to delete.
     */
    limit?: number
  }

  /**
   * Simulation.revenueSources
   */
  export type Simulation$revenueSourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevenueSource
     */
    select?: RevenueSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevenueSource
     */
    omit?: RevenueSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevenueSourceInclude<ExtArgs> | null
    where?: RevenueSourceWhereInput
    orderBy?: RevenueSourceOrderByWithRelationInput | RevenueSourceOrderByWithRelationInput[]
    cursor?: RevenueSourceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RevenueSourceScalarFieldEnum | RevenueSourceScalarFieldEnum[]
  }

  /**
   * Simulation.expenseItems
   */
  export type Simulation$expenseItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseItem
     */
    select?: ExpenseItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseItem
     */
    omit?: ExpenseItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseItemInclude<ExtArgs> | null
    where?: ExpenseItemWhereInput
    orderBy?: ExpenseItemOrderByWithRelationInput | ExpenseItemOrderByWithRelationInput[]
    cursor?: ExpenseItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpenseItemScalarFieldEnum | ExpenseItemScalarFieldEnum[]
  }

  /**
   * Simulation.classrooms
   */
  export type Simulation$classroomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomInclude<ExtArgs> | null
    where?: ClassroomWhereInput
    orderBy?: ClassroomOrderByWithRelationInput | ClassroomOrderByWithRelationInput[]
    cursor?: ClassroomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassroomScalarFieldEnum | ClassroomScalarFieldEnum[]
  }

  /**
   * Simulation.businessGoals
   */
  export type Simulation$businessGoalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessGoal
     */
    select?: BusinessGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessGoal
     */
    omit?: BusinessGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessGoalInclude<ExtArgs> | null
    where?: BusinessGoalWhereInput
    orderBy?: BusinessGoalOrderByWithRelationInput | BusinessGoalOrderByWithRelationInput[]
    cursor?: BusinessGoalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BusinessGoalScalarFieldEnum | BusinessGoalScalarFieldEnum[]
  }

  /**
   * Simulation.insight
   */
  export type Simulation$insightArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insight
     */
    select?: InsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insight
     */
    omit?: InsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsightInclude<ExtArgs> | null
    where?: InsightWhereInput
  }

  /**
   * Simulation without action
   */
  export type SimulationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Simulation
     */
    select?: SimulationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Simulation
     */
    omit?: SimulationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimulationInclude<ExtArgs> | null
  }


  /**
   * Model RevenueSource
   */

  export type AggregateRevenueSource = {
    _count: RevenueSourceCountAggregateOutputType | null
    _avg: RevenueSourceAvgAggregateOutputType | null
    _sum: RevenueSourceSumAggregateOutputType | null
    _min: RevenueSourceMinAggregateOutputType | null
    _max: RevenueSourceMaxAggregateOutputType | null
  }

  export type RevenueSourceAvgAggregateOutputType = {
    amount: number | null
  }

  export type RevenueSourceSumAggregateOutputType = {
    amount: number | null
  }

  export type RevenueSourceMinAggregateOutputType = {
    id: string | null
    simulationId: string | null
    name: string | null
    amount: number | null
    tag: string | null
  }

  export type RevenueSourceMaxAggregateOutputType = {
    id: string | null
    simulationId: string | null
    name: string | null
    amount: number | null
    tag: string | null
  }

  export type RevenueSourceCountAggregateOutputType = {
    id: number
    simulationId: number
    name: number
    amount: number
    tag: number
    _all: number
  }


  export type RevenueSourceAvgAggregateInputType = {
    amount?: true
  }

  export type RevenueSourceSumAggregateInputType = {
    amount?: true
  }

  export type RevenueSourceMinAggregateInputType = {
    id?: true
    simulationId?: true
    name?: true
    amount?: true
    tag?: true
  }

  export type RevenueSourceMaxAggregateInputType = {
    id?: true
    simulationId?: true
    name?: true
    amount?: true
    tag?: true
  }

  export type RevenueSourceCountAggregateInputType = {
    id?: true
    simulationId?: true
    name?: true
    amount?: true
    tag?: true
    _all?: true
  }

  export type RevenueSourceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RevenueSource to aggregate.
     */
    where?: RevenueSourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RevenueSources to fetch.
     */
    orderBy?: RevenueSourceOrderByWithRelationInput | RevenueSourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RevenueSourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RevenueSources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RevenueSources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RevenueSources
    **/
    _count?: true | RevenueSourceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RevenueSourceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RevenueSourceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RevenueSourceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RevenueSourceMaxAggregateInputType
  }

  export type GetRevenueSourceAggregateType<T extends RevenueSourceAggregateArgs> = {
        [P in keyof T & keyof AggregateRevenueSource]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRevenueSource[P]>
      : GetScalarType<T[P], AggregateRevenueSource[P]>
  }




  export type RevenueSourceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RevenueSourceWhereInput
    orderBy?: RevenueSourceOrderByWithAggregationInput | RevenueSourceOrderByWithAggregationInput[]
    by: RevenueSourceScalarFieldEnum[] | RevenueSourceScalarFieldEnum
    having?: RevenueSourceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RevenueSourceCountAggregateInputType | true
    _avg?: RevenueSourceAvgAggregateInputType
    _sum?: RevenueSourceSumAggregateInputType
    _min?: RevenueSourceMinAggregateInputType
    _max?: RevenueSourceMaxAggregateInputType
  }

  export type RevenueSourceGroupByOutputType = {
    id: string
    simulationId: string
    name: string
    amount: number
    tag: string | null
    _count: RevenueSourceCountAggregateOutputType | null
    _avg: RevenueSourceAvgAggregateOutputType | null
    _sum: RevenueSourceSumAggregateOutputType | null
    _min: RevenueSourceMinAggregateOutputType | null
    _max: RevenueSourceMaxAggregateOutputType | null
  }

  type GetRevenueSourceGroupByPayload<T extends RevenueSourceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RevenueSourceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RevenueSourceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RevenueSourceGroupByOutputType[P]>
            : GetScalarType<T[P], RevenueSourceGroupByOutputType[P]>
        }
      >
    >


  export type RevenueSourceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    simulationId?: boolean
    name?: boolean
    amount?: boolean
    tag?: boolean
    simulation?: boolean | SimulationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["revenueSource"]>

  export type RevenueSourceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    simulationId?: boolean
    name?: boolean
    amount?: boolean
    tag?: boolean
    simulation?: boolean | SimulationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["revenueSource"]>

  export type RevenueSourceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    simulationId?: boolean
    name?: boolean
    amount?: boolean
    tag?: boolean
    simulation?: boolean | SimulationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["revenueSource"]>

  export type RevenueSourceSelectScalar = {
    id?: boolean
    simulationId?: boolean
    name?: boolean
    amount?: boolean
    tag?: boolean
  }

  export type RevenueSourceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "simulationId" | "name" | "amount" | "tag", ExtArgs["result"]["revenueSource"]>
  export type RevenueSourceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    simulation?: boolean | SimulationDefaultArgs<ExtArgs>
  }
  export type RevenueSourceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    simulation?: boolean | SimulationDefaultArgs<ExtArgs>
  }
  export type RevenueSourceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    simulation?: boolean | SimulationDefaultArgs<ExtArgs>
  }

  export type $RevenueSourcePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RevenueSource"
    objects: {
      simulation: Prisma.$SimulationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      simulationId: string
      name: string
      amount: number
      tag: string | null
    }, ExtArgs["result"]["revenueSource"]>
    composites: {}
  }

  type RevenueSourceGetPayload<S extends boolean | null | undefined | RevenueSourceDefaultArgs> = $Result.GetResult<Prisma.$RevenueSourcePayload, S>

  type RevenueSourceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RevenueSourceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RevenueSourceCountAggregateInputType | true
    }

  export interface RevenueSourceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RevenueSource'], meta: { name: 'RevenueSource' } }
    /**
     * Find zero or one RevenueSource that matches the filter.
     * @param {RevenueSourceFindUniqueArgs} args - Arguments to find a RevenueSource
     * @example
     * // Get one RevenueSource
     * const revenueSource = await prisma.revenueSource.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RevenueSourceFindUniqueArgs>(args: SelectSubset<T, RevenueSourceFindUniqueArgs<ExtArgs>>): Prisma__RevenueSourceClient<$Result.GetResult<Prisma.$RevenueSourcePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RevenueSource that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RevenueSourceFindUniqueOrThrowArgs} args - Arguments to find a RevenueSource
     * @example
     * // Get one RevenueSource
     * const revenueSource = await prisma.revenueSource.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RevenueSourceFindUniqueOrThrowArgs>(args: SelectSubset<T, RevenueSourceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RevenueSourceClient<$Result.GetResult<Prisma.$RevenueSourcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RevenueSource that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevenueSourceFindFirstArgs} args - Arguments to find a RevenueSource
     * @example
     * // Get one RevenueSource
     * const revenueSource = await prisma.revenueSource.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RevenueSourceFindFirstArgs>(args?: SelectSubset<T, RevenueSourceFindFirstArgs<ExtArgs>>): Prisma__RevenueSourceClient<$Result.GetResult<Prisma.$RevenueSourcePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RevenueSource that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevenueSourceFindFirstOrThrowArgs} args - Arguments to find a RevenueSource
     * @example
     * // Get one RevenueSource
     * const revenueSource = await prisma.revenueSource.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RevenueSourceFindFirstOrThrowArgs>(args?: SelectSubset<T, RevenueSourceFindFirstOrThrowArgs<ExtArgs>>): Prisma__RevenueSourceClient<$Result.GetResult<Prisma.$RevenueSourcePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RevenueSources that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevenueSourceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RevenueSources
     * const revenueSources = await prisma.revenueSource.findMany()
     * 
     * // Get first 10 RevenueSources
     * const revenueSources = await prisma.revenueSource.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const revenueSourceWithIdOnly = await prisma.revenueSource.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RevenueSourceFindManyArgs>(args?: SelectSubset<T, RevenueSourceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RevenueSourcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RevenueSource.
     * @param {RevenueSourceCreateArgs} args - Arguments to create a RevenueSource.
     * @example
     * // Create one RevenueSource
     * const RevenueSource = await prisma.revenueSource.create({
     *   data: {
     *     // ... data to create a RevenueSource
     *   }
     * })
     * 
     */
    create<T extends RevenueSourceCreateArgs>(args: SelectSubset<T, RevenueSourceCreateArgs<ExtArgs>>): Prisma__RevenueSourceClient<$Result.GetResult<Prisma.$RevenueSourcePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RevenueSources.
     * @param {RevenueSourceCreateManyArgs} args - Arguments to create many RevenueSources.
     * @example
     * // Create many RevenueSources
     * const revenueSource = await prisma.revenueSource.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RevenueSourceCreateManyArgs>(args?: SelectSubset<T, RevenueSourceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RevenueSources and returns the data saved in the database.
     * @param {RevenueSourceCreateManyAndReturnArgs} args - Arguments to create many RevenueSources.
     * @example
     * // Create many RevenueSources
     * const revenueSource = await prisma.revenueSource.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RevenueSources and only return the `id`
     * const revenueSourceWithIdOnly = await prisma.revenueSource.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RevenueSourceCreateManyAndReturnArgs>(args?: SelectSubset<T, RevenueSourceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RevenueSourcePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RevenueSource.
     * @param {RevenueSourceDeleteArgs} args - Arguments to delete one RevenueSource.
     * @example
     * // Delete one RevenueSource
     * const RevenueSource = await prisma.revenueSource.delete({
     *   where: {
     *     // ... filter to delete one RevenueSource
     *   }
     * })
     * 
     */
    delete<T extends RevenueSourceDeleteArgs>(args: SelectSubset<T, RevenueSourceDeleteArgs<ExtArgs>>): Prisma__RevenueSourceClient<$Result.GetResult<Prisma.$RevenueSourcePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RevenueSource.
     * @param {RevenueSourceUpdateArgs} args - Arguments to update one RevenueSource.
     * @example
     * // Update one RevenueSource
     * const revenueSource = await prisma.revenueSource.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RevenueSourceUpdateArgs>(args: SelectSubset<T, RevenueSourceUpdateArgs<ExtArgs>>): Prisma__RevenueSourceClient<$Result.GetResult<Prisma.$RevenueSourcePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RevenueSources.
     * @param {RevenueSourceDeleteManyArgs} args - Arguments to filter RevenueSources to delete.
     * @example
     * // Delete a few RevenueSources
     * const { count } = await prisma.revenueSource.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RevenueSourceDeleteManyArgs>(args?: SelectSubset<T, RevenueSourceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RevenueSources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevenueSourceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RevenueSources
     * const revenueSource = await prisma.revenueSource.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RevenueSourceUpdateManyArgs>(args: SelectSubset<T, RevenueSourceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RevenueSources and returns the data updated in the database.
     * @param {RevenueSourceUpdateManyAndReturnArgs} args - Arguments to update many RevenueSources.
     * @example
     * // Update many RevenueSources
     * const revenueSource = await prisma.revenueSource.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RevenueSources and only return the `id`
     * const revenueSourceWithIdOnly = await prisma.revenueSource.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RevenueSourceUpdateManyAndReturnArgs>(args: SelectSubset<T, RevenueSourceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RevenueSourcePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RevenueSource.
     * @param {RevenueSourceUpsertArgs} args - Arguments to update or create a RevenueSource.
     * @example
     * // Update or create a RevenueSource
     * const revenueSource = await prisma.revenueSource.upsert({
     *   create: {
     *     // ... data to create a RevenueSource
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RevenueSource we want to update
     *   }
     * })
     */
    upsert<T extends RevenueSourceUpsertArgs>(args: SelectSubset<T, RevenueSourceUpsertArgs<ExtArgs>>): Prisma__RevenueSourceClient<$Result.GetResult<Prisma.$RevenueSourcePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RevenueSources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevenueSourceCountArgs} args - Arguments to filter RevenueSources to count.
     * @example
     * // Count the number of RevenueSources
     * const count = await prisma.revenueSource.count({
     *   where: {
     *     // ... the filter for the RevenueSources we want to count
     *   }
     * })
    **/
    count<T extends RevenueSourceCountArgs>(
      args?: Subset<T, RevenueSourceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RevenueSourceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RevenueSource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevenueSourceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RevenueSourceAggregateArgs>(args: Subset<T, RevenueSourceAggregateArgs>): Prisma.PrismaPromise<GetRevenueSourceAggregateType<T>>

    /**
     * Group by RevenueSource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevenueSourceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RevenueSourceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RevenueSourceGroupByArgs['orderBy'] }
        : { orderBy?: RevenueSourceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RevenueSourceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRevenueSourceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RevenueSource model
   */
  readonly fields: RevenueSourceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RevenueSource.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RevenueSourceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    simulation<T extends SimulationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SimulationDefaultArgs<ExtArgs>>): Prisma__SimulationClient<$Result.GetResult<Prisma.$SimulationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RevenueSource model
   */
  interface RevenueSourceFieldRefs {
    readonly id: FieldRef<"RevenueSource", 'String'>
    readonly simulationId: FieldRef<"RevenueSource", 'String'>
    readonly name: FieldRef<"RevenueSource", 'String'>
    readonly amount: FieldRef<"RevenueSource", 'Float'>
    readonly tag: FieldRef<"RevenueSource", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RevenueSource findUnique
   */
  export type RevenueSourceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevenueSource
     */
    select?: RevenueSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevenueSource
     */
    omit?: RevenueSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevenueSourceInclude<ExtArgs> | null
    /**
     * Filter, which RevenueSource to fetch.
     */
    where: RevenueSourceWhereUniqueInput
  }

  /**
   * RevenueSource findUniqueOrThrow
   */
  export type RevenueSourceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevenueSource
     */
    select?: RevenueSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevenueSource
     */
    omit?: RevenueSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevenueSourceInclude<ExtArgs> | null
    /**
     * Filter, which RevenueSource to fetch.
     */
    where: RevenueSourceWhereUniqueInput
  }

  /**
   * RevenueSource findFirst
   */
  export type RevenueSourceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevenueSource
     */
    select?: RevenueSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevenueSource
     */
    omit?: RevenueSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevenueSourceInclude<ExtArgs> | null
    /**
     * Filter, which RevenueSource to fetch.
     */
    where?: RevenueSourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RevenueSources to fetch.
     */
    orderBy?: RevenueSourceOrderByWithRelationInput | RevenueSourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RevenueSources.
     */
    cursor?: RevenueSourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RevenueSources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RevenueSources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RevenueSources.
     */
    distinct?: RevenueSourceScalarFieldEnum | RevenueSourceScalarFieldEnum[]
  }

  /**
   * RevenueSource findFirstOrThrow
   */
  export type RevenueSourceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevenueSource
     */
    select?: RevenueSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevenueSource
     */
    omit?: RevenueSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevenueSourceInclude<ExtArgs> | null
    /**
     * Filter, which RevenueSource to fetch.
     */
    where?: RevenueSourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RevenueSources to fetch.
     */
    orderBy?: RevenueSourceOrderByWithRelationInput | RevenueSourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RevenueSources.
     */
    cursor?: RevenueSourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RevenueSources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RevenueSources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RevenueSources.
     */
    distinct?: RevenueSourceScalarFieldEnum | RevenueSourceScalarFieldEnum[]
  }

  /**
   * RevenueSource findMany
   */
  export type RevenueSourceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevenueSource
     */
    select?: RevenueSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevenueSource
     */
    omit?: RevenueSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevenueSourceInclude<ExtArgs> | null
    /**
     * Filter, which RevenueSources to fetch.
     */
    where?: RevenueSourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RevenueSources to fetch.
     */
    orderBy?: RevenueSourceOrderByWithRelationInput | RevenueSourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RevenueSources.
     */
    cursor?: RevenueSourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RevenueSources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RevenueSources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RevenueSources.
     */
    distinct?: RevenueSourceScalarFieldEnum | RevenueSourceScalarFieldEnum[]
  }

  /**
   * RevenueSource create
   */
  export type RevenueSourceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevenueSource
     */
    select?: RevenueSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevenueSource
     */
    omit?: RevenueSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevenueSourceInclude<ExtArgs> | null
    /**
     * The data needed to create a RevenueSource.
     */
    data: XOR<RevenueSourceCreateInput, RevenueSourceUncheckedCreateInput>
  }

  /**
   * RevenueSource createMany
   */
  export type RevenueSourceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RevenueSources.
     */
    data: RevenueSourceCreateManyInput | RevenueSourceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RevenueSource createManyAndReturn
   */
  export type RevenueSourceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevenueSource
     */
    select?: RevenueSourceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RevenueSource
     */
    omit?: RevenueSourceOmit<ExtArgs> | null
    /**
     * The data used to create many RevenueSources.
     */
    data: RevenueSourceCreateManyInput | RevenueSourceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevenueSourceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RevenueSource update
   */
  export type RevenueSourceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevenueSource
     */
    select?: RevenueSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevenueSource
     */
    omit?: RevenueSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevenueSourceInclude<ExtArgs> | null
    /**
     * The data needed to update a RevenueSource.
     */
    data: XOR<RevenueSourceUpdateInput, RevenueSourceUncheckedUpdateInput>
    /**
     * Choose, which RevenueSource to update.
     */
    where: RevenueSourceWhereUniqueInput
  }

  /**
   * RevenueSource updateMany
   */
  export type RevenueSourceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RevenueSources.
     */
    data: XOR<RevenueSourceUpdateManyMutationInput, RevenueSourceUncheckedUpdateManyInput>
    /**
     * Filter which RevenueSources to update
     */
    where?: RevenueSourceWhereInput
    /**
     * Limit how many RevenueSources to update.
     */
    limit?: number
  }

  /**
   * RevenueSource updateManyAndReturn
   */
  export type RevenueSourceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevenueSource
     */
    select?: RevenueSourceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RevenueSource
     */
    omit?: RevenueSourceOmit<ExtArgs> | null
    /**
     * The data used to update RevenueSources.
     */
    data: XOR<RevenueSourceUpdateManyMutationInput, RevenueSourceUncheckedUpdateManyInput>
    /**
     * Filter which RevenueSources to update
     */
    where?: RevenueSourceWhereInput
    /**
     * Limit how many RevenueSources to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevenueSourceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RevenueSource upsert
   */
  export type RevenueSourceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevenueSource
     */
    select?: RevenueSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevenueSource
     */
    omit?: RevenueSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevenueSourceInclude<ExtArgs> | null
    /**
     * The filter to search for the RevenueSource to update in case it exists.
     */
    where: RevenueSourceWhereUniqueInput
    /**
     * In case the RevenueSource found by the `where` argument doesn't exist, create a new RevenueSource with this data.
     */
    create: XOR<RevenueSourceCreateInput, RevenueSourceUncheckedCreateInput>
    /**
     * In case the RevenueSource was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RevenueSourceUpdateInput, RevenueSourceUncheckedUpdateInput>
  }

  /**
   * RevenueSource delete
   */
  export type RevenueSourceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevenueSource
     */
    select?: RevenueSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevenueSource
     */
    omit?: RevenueSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevenueSourceInclude<ExtArgs> | null
    /**
     * Filter which RevenueSource to delete.
     */
    where: RevenueSourceWhereUniqueInput
  }

  /**
   * RevenueSource deleteMany
   */
  export type RevenueSourceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RevenueSources to delete
     */
    where?: RevenueSourceWhereInput
    /**
     * Limit how many RevenueSources to delete.
     */
    limit?: number
  }

  /**
   * RevenueSource without action
   */
  export type RevenueSourceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevenueSource
     */
    select?: RevenueSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevenueSource
     */
    omit?: RevenueSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevenueSourceInclude<ExtArgs> | null
  }


  /**
   * Model ExpenseItem
   */

  export type AggregateExpenseItem = {
    _count: ExpenseItemCountAggregateOutputType | null
    _avg: ExpenseItemAvgAggregateOutputType | null
    _sum: ExpenseItemSumAggregateOutputType | null
    _min: ExpenseItemMinAggregateOutputType | null
    _max: ExpenseItemMaxAggregateOutputType | null
  }

  export type ExpenseItemAvgAggregateOutputType = {
    amount: number | null
  }

  export type ExpenseItemSumAggregateOutputType = {
    amount: number | null
  }

  export type ExpenseItemMinAggregateOutputType = {
    id: string | null
    simulationId: string | null
    name: string | null
    amount: number | null
    tag: string | null
  }

  export type ExpenseItemMaxAggregateOutputType = {
    id: string | null
    simulationId: string | null
    name: string | null
    amount: number | null
    tag: string | null
  }

  export type ExpenseItemCountAggregateOutputType = {
    id: number
    simulationId: number
    name: number
    amount: number
    tag: number
    _all: number
  }


  export type ExpenseItemAvgAggregateInputType = {
    amount?: true
  }

  export type ExpenseItemSumAggregateInputType = {
    amount?: true
  }

  export type ExpenseItemMinAggregateInputType = {
    id?: true
    simulationId?: true
    name?: true
    amount?: true
    tag?: true
  }

  export type ExpenseItemMaxAggregateInputType = {
    id?: true
    simulationId?: true
    name?: true
    amount?: true
    tag?: true
  }

  export type ExpenseItemCountAggregateInputType = {
    id?: true
    simulationId?: true
    name?: true
    amount?: true
    tag?: true
    _all?: true
  }

  export type ExpenseItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExpenseItem to aggregate.
     */
    where?: ExpenseItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpenseItems to fetch.
     */
    orderBy?: ExpenseItemOrderByWithRelationInput | ExpenseItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExpenseItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpenseItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpenseItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExpenseItems
    **/
    _count?: true | ExpenseItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExpenseItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExpenseItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpenseItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpenseItemMaxAggregateInputType
  }

  export type GetExpenseItemAggregateType<T extends ExpenseItemAggregateArgs> = {
        [P in keyof T & keyof AggregateExpenseItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpenseItem[P]>
      : GetScalarType<T[P], AggregateExpenseItem[P]>
  }




  export type ExpenseItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseItemWhereInput
    orderBy?: ExpenseItemOrderByWithAggregationInput | ExpenseItemOrderByWithAggregationInput[]
    by: ExpenseItemScalarFieldEnum[] | ExpenseItemScalarFieldEnum
    having?: ExpenseItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpenseItemCountAggregateInputType | true
    _avg?: ExpenseItemAvgAggregateInputType
    _sum?: ExpenseItemSumAggregateInputType
    _min?: ExpenseItemMinAggregateInputType
    _max?: ExpenseItemMaxAggregateInputType
  }

  export type ExpenseItemGroupByOutputType = {
    id: string
    simulationId: string
    name: string
    amount: number
    tag: string | null
    _count: ExpenseItemCountAggregateOutputType | null
    _avg: ExpenseItemAvgAggregateOutputType | null
    _sum: ExpenseItemSumAggregateOutputType | null
    _min: ExpenseItemMinAggregateOutputType | null
    _max: ExpenseItemMaxAggregateOutputType | null
  }

  type GetExpenseItemGroupByPayload<T extends ExpenseItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpenseItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpenseItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpenseItemGroupByOutputType[P]>
            : GetScalarType<T[P], ExpenseItemGroupByOutputType[P]>
        }
      >
    >


  export type ExpenseItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    simulationId?: boolean
    name?: boolean
    amount?: boolean
    tag?: boolean
    simulation?: boolean | SimulationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expenseItem"]>

  export type ExpenseItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    simulationId?: boolean
    name?: boolean
    amount?: boolean
    tag?: boolean
    simulation?: boolean | SimulationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expenseItem"]>

  export type ExpenseItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    simulationId?: boolean
    name?: boolean
    amount?: boolean
    tag?: boolean
    simulation?: boolean | SimulationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expenseItem"]>

  export type ExpenseItemSelectScalar = {
    id?: boolean
    simulationId?: boolean
    name?: boolean
    amount?: boolean
    tag?: boolean
  }

  export type ExpenseItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "simulationId" | "name" | "amount" | "tag", ExtArgs["result"]["expenseItem"]>
  export type ExpenseItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    simulation?: boolean | SimulationDefaultArgs<ExtArgs>
  }
  export type ExpenseItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    simulation?: boolean | SimulationDefaultArgs<ExtArgs>
  }
  export type ExpenseItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    simulation?: boolean | SimulationDefaultArgs<ExtArgs>
  }

  export type $ExpenseItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExpenseItem"
    objects: {
      simulation: Prisma.$SimulationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      simulationId: string
      name: string
      amount: number
      tag: string | null
    }, ExtArgs["result"]["expenseItem"]>
    composites: {}
  }

  type ExpenseItemGetPayload<S extends boolean | null | undefined | ExpenseItemDefaultArgs> = $Result.GetResult<Prisma.$ExpenseItemPayload, S>

  type ExpenseItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExpenseItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExpenseItemCountAggregateInputType | true
    }

  export interface ExpenseItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExpenseItem'], meta: { name: 'ExpenseItem' } }
    /**
     * Find zero or one ExpenseItem that matches the filter.
     * @param {ExpenseItemFindUniqueArgs} args - Arguments to find a ExpenseItem
     * @example
     * // Get one ExpenseItem
     * const expenseItem = await prisma.expenseItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExpenseItemFindUniqueArgs>(args: SelectSubset<T, ExpenseItemFindUniqueArgs<ExtArgs>>): Prisma__ExpenseItemClient<$Result.GetResult<Prisma.$ExpenseItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExpenseItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExpenseItemFindUniqueOrThrowArgs} args - Arguments to find a ExpenseItem
     * @example
     * // Get one ExpenseItem
     * const expenseItem = await prisma.expenseItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExpenseItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ExpenseItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExpenseItemClient<$Result.GetResult<Prisma.$ExpenseItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExpenseItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseItemFindFirstArgs} args - Arguments to find a ExpenseItem
     * @example
     * // Get one ExpenseItem
     * const expenseItem = await prisma.expenseItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExpenseItemFindFirstArgs>(args?: SelectSubset<T, ExpenseItemFindFirstArgs<ExtArgs>>): Prisma__ExpenseItemClient<$Result.GetResult<Prisma.$ExpenseItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExpenseItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseItemFindFirstOrThrowArgs} args - Arguments to find a ExpenseItem
     * @example
     * // Get one ExpenseItem
     * const expenseItem = await prisma.expenseItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExpenseItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ExpenseItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExpenseItemClient<$Result.GetResult<Prisma.$ExpenseItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExpenseItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExpenseItems
     * const expenseItems = await prisma.expenseItem.findMany()
     * 
     * // Get first 10 ExpenseItems
     * const expenseItems = await prisma.expenseItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const expenseItemWithIdOnly = await prisma.expenseItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExpenseItemFindManyArgs>(args?: SelectSubset<T, ExpenseItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpenseItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExpenseItem.
     * @param {ExpenseItemCreateArgs} args - Arguments to create a ExpenseItem.
     * @example
     * // Create one ExpenseItem
     * const ExpenseItem = await prisma.expenseItem.create({
     *   data: {
     *     // ... data to create a ExpenseItem
     *   }
     * })
     * 
     */
    create<T extends ExpenseItemCreateArgs>(args: SelectSubset<T, ExpenseItemCreateArgs<ExtArgs>>): Prisma__ExpenseItemClient<$Result.GetResult<Prisma.$ExpenseItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExpenseItems.
     * @param {ExpenseItemCreateManyArgs} args - Arguments to create many ExpenseItems.
     * @example
     * // Create many ExpenseItems
     * const expenseItem = await prisma.expenseItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExpenseItemCreateManyArgs>(args?: SelectSubset<T, ExpenseItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExpenseItems and returns the data saved in the database.
     * @param {ExpenseItemCreateManyAndReturnArgs} args - Arguments to create many ExpenseItems.
     * @example
     * // Create many ExpenseItems
     * const expenseItem = await prisma.expenseItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExpenseItems and only return the `id`
     * const expenseItemWithIdOnly = await prisma.expenseItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExpenseItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ExpenseItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpenseItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExpenseItem.
     * @param {ExpenseItemDeleteArgs} args - Arguments to delete one ExpenseItem.
     * @example
     * // Delete one ExpenseItem
     * const ExpenseItem = await prisma.expenseItem.delete({
     *   where: {
     *     // ... filter to delete one ExpenseItem
     *   }
     * })
     * 
     */
    delete<T extends ExpenseItemDeleteArgs>(args: SelectSubset<T, ExpenseItemDeleteArgs<ExtArgs>>): Prisma__ExpenseItemClient<$Result.GetResult<Prisma.$ExpenseItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExpenseItem.
     * @param {ExpenseItemUpdateArgs} args - Arguments to update one ExpenseItem.
     * @example
     * // Update one ExpenseItem
     * const expenseItem = await prisma.expenseItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExpenseItemUpdateArgs>(args: SelectSubset<T, ExpenseItemUpdateArgs<ExtArgs>>): Prisma__ExpenseItemClient<$Result.GetResult<Prisma.$ExpenseItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExpenseItems.
     * @param {ExpenseItemDeleteManyArgs} args - Arguments to filter ExpenseItems to delete.
     * @example
     * // Delete a few ExpenseItems
     * const { count } = await prisma.expenseItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExpenseItemDeleteManyArgs>(args?: SelectSubset<T, ExpenseItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExpenseItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExpenseItems
     * const expenseItem = await prisma.expenseItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExpenseItemUpdateManyArgs>(args: SelectSubset<T, ExpenseItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExpenseItems and returns the data updated in the database.
     * @param {ExpenseItemUpdateManyAndReturnArgs} args - Arguments to update many ExpenseItems.
     * @example
     * // Update many ExpenseItems
     * const expenseItem = await prisma.expenseItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExpenseItems and only return the `id`
     * const expenseItemWithIdOnly = await prisma.expenseItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExpenseItemUpdateManyAndReturnArgs>(args: SelectSubset<T, ExpenseItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpenseItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExpenseItem.
     * @param {ExpenseItemUpsertArgs} args - Arguments to update or create a ExpenseItem.
     * @example
     * // Update or create a ExpenseItem
     * const expenseItem = await prisma.expenseItem.upsert({
     *   create: {
     *     // ... data to create a ExpenseItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExpenseItem we want to update
     *   }
     * })
     */
    upsert<T extends ExpenseItemUpsertArgs>(args: SelectSubset<T, ExpenseItemUpsertArgs<ExtArgs>>): Prisma__ExpenseItemClient<$Result.GetResult<Prisma.$ExpenseItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExpenseItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseItemCountArgs} args - Arguments to filter ExpenseItems to count.
     * @example
     * // Count the number of ExpenseItems
     * const count = await prisma.expenseItem.count({
     *   where: {
     *     // ... the filter for the ExpenseItems we want to count
     *   }
     * })
    **/
    count<T extends ExpenseItemCountArgs>(
      args?: Subset<T, ExpenseItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpenseItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExpenseItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExpenseItemAggregateArgs>(args: Subset<T, ExpenseItemAggregateArgs>): Prisma.PrismaPromise<GetExpenseItemAggregateType<T>>

    /**
     * Group by ExpenseItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExpenseItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExpenseItemGroupByArgs['orderBy'] }
        : { orderBy?: ExpenseItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExpenseItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpenseItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExpenseItem model
   */
  readonly fields: ExpenseItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExpenseItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExpenseItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    simulation<T extends SimulationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SimulationDefaultArgs<ExtArgs>>): Prisma__SimulationClient<$Result.GetResult<Prisma.$SimulationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ExpenseItem model
   */
  interface ExpenseItemFieldRefs {
    readonly id: FieldRef<"ExpenseItem", 'String'>
    readonly simulationId: FieldRef<"ExpenseItem", 'String'>
    readonly name: FieldRef<"ExpenseItem", 'String'>
    readonly amount: FieldRef<"ExpenseItem", 'Float'>
    readonly tag: FieldRef<"ExpenseItem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ExpenseItem findUnique
   */
  export type ExpenseItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseItem
     */
    select?: ExpenseItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseItem
     */
    omit?: ExpenseItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseItemInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseItem to fetch.
     */
    where: ExpenseItemWhereUniqueInput
  }

  /**
   * ExpenseItem findUniqueOrThrow
   */
  export type ExpenseItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseItem
     */
    select?: ExpenseItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseItem
     */
    omit?: ExpenseItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseItemInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseItem to fetch.
     */
    where: ExpenseItemWhereUniqueInput
  }

  /**
   * ExpenseItem findFirst
   */
  export type ExpenseItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseItem
     */
    select?: ExpenseItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseItem
     */
    omit?: ExpenseItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseItemInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseItem to fetch.
     */
    where?: ExpenseItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpenseItems to fetch.
     */
    orderBy?: ExpenseItemOrderByWithRelationInput | ExpenseItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExpenseItems.
     */
    cursor?: ExpenseItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpenseItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpenseItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExpenseItems.
     */
    distinct?: ExpenseItemScalarFieldEnum | ExpenseItemScalarFieldEnum[]
  }

  /**
   * ExpenseItem findFirstOrThrow
   */
  export type ExpenseItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseItem
     */
    select?: ExpenseItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseItem
     */
    omit?: ExpenseItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseItemInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseItem to fetch.
     */
    where?: ExpenseItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpenseItems to fetch.
     */
    orderBy?: ExpenseItemOrderByWithRelationInput | ExpenseItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExpenseItems.
     */
    cursor?: ExpenseItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpenseItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpenseItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExpenseItems.
     */
    distinct?: ExpenseItemScalarFieldEnum | ExpenseItemScalarFieldEnum[]
  }

  /**
   * ExpenseItem findMany
   */
  export type ExpenseItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseItem
     */
    select?: ExpenseItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseItem
     */
    omit?: ExpenseItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseItemInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseItems to fetch.
     */
    where?: ExpenseItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpenseItems to fetch.
     */
    orderBy?: ExpenseItemOrderByWithRelationInput | ExpenseItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExpenseItems.
     */
    cursor?: ExpenseItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpenseItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpenseItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExpenseItems.
     */
    distinct?: ExpenseItemScalarFieldEnum | ExpenseItemScalarFieldEnum[]
  }

  /**
   * ExpenseItem create
   */
  export type ExpenseItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseItem
     */
    select?: ExpenseItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseItem
     */
    omit?: ExpenseItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseItemInclude<ExtArgs> | null
    /**
     * The data needed to create a ExpenseItem.
     */
    data: XOR<ExpenseItemCreateInput, ExpenseItemUncheckedCreateInput>
  }

  /**
   * ExpenseItem createMany
   */
  export type ExpenseItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExpenseItems.
     */
    data: ExpenseItemCreateManyInput | ExpenseItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExpenseItem createManyAndReturn
   */
  export type ExpenseItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseItem
     */
    select?: ExpenseItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseItem
     */
    omit?: ExpenseItemOmit<ExtArgs> | null
    /**
     * The data used to create many ExpenseItems.
     */
    data: ExpenseItemCreateManyInput | ExpenseItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExpenseItem update
   */
  export type ExpenseItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseItem
     */
    select?: ExpenseItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseItem
     */
    omit?: ExpenseItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseItemInclude<ExtArgs> | null
    /**
     * The data needed to update a ExpenseItem.
     */
    data: XOR<ExpenseItemUpdateInput, ExpenseItemUncheckedUpdateInput>
    /**
     * Choose, which ExpenseItem to update.
     */
    where: ExpenseItemWhereUniqueInput
  }

  /**
   * ExpenseItem updateMany
   */
  export type ExpenseItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExpenseItems.
     */
    data: XOR<ExpenseItemUpdateManyMutationInput, ExpenseItemUncheckedUpdateManyInput>
    /**
     * Filter which ExpenseItems to update
     */
    where?: ExpenseItemWhereInput
    /**
     * Limit how many ExpenseItems to update.
     */
    limit?: number
  }

  /**
   * ExpenseItem updateManyAndReturn
   */
  export type ExpenseItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseItem
     */
    select?: ExpenseItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseItem
     */
    omit?: ExpenseItemOmit<ExtArgs> | null
    /**
     * The data used to update ExpenseItems.
     */
    data: XOR<ExpenseItemUpdateManyMutationInput, ExpenseItemUncheckedUpdateManyInput>
    /**
     * Filter which ExpenseItems to update
     */
    where?: ExpenseItemWhereInput
    /**
     * Limit how many ExpenseItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExpenseItem upsert
   */
  export type ExpenseItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseItem
     */
    select?: ExpenseItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseItem
     */
    omit?: ExpenseItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseItemInclude<ExtArgs> | null
    /**
     * The filter to search for the ExpenseItem to update in case it exists.
     */
    where: ExpenseItemWhereUniqueInput
    /**
     * In case the ExpenseItem found by the `where` argument doesn't exist, create a new ExpenseItem with this data.
     */
    create: XOR<ExpenseItemCreateInput, ExpenseItemUncheckedCreateInput>
    /**
     * In case the ExpenseItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExpenseItemUpdateInput, ExpenseItemUncheckedUpdateInput>
  }

  /**
   * ExpenseItem delete
   */
  export type ExpenseItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseItem
     */
    select?: ExpenseItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseItem
     */
    omit?: ExpenseItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseItemInclude<ExtArgs> | null
    /**
     * Filter which ExpenseItem to delete.
     */
    where: ExpenseItemWhereUniqueInput
  }

  /**
   * ExpenseItem deleteMany
   */
  export type ExpenseItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExpenseItems to delete
     */
    where?: ExpenseItemWhereInput
    /**
     * Limit how many ExpenseItems to delete.
     */
    limit?: number
  }

  /**
   * ExpenseItem without action
   */
  export type ExpenseItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseItem
     */
    select?: ExpenseItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseItem
     */
    omit?: ExpenseItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseItemInclude<ExtArgs> | null
  }


  /**
   * Model Classroom
   */

  export type AggregateClassroom = {
    _count: ClassroomCountAggregateOutputType | null
    _avg: ClassroomAvgAggregateOutputType | null
    _sum: ClassroomSumAggregateOutputType | null
    _min: ClassroomMinAggregateOutputType | null
    _max: ClassroomMaxAggregateOutputType | null
  }

  export type ClassroomAvgAggregateOutputType = {
    capacity: number | null
    staffRatio: number | null
    enrolled: number | null
  }

  export type ClassroomSumAggregateOutputType = {
    capacity: number | null
    staffRatio: number | null
    enrolled: number | null
  }

  export type ClassroomMinAggregateOutputType = {
    id: string | null
    simulationId: string | null
    name: string | null
    capacity: number | null
    staffRatio: number | null
    enrolled: number | null
  }

  export type ClassroomMaxAggregateOutputType = {
    id: string | null
    simulationId: string | null
    name: string | null
    capacity: number | null
    staffRatio: number | null
    enrolled: number | null
  }

  export type ClassroomCountAggregateOutputType = {
    id: number
    simulationId: number
    name: number
    capacity: number
    staffRatio: number
    enrolled: number
    _all: number
  }


  export type ClassroomAvgAggregateInputType = {
    capacity?: true
    staffRatio?: true
    enrolled?: true
  }

  export type ClassroomSumAggregateInputType = {
    capacity?: true
    staffRatio?: true
    enrolled?: true
  }

  export type ClassroomMinAggregateInputType = {
    id?: true
    simulationId?: true
    name?: true
    capacity?: true
    staffRatio?: true
    enrolled?: true
  }

  export type ClassroomMaxAggregateInputType = {
    id?: true
    simulationId?: true
    name?: true
    capacity?: true
    staffRatio?: true
    enrolled?: true
  }

  export type ClassroomCountAggregateInputType = {
    id?: true
    simulationId?: true
    name?: true
    capacity?: true
    staffRatio?: true
    enrolled?: true
    _all?: true
  }

  export type ClassroomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Classroom to aggregate.
     */
    where?: ClassroomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classrooms to fetch.
     */
    orderBy?: ClassroomOrderByWithRelationInput | ClassroomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClassroomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classrooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classrooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Classrooms
    **/
    _count?: true | ClassroomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClassroomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClassroomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassroomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassroomMaxAggregateInputType
  }

  export type GetClassroomAggregateType<T extends ClassroomAggregateArgs> = {
        [P in keyof T & keyof AggregateClassroom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClassroom[P]>
      : GetScalarType<T[P], AggregateClassroom[P]>
  }




  export type ClassroomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassroomWhereInput
    orderBy?: ClassroomOrderByWithAggregationInput | ClassroomOrderByWithAggregationInput[]
    by: ClassroomScalarFieldEnum[] | ClassroomScalarFieldEnum
    having?: ClassroomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassroomCountAggregateInputType | true
    _avg?: ClassroomAvgAggregateInputType
    _sum?: ClassroomSumAggregateInputType
    _min?: ClassroomMinAggregateInputType
    _max?: ClassroomMaxAggregateInputType
  }

  export type ClassroomGroupByOutputType = {
    id: string
    simulationId: string
    name: string
    capacity: number
    staffRatio: number
    enrolled: number
    _count: ClassroomCountAggregateOutputType | null
    _avg: ClassroomAvgAggregateOutputType | null
    _sum: ClassroomSumAggregateOutputType | null
    _min: ClassroomMinAggregateOutputType | null
    _max: ClassroomMaxAggregateOutputType | null
  }

  type GetClassroomGroupByPayload<T extends ClassroomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassroomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassroomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassroomGroupByOutputType[P]>
            : GetScalarType<T[P], ClassroomGroupByOutputType[P]>
        }
      >
    >


  export type ClassroomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    simulationId?: boolean
    name?: boolean
    capacity?: boolean
    staffRatio?: boolean
    enrolled?: boolean
    simulation?: boolean | SimulationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classroom"]>

  export type ClassroomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    simulationId?: boolean
    name?: boolean
    capacity?: boolean
    staffRatio?: boolean
    enrolled?: boolean
    simulation?: boolean | SimulationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classroom"]>

  export type ClassroomSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    simulationId?: boolean
    name?: boolean
    capacity?: boolean
    staffRatio?: boolean
    enrolled?: boolean
    simulation?: boolean | SimulationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classroom"]>

  export type ClassroomSelectScalar = {
    id?: boolean
    simulationId?: boolean
    name?: boolean
    capacity?: boolean
    staffRatio?: boolean
    enrolled?: boolean
  }

  export type ClassroomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "simulationId" | "name" | "capacity" | "staffRatio" | "enrolled", ExtArgs["result"]["classroom"]>
  export type ClassroomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    simulation?: boolean | SimulationDefaultArgs<ExtArgs>
  }
  export type ClassroomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    simulation?: boolean | SimulationDefaultArgs<ExtArgs>
  }
  export type ClassroomIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    simulation?: boolean | SimulationDefaultArgs<ExtArgs>
  }

  export type $ClassroomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Classroom"
    objects: {
      simulation: Prisma.$SimulationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      simulationId: string
      name: string
      capacity: number
      staffRatio: number
      enrolled: number
    }, ExtArgs["result"]["classroom"]>
    composites: {}
  }

  type ClassroomGetPayload<S extends boolean | null | undefined | ClassroomDefaultArgs> = $Result.GetResult<Prisma.$ClassroomPayload, S>

  type ClassroomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClassroomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClassroomCountAggregateInputType | true
    }

  export interface ClassroomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Classroom'], meta: { name: 'Classroom' } }
    /**
     * Find zero or one Classroom that matches the filter.
     * @param {ClassroomFindUniqueArgs} args - Arguments to find a Classroom
     * @example
     * // Get one Classroom
     * const classroom = await prisma.classroom.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClassroomFindUniqueArgs>(args: SelectSubset<T, ClassroomFindUniqueArgs<ExtArgs>>): Prisma__ClassroomClient<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Classroom that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClassroomFindUniqueOrThrowArgs} args - Arguments to find a Classroom
     * @example
     * // Get one Classroom
     * const classroom = await prisma.classroom.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClassroomFindUniqueOrThrowArgs>(args: SelectSubset<T, ClassroomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClassroomClient<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Classroom that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomFindFirstArgs} args - Arguments to find a Classroom
     * @example
     * // Get one Classroom
     * const classroom = await prisma.classroom.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClassroomFindFirstArgs>(args?: SelectSubset<T, ClassroomFindFirstArgs<ExtArgs>>): Prisma__ClassroomClient<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Classroom that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomFindFirstOrThrowArgs} args - Arguments to find a Classroom
     * @example
     * // Get one Classroom
     * const classroom = await prisma.classroom.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClassroomFindFirstOrThrowArgs>(args?: SelectSubset<T, ClassroomFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClassroomClient<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Classrooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Classrooms
     * const classrooms = await prisma.classroom.findMany()
     * 
     * // Get first 10 Classrooms
     * const classrooms = await prisma.classroom.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classroomWithIdOnly = await prisma.classroom.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClassroomFindManyArgs>(args?: SelectSubset<T, ClassroomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Classroom.
     * @param {ClassroomCreateArgs} args - Arguments to create a Classroom.
     * @example
     * // Create one Classroom
     * const Classroom = await prisma.classroom.create({
     *   data: {
     *     // ... data to create a Classroom
     *   }
     * })
     * 
     */
    create<T extends ClassroomCreateArgs>(args: SelectSubset<T, ClassroomCreateArgs<ExtArgs>>): Prisma__ClassroomClient<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Classrooms.
     * @param {ClassroomCreateManyArgs} args - Arguments to create many Classrooms.
     * @example
     * // Create many Classrooms
     * const classroom = await prisma.classroom.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClassroomCreateManyArgs>(args?: SelectSubset<T, ClassroomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Classrooms and returns the data saved in the database.
     * @param {ClassroomCreateManyAndReturnArgs} args - Arguments to create many Classrooms.
     * @example
     * // Create many Classrooms
     * const classroom = await prisma.classroom.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Classrooms and only return the `id`
     * const classroomWithIdOnly = await prisma.classroom.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClassroomCreateManyAndReturnArgs>(args?: SelectSubset<T, ClassroomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Classroom.
     * @param {ClassroomDeleteArgs} args - Arguments to delete one Classroom.
     * @example
     * // Delete one Classroom
     * const Classroom = await prisma.classroom.delete({
     *   where: {
     *     // ... filter to delete one Classroom
     *   }
     * })
     * 
     */
    delete<T extends ClassroomDeleteArgs>(args: SelectSubset<T, ClassroomDeleteArgs<ExtArgs>>): Prisma__ClassroomClient<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Classroom.
     * @param {ClassroomUpdateArgs} args - Arguments to update one Classroom.
     * @example
     * // Update one Classroom
     * const classroom = await prisma.classroom.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClassroomUpdateArgs>(args: SelectSubset<T, ClassroomUpdateArgs<ExtArgs>>): Prisma__ClassroomClient<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Classrooms.
     * @param {ClassroomDeleteManyArgs} args - Arguments to filter Classrooms to delete.
     * @example
     * // Delete a few Classrooms
     * const { count } = await prisma.classroom.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClassroomDeleteManyArgs>(args?: SelectSubset<T, ClassroomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classrooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Classrooms
     * const classroom = await prisma.classroom.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClassroomUpdateManyArgs>(args: SelectSubset<T, ClassroomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classrooms and returns the data updated in the database.
     * @param {ClassroomUpdateManyAndReturnArgs} args - Arguments to update many Classrooms.
     * @example
     * // Update many Classrooms
     * const classroom = await prisma.classroom.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Classrooms and only return the `id`
     * const classroomWithIdOnly = await prisma.classroom.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClassroomUpdateManyAndReturnArgs>(args: SelectSubset<T, ClassroomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Classroom.
     * @param {ClassroomUpsertArgs} args - Arguments to update or create a Classroom.
     * @example
     * // Update or create a Classroom
     * const classroom = await prisma.classroom.upsert({
     *   create: {
     *     // ... data to create a Classroom
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Classroom we want to update
     *   }
     * })
     */
    upsert<T extends ClassroomUpsertArgs>(args: SelectSubset<T, ClassroomUpsertArgs<ExtArgs>>): Prisma__ClassroomClient<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Classrooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomCountArgs} args - Arguments to filter Classrooms to count.
     * @example
     * // Count the number of Classrooms
     * const count = await prisma.classroom.count({
     *   where: {
     *     // ... the filter for the Classrooms we want to count
     *   }
     * })
    **/
    count<T extends ClassroomCountArgs>(
      args?: Subset<T, ClassroomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassroomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Classroom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClassroomAggregateArgs>(args: Subset<T, ClassroomAggregateArgs>): Prisma.PrismaPromise<GetClassroomAggregateType<T>>

    /**
     * Group by Classroom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClassroomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassroomGroupByArgs['orderBy'] }
        : { orderBy?: ClassroomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClassroomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassroomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Classroom model
   */
  readonly fields: ClassroomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Classroom.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClassroomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    simulation<T extends SimulationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SimulationDefaultArgs<ExtArgs>>): Prisma__SimulationClient<$Result.GetResult<Prisma.$SimulationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Classroom model
   */
  interface ClassroomFieldRefs {
    readonly id: FieldRef<"Classroom", 'String'>
    readonly simulationId: FieldRef<"Classroom", 'String'>
    readonly name: FieldRef<"Classroom", 'String'>
    readonly capacity: FieldRef<"Classroom", 'Int'>
    readonly staffRatio: FieldRef<"Classroom", 'Float'>
    readonly enrolled: FieldRef<"Classroom", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Classroom findUnique
   */
  export type ClassroomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomInclude<ExtArgs> | null
    /**
     * Filter, which Classroom to fetch.
     */
    where: ClassroomWhereUniqueInput
  }

  /**
   * Classroom findUniqueOrThrow
   */
  export type ClassroomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomInclude<ExtArgs> | null
    /**
     * Filter, which Classroom to fetch.
     */
    where: ClassroomWhereUniqueInput
  }

  /**
   * Classroom findFirst
   */
  export type ClassroomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomInclude<ExtArgs> | null
    /**
     * Filter, which Classroom to fetch.
     */
    where?: ClassroomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classrooms to fetch.
     */
    orderBy?: ClassroomOrderByWithRelationInput | ClassroomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classrooms.
     */
    cursor?: ClassroomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classrooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classrooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classrooms.
     */
    distinct?: ClassroomScalarFieldEnum | ClassroomScalarFieldEnum[]
  }

  /**
   * Classroom findFirstOrThrow
   */
  export type ClassroomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomInclude<ExtArgs> | null
    /**
     * Filter, which Classroom to fetch.
     */
    where?: ClassroomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classrooms to fetch.
     */
    orderBy?: ClassroomOrderByWithRelationInput | ClassroomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classrooms.
     */
    cursor?: ClassroomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classrooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classrooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classrooms.
     */
    distinct?: ClassroomScalarFieldEnum | ClassroomScalarFieldEnum[]
  }

  /**
   * Classroom findMany
   */
  export type ClassroomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomInclude<ExtArgs> | null
    /**
     * Filter, which Classrooms to fetch.
     */
    where?: ClassroomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classrooms to fetch.
     */
    orderBy?: ClassroomOrderByWithRelationInput | ClassroomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Classrooms.
     */
    cursor?: ClassroomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classrooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classrooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classrooms.
     */
    distinct?: ClassroomScalarFieldEnum | ClassroomScalarFieldEnum[]
  }

  /**
   * Classroom create
   */
  export type ClassroomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomInclude<ExtArgs> | null
    /**
     * The data needed to create a Classroom.
     */
    data: XOR<ClassroomCreateInput, ClassroomUncheckedCreateInput>
  }

  /**
   * Classroom createMany
   */
  export type ClassroomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Classrooms.
     */
    data: ClassroomCreateManyInput | ClassroomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Classroom createManyAndReturn
   */
  export type ClassroomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * The data used to create many Classrooms.
     */
    data: ClassroomCreateManyInput | ClassroomCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Classroom update
   */
  export type ClassroomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomInclude<ExtArgs> | null
    /**
     * The data needed to update a Classroom.
     */
    data: XOR<ClassroomUpdateInput, ClassroomUncheckedUpdateInput>
    /**
     * Choose, which Classroom to update.
     */
    where: ClassroomWhereUniqueInput
  }

  /**
   * Classroom updateMany
   */
  export type ClassroomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Classrooms.
     */
    data: XOR<ClassroomUpdateManyMutationInput, ClassroomUncheckedUpdateManyInput>
    /**
     * Filter which Classrooms to update
     */
    where?: ClassroomWhereInput
    /**
     * Limit how many Classrooms to update.
     */
    limit?: number
  }

  /**
   * Classroom updateManyAndReturn
   */
  export type ClassroomUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * The data used to update Classrooms.
     */
    data: XOR<ClassroomUpdateManyMutationInput, ClassroomUncheckedUpdateManyInput>
    /**
     * Filter which Classrooms to update
     */
    where?: ClassroomWhereInput
    /**
     * Limit how many Classrooms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Classroom upsert
   */
  export type ClassroomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomInclude<ExtArgs> | null
    /**
     * The filter to search for the Classroom to update in case it exists.
     */
    where: ClassroomWhereUniqueInput
    /**
     * In case the Classroom found by the `where` argument doesn't exist, create a new Classroom with this data.
     */
    create: XOR<ClassroomCreateInput, ClassroomUncheckedCreateInput>
    /**
     * In case the Classroom was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClassroomUpdateInput, ClassroomUncheckedUpdateInput>
  }

  /**
   * Classroom delete
   */
  export type ClassroomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomInclude<ExtArgs> | null
    /**
     * Filter which Classroom to delete.
     */
    where: ClassroomWhereUniqueInput
  }

  /**
   * Classroom deleteMany
   */
  export type ClassroomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Classrooms to delete
     */
    where?: ClassroomWhereInput
    /**
     * Limit how many Classrooms to delete.
     */
    limit?: number
  }

  /**
   * Classroom without action
   */
  export type ClassroomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomInclude<ExtArgs> | null
  }


  /**
   * Model BusinessGoal
   */

  export type AggregateBusinessGoal = {
    _count: BusinessGoalCountAggregateOutputType | null
    _avg: BusinessGoalAvgAggregateOutputType | null
    _sum: BusinessGoalSumAggregateOutputType | null
    _min: BusinessGoalMinAggregateOutputType | null
    _max: BusinessGoalMaxAggregateOutputType | null
  }

  export type BusinessGoalAvgAggregateOutputType = {
    targetValue: number | null
  }

  export type BusinessGoalSumAggregateOutputType = {
    targetValue: number | null
  }

  export type BusinessGoalMinAggregateOutputType = {
    id: string | null
    simulationId: string | null
    name: string | null
    targetValue: number | null
    unit: string | null
  }

  export type BusinessGoalMaxAggregateOutputType = {
    id: string | null
    simulationId: string | null
    name: string | null
    targetValue: number | null
    unit: string | null
  }

  export type BusinessGoalCountAggregateOutputType = {
    id: number
    simulationId: number
    name: number
    targetValue: number
    unit: number
    _all: number
  }


  export type BusinessGoalAvgAggregateInputType = {
    targetValue?: true
  }

  export type BusinessGoalSumAggregateInputType = {
    targetValue?: true
  }

  export type BusinessGoalMinAggregateInputType = {
    id?: true
    simulationId?: true
    name?: true
    targetValue?: true
    unit?: true
  }

  export type BusinessGoalMaxAggregateInputType = {
    id?: true
    simulationId?: true
    name?: true
    targetValue?: true
    unit?: true
  }

  export type BusinessGoalCountAggregateInputType = {
    id?: true
    simulationId?: true
    name?: true
    targetValue?: true
    unit?: true
    _all?: true
  }

  export type BusinessGoalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BusinessGoal to aggregate.
     */
    where?: BusinessGoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessGoals to fetch.
     */
    orderBy?: BusinessGoalOrderByWithRelationInput | BusinessGoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BusinessGoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessGoals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessGoals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BusinessGoals
    **/
    _count?: true | BusinessGoalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BusinessGoalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BusinessGoalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BusinessGoalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BusinessGoalMaxAggregateInputType
  }

  export type GetBusinessGoalAggregateType<T extends BusinessGoalAggregateArgs> = {
        [P in keyof T & keyof AggregateBusinessGoal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBusinessGoal[P]>
      : GetScalarType<T[P], AggregateBusinessGoal[P]>
  }




  export type BusinessGoalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusinessGoalWhereInput
    orderBy?: BusinessGoalOrderByWithAggregationInput | BusinessGoalOrderByWithAggregationInput[]
    by: BusinessGoalScalarFieldEnum[] | BusinessGoalScalarFieldEnum
    having?: BusinessGoalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BusinessGoalCountAggregateInputType | true
    _avg?: BusinessGoalAvgAggregateInputType
    _sum?: BusinessGoalSumAggregateInputType
    _min?: BusinessGoalMinAggregateInputType
    _max?: BusinessGoalMaxAggregateInputType
  }

  export type BusinessGoalGroupByOutputType = {
    id: string
    simulationId: string
    name: string
    targetValue: number
    unit: string
    _count: BusinessGoalCountAggregateOutputType | null
    _avg: BusinessGoalAvgAggregateOutputType | null
    _sum: BusinessGoalSumAggregateOutputType | null
    _min: BusinessGoalMinAggregateOutputType | null
    _max: BusinessGoalMaxAggregateOutputType | null
  }

  type GetBusinessGoalGroupByPayload<T extends BusinessGoalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BusinessGoalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BusinessGoalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BusinessGoalGroupByOutputType[P]>
            : GetScalarType<T[P], BusinessGoalGroupByOutputType[P]>
        }
      >
    >


  export type BusinessGoalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    simulationId?: boolean
    name?: boolean
    targetValue?: boolean
    unit?: boolean
    simulation?: boolean | SimulationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["businessGoal"]>

  export type BusinessGoalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    simulationId?: boolean
    name?: boolean
    targetValue?: boolean
    unit?: boolean
    simulation?: boolean | SimulationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["businessGoal"]>

  export type BusinessGoalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    simulationId?: boolean
    name?: boolean
    targetValue?: boolean
    unit?: boolean
    simulation?: boolean | SimulationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["businessGoal"]>

  export type BusinessGoalSelectScalar = {
    id?: boolean
    simulationId?: boolean
    name?: boolean
    targetValue?: boolean
    unit?: boolean
  }

  export type BusinessGoalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "simulationId" | "name" | "targetValue" | "unit", ExtArgs["result"]["businessGoal"]>
  export type BusinessGoalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    simulation?: boolean | SimulationDefaultArgs<ExtArgs>
  }
  export type BusinessGoalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    simulation?: boolean | SimulationDefaultArgs<ExtArgs>
  }
  export type BusinessGoalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    simulation?: boolean | SimulationDefaultArgs<ExtArgs>
  }

  export type $BusinessGoalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BusinessGoal"
    objects: {
      simulation: Prisma.$SimulationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      simulationId: string
      name: string
      targetValue: number
      unit: string
    }, ExtArgs["result"]["businessGoal"]>
    composites: {}
  }

  type BusinessGoalGetPayload<S extends boolean | null | undefined | BusinessGoalDefaultArgs> = $Result.GetResult<Prisma.$BusinessGoalPayload, S>

  type BusinessGoalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BusinessGoalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BusinessGoalCountAggregateInputType | true
    }

  export interface BusinessGoalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BusinessGoal'], meta: { name: 'BusinessGoal' } }
    /**
     * Find zero or one BusinessGoal that matches the filter.
     * @param {BusinessGoalFindUniqueArgs} args - Arguments to find a BusinessGoal
     * @example
     * // Get one BusinessGoal
     * const businessGoal = await prisma.businessGoal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BusinessGoalFindUniqueArgs>(args: SelectSubset<T, BusinessGoalFindUniqueArgs<ExtArgs>>): Prisma__BusinessGoalClient<$Result.GetResult<Prisma.$BusinessGoalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BusinessGoal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BusinessGoalFindUniqueOrThrowArgs} args - Arguments to find a BusinessGoal
     * @example
     * // Get one BusinessGoal
     * const businessGoal = await prisma.businessGoal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BusinessGoalFindUniqueOrThrowArgs>(args: SelectSubset<T, BusinessGoalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BusinessGoalClient<$Result.GetResult<Prisma.$BusinessGoalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BusinessGoal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessGoalFindFirstArgs} args - Arguments to find a BusinessGoal
     * @example
     * // Get one BusinessGoal
     * const businessGoal = await prisma.businessGoal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BusinessGoalFindFirstArgs>(args?: SelectSubset<T, BusinessGoalFindFirstArgs<ExtArgs>>): Prisma__BusinessGoalClient<$Result.GetResult<Prisma.$BusinessGoalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BusinessGoal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessGoalFindFirstOrThrowArgs} args - Arguments to find a BusinessGoal
     * @example
     * // Get one BusinessGoal
     * const businessGoal = await prisma.businessGoal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BusinessGoalFindFirstOrThrowArgs>(args?: SelectSubset<T, BusinessGoalFindFirstOrThrowArgs<ExtArgs>>): Prisma__BusinessGoalClient<$Result.GetResult<Prisma.$BusinessGoalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BusinessGoals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessGoalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BusinessGoals
     * const businessGoals = await prisma.businessGoal.findMany()
     * 
     * // Get first 10 BusinessGoals
     * const businessGoals = await prisma.businessGoal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const businessGoalWithIdOnly = await prisma.businessGoal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BusinessGoalFindManyArgs>(args?: SelectSubset<T, BusinessGoalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessGoalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BusinessGoal.
     * @param {BusinessGoalCreateArgs} args - Arguments to create a BusinessGoal.
     * @example
     * // Create one BusinessGoal
     * const BusinessGoal = await prisma.businessGoal.create({
     *   data: {
     *     // ... data to create a BusinessGoal
     *   }
     * })
     * 
     */
    create<T extends BusinessGoalCreateArgs>(args: SelectSubset<T, BusinessGoalCreateArgs<ExtArgs>>): Prisma__BusinessGoalClient<$Result.GetResult<Prisma.$BusinessGoalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BusinessGoals.
     * @param {BusinessGoalCreateManyArgs} args - Arguments to create many BusinessGoals.
     * @example
     * // Create many BusinessGoals
     * const businessGoal = await prisma.businessGoal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BusinessGoalCreateManyArgs>(args?: SelectSubset<T, BusinessGoalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BusinessGoals and returns the data saved in the database.
     * @param {BusinessGoalCreateManyAndReturnArgs} args - Arguments to create many BusinessGoals.
     * @example
     * // Create many BusinessGoals
     * const businessGoal = await prisma.businessGoal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BusinessGoals and only return the `id`
     * const businessGoalWithIdOnly = await prisma.businessGoal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BusinessGoalCreateManyAndReturnArgs>(args?: SelectSubset<T, BusinessGoalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessGoalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BusinessGoal.
     * @param {BusinessGoalDeleteArgs} args - Arguments to delete one BusinessGoal.
     * @example
     * // Delete one BusinessGoal
     * const BusinessGoal = await prisma.businessGoal.delete({
     *   where: {
     *     // ... filter to delete one BusinessGoal
     *   }
     * })
     * 
     */
    delete<T extends BusinessGoalDeleteArgs>(args: SelectSubset<T, BusinessGoalDeleteArgs<ExtArgs>>): Prisma__BusinessGoalClient<$Result.GetResult<Prisma.$BusinessGoalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BusinessGoal.
     * @param {BusinessGoalUpdateArgs} args - Arguments to update one BusinessGoal.
     * @example
     * // Update one BusinessGoal
     * const businessGoal = await prisma.businessGoal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BusinessGoalUpdateArgs>(args: SelectSubset<T, BusinessGoalUpdateArgs<ExtArgs>>): Prisma__BusinessGoalClient<$Result.GetResult<Prisma.$BusinessGoalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BusinessGoals.
     * @param {BusinessGoalDeleteManyArgs} args - Arguments to filter BusinessGoals to delete.
     * @example
     * // Delete a few BusinessGoals
     * const { count } = await prisma.businessGoal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BusinessGoalDeleteManyArgs>(args?: SelectSubset<T, BusinessGoalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BusinessGoals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessGoalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BusinessGoals
     * const businessGoal = await prisma.businessGoal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BusinessGoalUpdateManyArgs>(args: SelectSubset<T, BusinessGoalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BusinessGoals and returns the data updated in the database.
     * @param {BusinessGoalUpdateManyAndReturnArgs} args - Arguments to update many BusinessGoals.
     * @example
     * // Update many BusinessGoals
     * const businessGoal = await prisma.businessGoal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BusinessGoals and only return the `id`
     * const businessGoalWithIdOnly = await prisma.businessGoal.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BusinessGoalUpdateManyAndReturnArgs>(args: SelectSubset<T, BusinessGoalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessGoalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BusinessGoal.
     * @param {BusinessGoalUpsertArgs} args - Arguments to update or create a BusinessGoal.
     * @example
     * // Update or create a BusinessGoal
     * const businessGoal = await prisma.businessGoal.upsert({
     *   create: {
     *     // ... data to create a BusinessGoal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BusinessGoal we want to update
     *   }
     * })
     */
    upsert<T extends BusinessGoalUpsertArgs>(args: SelectSubset<T, BusinessGoalUpsertArgs<ExtArgs>>): Prisma__BusinessGoalClient<$Result.GetResult<Prisma.$BusinessGoalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BusinessGoals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessGoalCountArgs} args - Arguments to filter BusinessGoals to count.
     * @example
     * // Count the number of BusinessGoals
     * const count = await prisma.businessGoal.count({
     *   where: {
     *     // ... the filter for the BusinessGoals we want to count
     *   }
     * })
    **/
    count<T extends BusinessGoalCountArgs>(
      args?: Subset<T, BusinessGoalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusinessGoalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BusinessGoal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessGoalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BusinessGoalAggregateArgs>(args: Subset<T, BusinessGoalAggregateArgs>): Prisma.PrismaPromise<GetBusinessGoalAggregateType<T>>

    /**
     * Group by BusinessGoal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessGoalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BusinessGoalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BusinessGoalGroupByArgs['orderBy'] }
        : { orderBy?: BusinessGoalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BusinessGoalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusinessGoalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BusinessGoal model
   */
  readonly fields: BusinessGoalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BusinessGoal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BusinessGoalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    simulation<T extends SimulationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SimulationDefaultArgs<ExtArgs>>): Prisma__SimulationClient<$Result.GetResult<Prisma.$SimulationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BusinessGoal model
   */
  interface BusinessGoalFieldRefs {
    readonly id: FieldRef<"BusinessGoal", 'String'>
    readonly simulationId: FieldRef<"BusinessGoal", 'String'>
    readonly name: FieldRef<"BusinessGoal", 'String'>
    readonly targetValue: FieldRef<"BusinessGoal", 'Float'>
    readonly unit: FieldRef<"BusinessGoal", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BusinessGoal findUnique
   */
  export type BusinessGoalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessGoal
     */
    select?: BusinessGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessGoal
     */
    omit?: BusinessGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessGoalInclude<ExtArgs> | null
    /**
     * Filter, which BusinessGoal to fetch.
     */
    where: BusinessGoalWhereUniqueInput
  }

  /**
   * BusinessGoal findUniqueOrThrow
   */
  export type BusinessGoalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessGoal
     */
    select?: BusinessGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessGoal
     */
    omit?: BusinessGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessGoalInclude<ExtArgs> | null
    /**
     * Filter, which BusinessGoal to fetch.
     */
    where: BusinessGoalWhereUniqueInput
  }

  /**
   * BusinessGoal findFirst
   */
  export type BusinessGoalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessGoal
     */
    select?: BusinessGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessGoal
     */
    omit?: BusinessGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessGoalInclude<ExtArgs> | null
    /**
     * Filter, which BusinessGoal to fetch.
     */
    where?: BusinessGoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessGoals to fetch.
     */
    orderBy?: BusinessGoalOrderByWithRelationInput | BusinessGoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusinessGoals.
     */
    cursor?: BusinessGoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessGoals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessGoals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessGoals.
     */
    distinct?: BusinessGoalScalarFieldEnum | BusinessGoalScalarFieldEnum[]
  }

  /**
   * BusinessGoal findFirstOrThrow
   */
  export type BusinessGoalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessGoal
     */
    select?: BusinessGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessGoal
     */
    omit?: BusinessGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessGoalInclude<ExtArgs> | null
    /**
     * Filter, which BusinessGoal to fetch.
     */
    where?: BusinessGoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessGoals to fetch.
     */
    orderBy?: BusinessGoalOrderByWithRelationInput | BusinessGoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusinessGoals.
     */
    cursor?: BusinessGoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessGoals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessGoals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessGoals.
     */
    distinct?: BusinessGoalScalarFieldEnum | BusinessGoalScalarFieldEnum[]
  }

  /**
   * BusinessGoal findMany
   */
  export type BusinessGoalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessGoal
     */
    select?: BusinessGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessGoal
     */
    omit?: BusinessGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessGoalInclude<ExtArgs> | null
    /**
     * Filter, which BusinessGoals to fetch.
     */
    where?: BusinessGoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessGoals to fetch.
     */
    orderBy?: BusinessGoalOrderByWithRelationInput | BusinessGoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BusinessGoals.
     */
    cursor?: BusinessGoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessGoals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessGoals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessGoals.
     */
    distinct?: BusinessGoalScalarFieldEnum | BusinessGoalScalarFieldEnum[]
  }

  /**
   * BusinessGoal create
   */
  export type BusinessGoalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessGoal
     */
    select?: BusinessGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessGoal
     */
    omit?: BusinessGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessGoalInclude<ExtArgs> | null
    /**
     * The data needed to create a BusinessGoal.
     */
    data: XOR<BusinessGoalCreateInput, BusinessGoalUncheckedCreateInput>
  }

  /**
   * BusinessGoal createMany
   */
  export type BusinessGoalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BusinessGoals.
     */
    data: BusinessGoalCreateManyInput | BusinessGoalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BusinessGoal createManyAndReturn
   */
  export type BusinessGoalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessGoal
     */
    select?: BusinessGoalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessGoal
     */
    omit?: BusinessGoalOmit<ExtArgs> | null
    /**
     * The data used to create many BusinessGoals.
     */
    data: BusinessGoalCreateManyInput | BusinessGoalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessGoalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BusinessGoal update
   */
  export type BusinessGoalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessGoal
     */
    select?: BusinessGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessGoal
     */
    omit?: BusinessGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessGoalInclude<ExtArgs> | null
    /**
     * The data needed to update a BusinessGoal.
     */
    data: XOR<BusinessGoalUpdateInput, BusinessGoalUncheckedUpdateInput>
    /**
     * Choose, which BusinessGoal to update.
     */
    where: BusinessGoalWhereUniqueInput
  }

  /**
   * BusinessGoal updateMany
   */
  export type BusinessGoalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BusinessGoals.
     */
    data: XOR<BusinessGoalUpdateManyMutationInput, BusinessGoalUncheckedUpdateManyInput>
    /**
     * Filter which BusinessGoals to update
     */
    where?: BusinessGoalWhereInput
    /**
     * Limit how many BusinessGoals to update.
     */
    limit?: number
  }

  /**
   * BusinessGoal updateManyAndReturn
   */
  export type BusinessGoalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessGoal
     */
    select?: BusinessGoalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessGoal
     */
    omit?: BusinessGoalOmit<ExtArgs> | null
    /**
     * The data used to update BusinessGoals.
     */
    data: XOR<BusinessGoalUpdateManyMutationInput, BusinessGoalUncheckedUpdateManyInput>
    /**
     * Filter which BusinessGoals to update
     */
    where?: BusinessGoalWhereInput
    /**
     * Limit how many BusinessGoals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessGoalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BusinessGoal upsert
   */
  export type BusinessGoalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessGoal
     */
    select?: BusinessGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessGoal
     */
    omit?: BusinessGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessGoalInclude<ExtArgs> | null
    /**
     * The filter to search for the BusinessGoal to update in case it exists.
     */
    where: BusinessGoalWhereUniqueInput
    /**
     * In case the BusinessGoal found by the `where` argument doesn't exist, create a new BusinessGoal with this data.
     */
    create: XOR<BusinessGoalCreateInput, BusinessGoalUncheckedCreateInput>
    /**
     * In case the BusinessGoal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BusinessGoalUpdateInput, BusinessGoalUncheckedUpdateInput>
  }

  /**
   * BusinessGoal delete
   */
  export type BusinessGoalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessGoal
     */
    select?: BusinessGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessGoal
     */
    omit?: BusinessGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessGoalInclude<ExtArgs> | null
    /**
     * Filter which BusinessGoal to delete.
     */
    where: BusinessGoalWhereUniqueInput
  }

  /**
   * BusinessGoal deleteMany
   */
  export type BusinessGoalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BusinessGoals to delete
     */
    where?: BusinessGoalWhereInput
    /**
     * Limit how many BusinessGoals to delete.
     */
    limit?: number
  }

  /**
   * BusinessGoal without action
   */
  export type BusinessGoalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessGoal
     */
    select?: BusinessGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessGoal
     */
    omit?: BusinessGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessGoalInclude<ExtArgs> | null
  }


  /**
   * Model Insight
   */

  export type AggregateInsight = {
    _count: InsightCountAggregateOutputType | null
    _avg: InsightAvgAggregateOutputType | null
    _sum: InsightSumAggregateOutputType | null
    _min: InsightMinAggregateOutputType | null
    _max: InsightMaxAggregateOutputType | null
  }

  export type InsightAvgAggregateOutputType = {
    netMonthlyIncome: number | null
    breakEvenEnrollment: number | null
    capacityUtilization: number | null
    largestExpensePct: number | null
  }

  export type InsightSumAggregateOutputType = {
    netMonthlyIncome: number | null
    breakEvenEnrollment: number | null
    capacityUtilization: number | null
    largestExpensePct: number | null
  }

  export type InsightMinAggregateOutputType = {
    id: string | null
    simulationId: string | null
    netMonthlyIncome: number | null
    breakEvenEnrollment: number | null
    capacityUtilization: number | null
    largestExpenseName: string | null
    largestExpensePct: number | null
    createdAt: Date | null
  }

  export type InsightMaxAggregateOutputType = {
    id: string | null
    simulationId: string | null
    netMonthlyIncome: number | null
    breakEvenEnrollment: number | null
    capacityUtilization: number | null
    largestExpenseName: string | null
    largestExpensePct: number | null
    createdAt: Date | null
  }

  export type InsightCountAggregateOutputType = {
    id: number
    simulationId: number
    netMonthlyIncome: number
    breakEvenEnrollment: number
    capacityUtilization: number
    largestExpenseName: number
    largestExpensePct: number
    executiveSummary: number
    recommendations: number
    actionPlan: number
    createdAt: number
    _all: number
  }


  export type InsightAvgAggregateInputType = {
    netMonthlyIncome?: true
    breakEvenEnrollment?: true
    capacityUtilization?: true
    largestExpensePct?: true
  }

  export type InsightSumAggregateInputType = {
    netMonthlyIncome?: true
    breakEvenEnrollment?: true
    capacityUtilization?: true
    largestExpensePct?: true
  }

  export type InsightMinAggregateInputType = {
    id?: true
    simulationId?: true
    netMonthlyIncome?: true
    breakEvenEnrollment?: true
    capacityUtilization?: true
    largestExpenseName?: true
    largestExpensePct?: true
    createdAt?: true
  }

  export type InsightMaxAggregateInputType = {
    id?: true
    simulationId?: true
    netMonthlyIncome?: true
    breakEvenEnrollment?: true
    capacityUtilization?: true
    largestExpenseName?: true
    largestExpensePct?: true
    createdAt?: true
  }

  export type InsightCountAggregateInputType = {
    id?: true
    simulationId?: true
    netMonthlyIncome?: true
    breakEvenEnrollment?: true
    capacityUtilization?: true
    largestExpenseName?: true
    largestExpensePct?: true
    executiveSummary?: true
    recommendations?: true
    actionPlan?: true
    createdAt?: true
    _all?: true
  }

  export type InsightAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Insight to aggregate.
     */
    where?: InsightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Insights to fetch.
     */
    orderBy?: InsightOrderByWithRelationInput | InsightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InsightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Insights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Insights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Insights
    **/
    _count?: true | InsightCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InsightAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InsightSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InsightMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InsightMaxAggregateInputType
  }

  export type GetInsightAggregateType<T extends InsightAggregateArgs> = {
        [P in keyof T & keyof AggregateInsight]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInsight[P]>
      : GetScalarType<T[P], AggregateInsight[P]>
  }




  export type InsightGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InsightWhereInput
    orderBy?: InsightOrderByWithAggregationInput | InsightOrderByWithAggregationInput[]
    by: InsightScalarFieldEnum[] | InsightScalarFieldEnum
    having?: InsightScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InsightCountAggregateInputType | true
    _avg?: InsightAvgAggregateInputType
    _sum?: InsightSumAggregateInputType
    _min?: InsightMinAggregateInputType
    _max?: InsightMaxAggregateInputType
  }

  export type InsightGroupByOutputType = {
    id: string
    simulationId: string
    netMonthlyIncome: number
    breakEvenEnrollment: number
    capacityUtilization: number
    largestExpenseName: string
    largestExpensePct: number
    executiveSummary: JsonValue
    recommendations: JsonValue
    actionPlan: JsonValue
    createdAt: Date
    _count: InsightCountAggregateOutputType | null
    _avg: InsightAvgAggregateOutputType | null
    _sum: InsightSumAggregateOutputType | null
    _min: InsightMinAggregateOutputType | null
    _max: InsightMaxAggregateOutputType | null
  }

  type GetInsightGroupByPayload<T extends InsightGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InsightGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InsightGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InsightGroupByOutputType[P]>
            : GetScalarType<T[P], InsightGroupByOutputType[P]>
        }
      >
    >


  export type InsightSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    simulationId?: boolean
    netMonthlyIncome?: boolean
    breakEvenEnrollment?: boolean
    capacityUtilization?: boolean
    largestExpenseName?: boolean
    largestExpensePct?: boolean
    executiveSummary?: boolean
    recommendations?: boolean
    actionPlan?: boolean
    createdAt?: boolean
    simulation?: boolean | SimulationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["insight"]>

  export type InsightSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    simulationId?: boolean
    netMonthlyIncome?: boolean
    breakEvenEnrollment?: boolean
    capacityUtilization?: boolean
    largestExpenseName?: boolean
    largestExpensePct?: boolean
    executiveSummary?: boolean
    recommendations?: boolean
    actionPlan?: boolean
    createdAt?: boolean
    simulation?: boolean | SimulationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["insight"]>

  export type InsightSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    simulationId?: boolean
    netMonthlyIncome?: boolean
    breakEvenEnrollment?: boolean
    capacityUtilization?: boolean
    largestExpenseName?: boolean
    largestExpensePct?: boolean
    executiveSummary?: boolean
    recommendations?: boolean
    actionPlan?: boolean
    createdAt?: boolean
    simulation?: boolean | SimulationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["insight"]>

  export type InsightSelectScalar = {
    id?: boolean
    simulationId?: boolean
    netMonthlyIncome?: boolean
    breakEvenEnrollment?: boolean
    capacityUtilization?: boolean
    largestExpenseName?: boolean
    largestExpensePct?: boolean
    executiveSummary?: boolean
    recommendations?: boolean
    actionPlan?: boolean
    createdAt?: boolean
  }

  export type InsightOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "simulationId" | "netMonthlyIncome" | "breakEvenEnrollment" | "capacityUtilization" | "largestExpenseName" | "largestExpensePct" | "executiveSummary" | "recommendations" | "actionPlan" | "createdAt", ExtArgs["result"]["insight"]>
  export type InsightInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    simulation?: boolean | SimulationDefaultArgs<ExtArgs>
  }
  export type InsightIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    simulation?: boolean | SimulationDefaultArgs<ExtArgs>
  }
  export type InsightIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    simulation?: boolean | SimulationDefaultArgs<ExtArgs>
  }

  export type $InsightPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Insight"
    objects: {
      simulation: Prisma.$SimulationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      simulationId: string
      netMonthlyIncome: number
      breakEvenEnrollment: number
      capacityUtilization: number
      largestExpenseName: string
      largestExpensePct: number
      executiveSummary: Prisma.JsonValue
      recommendations: Prisma.JsonValue
      actionPlan: Prisma.JsonValue
      createdAt: Date
    }, ExtArgs["result"]["insight"]>
    composites: {}
  }

  type InsightGetPayload<S extends boolean | null | undefined | InsightDefaultArgs> = $Result.GetResult<Prisma.$InsightPayload, S>

  type InsightCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InsightFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InsightCountAggregateInputType | true
    }

  export interface InsightDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Insight'], meta: { name: 'Insight' } }
    /**
     * Find zero or one Insight that matches the filter.
     * @param {InsightFindUniqueArgs} args - Arguments to find a Insight
     * @example
     * // Get one Insight
     * const insight = await prisma.insight.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InsightFindUniqueArgs>(args: SelectSubset<T, InsightFindUniqueArgs<ExtArgs>>): Prisma__InsightClient<$Result.GetResult<Prisma.$InsightPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Insight that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InsightFindUniqueOrThrowArgs} args - Arguments to find a Insight
     * @example
     * // Get one Insight
     * const insight = await prisma.insight.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InsightFindUniqueOrThrowArgs>(args: SelectSubset<T, InsightFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InsightClient<$Result.GetResult<Prisma.$InsightPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Insight that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsightFindFirstArgs} args - Arguments to find a Insight
     * @example
     * // Get one Insight
     * const insight = await prisma.insight.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InsightFindFirstArgs>(args?: SelectSubset<T, InsightFindFirstArgs<ExtArgs>>): Prisma__InsightClient<$Result.GetResult<Prisma.$InsightPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Insight that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsightFindFirstOrThrowArgs} args - Arguments to find a Insight
     * @example
     * // Get one Insight
     * const insight = await prisma.insight.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InsightFindFirstOrThrowArgs>(args?: SelectSubset<T, InsightFindFirstOrThrowArgs<ExtArgs>>): Prisma__InsightClient<$Result.GetResult<Prisma.$InsightPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Insights that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsightFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Insights
     * const insights = await prisma.insight.findMany()
     * 
     * // Get first 10 Insights
     * const insights = await prisma.insight.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const insightWithIdOnly = await prisma.insight.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InsightFindManyArgs>(args?: SelectSubset<T, InsightFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InsightPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Insight.
     * @param {InsightCreateArgs} args - Arguments to create a Insight.
     * @example
     * // Create one Insight
     * const Insight = await prisma.insight.create({
     *   data: {
     *     // ... data to create a Insight
     *   }
     * })
     * 
     */
    create<T extends InsightCreateArgs>(args: SelectSubset<T, InsightCreateArgs<ExtArgs>>): Prisma__InsightClient<$Result.GetResult<Prisma.$InsightPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Insights.
     * @param {InsightCreateManyArgs} args - Arguments to create many Insights.
     * @example
     * // Create many Insights
     * const insight = await prisma.insight.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InsightCreateManyArgs>(args?: SelectSubset<T, InsightCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Insights and returns the data saved in the database.
     * @param {InsightCreateManyAndReturnArgs} args - Arguments to create many Insights.
     * @example
     * // Create many Insights
     * const insight = await prisma.insight.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Insights and only return the `id`
     * const insightWithIdOnly = await prisma.insight.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InsightCreateManyAndReturnArgs>(args?: SelectSubset<T, InsightCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InsightPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Insight.
     * @param {InsightDeleteArgs} args - Arguments to delete one Insight.
     * @example
     * // Delete one Insight
     * const Insight = await prisma.insight.delete({
     *   where: {
     *     // ... filter to delete one Insight
     *   }
     * })
     * 
     */
    delete<T extends InsightDeleteArgs>(args: SelectSubset<T, InsightDeleteArgs<ExtArgs>>): Prisma__InsightClient<$Result.GetResult<Prisma.$InsightPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Insight.
     * @param {InsightUpdateArgs} args - Arguments to update one Insight.
     * @example
     * // Update one Insight
     * const insight = await prisma.insight.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InsightUpdateArgs>(args: SelectSubset<T, InsightUpdateArgs<ExtArgs>>): Prisma__InsightClient<$Result.GetResult<Prisma.$InsightPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Insights.
     * @param {InsightDeleteManyArgs} args - Arguments to filter Insights to delete.
     * @example
     * // Delete a few Insights
     * const { count } = await prisma.insight.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InsightDeleteManyArgs>(args?: SelectSubset<T, InsightDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Insights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsightUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Insights
     * const insight = await prisma.insight.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InsightUpdateManyArgs>(args: SelectSubset<T, InsightUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Insights and returns the data updated in the database.
     * @param {InsightUpdateManyAndReturnArgs} args - Arguments to update many Insights.
     * @example
     * // Update many Insights
     * const insight = await prisma.insight.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Insights and only return the `id`
     * const insightWithIdOnly = await prisma.insight.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InsightUpdateManyAndReturnArgs>(args: SelectSubset<T, InsightUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InsightPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Insight.
     * @param {InsightUpsertArgs} args - Arguments to update or create a Insight.
     * @example
     * // Update or create a Insight
     * const insight = await prisma.insight.upsert({
     *   create: {
     *     // ... data to create a Insight
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Insight we want to update
     *   }
     * })
     */
    upsert<T extends InsightUpsertArgs>(args: SelectSubset<T, InsightUpsertArgs<ExtArgs>>): Prisma__InsightClient<$Result.GetResult<Prisma.$InsightPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Insights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsightCountArgs} args - Arguments to filter Insights to count.
     * @example
     * // Count the number of Insights
     * const count = await prisma.insight.count({
     *   where: {
     *     // ... the filter for the Insights we want to count
     *   }
     * })
    **/
    count<T extends InsightCountArgs>(
      args?: Subset<T, InsightCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InsightCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Insight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsightAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InsightAggregateArgs>(args: Subset<T, InsightAggregateArgs>): Prisma.PrismaPromise<GetInsightAggregateType<T>>

    /**
     * Group by Insight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsightGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InsightGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InsightGroupByArgs['orderBy'] }
        : { orderBy?: InsightGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InsightGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInsightGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Insight model
   */
  readonly fields: InsightFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Insight.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InsightClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    simulation<T extends SimulationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SimulationDefaultArgs<ExtArgs>>): Prisma__SimulationClient<$Result.GetResult<Prisma.$SimulationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Insight model
   */
  interface InsightFieldRefs {
    readonly id: FieldRef<"Insight", 'String'>
    readonly simulationId: FieldRef<"Insight", 'String'>
    readonly netMonthlyIncome: FieldRef<"Insight", 'Float'>
    readonly breakEvenEnrollment: FieldRef<"Insight", 'Int'>
    readonly capacityUtilization: FieldRef<"Insight", 'Float'>
    readonly largestExpenseName: FieldRef<"Insight", 'String'>
    readonly largestExpensePct: FieldRef<"Insight", 'Float'>
    readonly executiveSummary: FieldRef<"Insight", 'Json'>
    readonly recommendations: FieldRef<"Insight", 'Json'>
    readonly actionPlan: FieldRef<"Insight", 'Json'>
    readonly createdAt: FieldRef<"Insight", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Insight findUnique
   */
  export type InsightFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insight
     */
    select?: InsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insight
     */
    omit?: InsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsightInclude<ExtArgs> | null
    /**
     * Filter, which Insight to fetch.
     */
    where: InsightWhereUniqueInput
  }

  /**
   * Insight findUniqueOrThrow
   */
  export type InsightFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insight
     */
    select?: InsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insight
     */
    omit?: InsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsightInclude<ExtArgs> | null
    /**
     * Filter, which Insight to fetch.
     */
    where: InsightWhereUniqueInput
  }

  /**
   * Insight findFirst
   */
  export type InsightFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insight
     */
    select?: InsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insight
     */
    omit?: InsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsightInclude<ExtArgs> | null
    /**
     * Filter, which Insight to fetch.
     */
    where?: InsightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Insights to fetch.
     */
    orderBy?: InsightOrderByWithRelationInput | InsightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Insights.
     */
    cursor?: InsightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Insights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Insights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Insights.
     */
    distinct?: InsightScalarFieldEnum | InsightScalarFieldEnum[]
  }

  /**
   * Insight findFirstOrThrow
   */
  export type InsightFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insight
     */
    select?: InsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insight
     */
    omit?: InsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsightInclude<ExtArgs> | null
    /**
     * Filter, which Insight to fetch.
     */
    where?: InsightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Insights to fetch.
     */
    orderBy?: InsightOrderByWithRelationInput | InsightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Insights.
     */
    cursor?: InsightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Insights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Insights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Insights.
     */
    distinct?: InsightScalarFieldEnum | InsightScalarFieldEnum[]
  }

  /**
   * Insight findMany
   */
  export type InsightFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insight
     */
    select?: InsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insight
     */
    omit?: InsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsightInclude<ExtArgs> | null
    /**
     * Filter, which Insights to fetch.
     */
    where?: InsightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Insights to fetch.
     */
    orderBy?: InsightOrderByWithRelationInput | InsightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Insights.
     */
    cursor?: InsightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Insights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Insights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Insights.
     */
    distinct?: InsightScalarFieldEnum | InsightScalarFieldEnum[]
  }

  /**
   * Insight create
   */
  export type InsightCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insight
     */
    select?: InsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insight
     */
    omit?: InsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsightInclude<ExtArgs> | null
    /**
     * The data needed to create a Insight.
     */
    data: XOR<InsightCreateInput, InsightUncheckedCreateInput>
  }

  /**
   * Insight createMany
   */
  export type InsightCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Insights.
     */
    data: InsightCreateManyInput | InsightCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Insight createManyAndReturn
   */
  export type InsightCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insight
     */
    select?: InsightSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Insight
     */
    omit?: InsightOmit<ExtArgs> | null
    /**
     * The data used to create many Insights.
     */
    data: InsightCreateManyInput | InsightCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsightIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Insight update
   */
  export type InsightUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insight
     */
    select?: InsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insight
     */
    omit?: InsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsightInclude<ExtArgs> | null
    /**
     * The data needed to update a Insight.
     */
    data: XOR<InsightUpdateInput, InsightUncheckedUpdateInput>
    /**
     * Choose, which Insight to update.
     */
    where: InsightWhereUniqueInput
  }

  /**
   * Insight updateMany
   */
  export type InsightUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Insights.
     */
    data: XOR<InsightUpdateManyMutationInput, InsightUncheckedUpdateManyInput>
    /**
     * Filter which Insights to update
     */
    where?: InsightWhereInput
    /**
     * Limit how many Insights to update.
     */
    limit?: number
  }

  /**
   * Insight updateManyAndReturn
   */
  export type InsightUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insight
     */
    select?: InsightSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Insight
     */
    omit?: InsightOmit<ExtArgs> | null
    /**
     * The data used to update Insights.
     */
    data: XOR<InsightUpdateManyMutationInput, InsightUncheckedUpdateManyInput>
    /**
     * Filter which Insights to update
     */
    where?: InsightWhereInput
    /**
     * Limit how many Insights to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsightIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Insight upsert
   */
  export type InsightUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insight
     */
    select?: InsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insight
     */
    omit?: InsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsightInclude<ExtArgs> | null
    /**
     * The filter to search for the Insight to update in case it exists.
     */
    where: InsightWhereUniqueInput
    /**
     * In case the Insight found by the `where` argument doesn't exist, create a new Insight with this data.
     */
    create: XOR<InsightCreateInput, InsightUncheckedCreateInput>
    /**
     * In case the Insight was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InsightUpdateInput, InsightUncheckedUpdateInput>
  }

  /**
   * Insight delete
   */
  export type InsightDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insight
     */
    select?: InsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insight
     */
    omit?: InsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsightInclude<ExtArgs> | null
    /**
     * Filter which Insight to delete.
     */
    where: InsightWhereUniqueInput
  }

  /**
   * Insight deleteMany
   */
  export type InsightDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Insights to delete
     */
    where?: InsightWhereInput
    /**
     * Limit how many Insights to delete.
     */
    limit?: number
  }

  /**
   * Insight without action
   */
  export type InsightDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insight
     */
    select?: InsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insight
     */
    omit?: InsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsightInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SimulationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    businessName: 'businessName',
    operatingHours: 'operatingHours',
    operatingDays: 'operatingDays',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SimulationScalarFieldEnum = (typeof SimulationScalarFieldEnum)[keyof typeof SimulationScalarFieldEnum]


  export const RevenueSourceScalarFieldEnum: {
    id: 'id',
    simulationId: 'simulationId',
    name: 'name',
    amount: 'amount',
    tag: 'tag'
  };

  export type RevenueSourceScalarFieldEnum = (typeof RevenueSourceScalarFieldEnum)[keyof typeof RevenueSourceScalarFieldEnum]


  export const ExpenseItemScalarFieldEnum: {
    id: 'id',
    simulationId: 'simulationId',
    name: 'name',
    amount: 'amount',
    tag: 'tag'
  };

  export type ExpenseItemScalarFieldEnum = (typeof ExpenseItemScalarFieldEnum)[keyof typeof ExpenseItemScalarFieldEnum]


  export const ClassroomScalarFieldEnum: {
    id: 'id',
    simulationId: 'simulationId',
    name: 'name',
    capacity: 'capacity',
    staffRatio: 'staffRatio',
    enrolled: 'enrolled'
  };

  export type ClassroomScalarFieldEnum = (typeof ClassroomScalarFieldEnum)[keyof typeof ClassroomScalarFieldEnum]


  export const BusinessGoalScalarFieldEnum: {
    id: 'id',
    simulationId: 'simulationId',
    name: 'name',
    targetValue: 'targetValue',
    unit: 'unit'
  };

  export type BusinessGoalScalarFieldEnum = (typeof BusinessGoalScalarFieldEnum)[keyof typeof BusinessGoalScalarFieldEnum]


  export const InsightScalarFieldEnum: {
    id: 'id',
    simulationId: 'simulationId',
    netMonthlyIncome: 'netMonthlyIncome',
    breakEvenEnrollment: 'breakEvenEnrollment',
    capacityUtilization: 'capacityUtilization',
    largestExpenseName: 'largestExpenseName',
    largestExpensePct: 'largestExpensePct',
    executiveSummary: 'executiveSummary',
    recommendations: 'recommendations',
    actionPlan: 'actionPlan',
    createdAt: 'createdAt'
  };

  export type InsightScalarFieldEnum = (typeof InsightScalarFieldEnum)[keyof typeof InsightScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'SimStatus'
   */
  export type EnumSimStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SimStatus'>
    


  /**
   * Reference to a field of type 'SimStatus[]'
   */
  export type ListEnumSimStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SimStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    simulations?: SimulationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    simulations?: SimulationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    simulations?: SimulationListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SimulationWhereInput = {
    AND?: SimulationWhereInput | SimulationWhereInput[]
    OR?: SimulationWhereInput[]
    NOT?: SimulationWhereInput | SimulationWhereInput[]
    id?: StringFilter<"Simulation"> | string
    userId?: StringFilter<"Simulation"> | string
    businessName?: StringFilter<"Simulation"> | string
    operatingHours?: FloatFilter<"Simulation"> | number
    operatingDays?: IntFilter<"Simulation"> | number
    status?: EnumSimStatusFilter<"Simulation"> | $Enums.SimStatus
    createdAt?: DateTimeFilter<"Simulation"> | Date | string
    updatedAt?: DateTimeFilter<"Simulation"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    revenueSources?: RevenueSourceListRelationFilter
    expenseItems?: ExpenseItemListRelationFilter
    classrooms?: ClassroomListRelationFilter
    businessGoals?: BusinessGoalListRelationFilter
    insight?: XOR<InsightNullableScalarRelationFilter, InsightWhereInput> | null
  }

  export type SimulationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    businessName?: SortOrder
    operatingHours?: SortOrder
    operatingDays?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    revenueSources?: RevenueSourceOrderByRelationAggregateInput
    expenseItems?: ExpenseItemOrderByRelationAggregateInput
    classrooms?: ClassroomOrderByRelationAggregateInput
    businessGoals?: BusinessGoalOrderByRelationAggregateInput
    insight?: InsightOrderByWithRelationInput
  }

  export type SimulationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SimulationWhereInput | SimulationWhereInput[]
    OR?: SimulationWhereInput[]
    NOT?: SimulationWhereInput | SimulationWhereInput[]
    userId?: StringFilter<"Simulation"> | string
    businessName?: StringFilter<"Simulation"> | string
    operatingHours?: FloatFilter<"Simulation"> | number
    operatingDays?: IntFilter<"Simulation"> | number
    status?: EnumSimStatusFilter<"Simulation"> | $Enums.SimStatus
    createdAt?: DateTimeFilter<"Simulation"> | Date | string
    updatedAt?: DateTimeFilter<"Simulation"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    revenueSources?: RevenueSourceListRelationFilter
    expenseItems?: ExpenseItemListRelationFilter
    classrooms?: ClassroomListRelationFilter
    businessGoals?: BusinessGoalListRelationFilter
    insight?: XOR<InsightNullableScalarRelationFilter, InsightWhereInput> | null
  }, "id">

  export type SimulationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    businessName?: SortOrder
    operatingHours?: SortOrder
    operatingDays?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SimulationCountOrderByAggregateInput
    _avg?: SimulationAvgOrderByAggregateInput
    _max?: SimulationMaxOrderByAggregateInput
    _min?: SimulationMinOrderByAggregateInput
    _sum?: SimulationSumOrderByAggregateInput
  }

  export type SimulationScalarWhereWithAggregatesInput = {
    AND?: SimulationScalarWhereWithAggregatesInput | SimulationScalarWhereWithAggregatesInput[]
    OR?: SimulationScalarWhereWithAggregatesInput[]
    NOT?: SimulationScalarWhereWithAggregatesInput | SimulationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Simulation"> | string
    userId?: StringWithAggregatesFilter<"Simulation"> | string
    businessName?: StringWithAggregatesFilter<"Simulation"> | string
    operatingHours?: FloatWithAggregatesFilter<"Simulation"> | number
    operatingDays?: IntWithAggregatesFilter<"Simulation"> | number
    status?: EnumSimStatusWithAggregatesFilter<"Simulation"> | $Enums.SimStatus
    createdAt?: DateTimeWithAggregatesFilter<"Simulation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Simulation"> | Date | string
  }

  export type RevenueSourceWhereInput = {
    AND?: RevenueSourceWhereInput | RevenueSourceWhereInput[]
    OR?: RevenueSourceWhereInput[]
    NOT?: RevenueSourceWhereInput | RevenueSourceWhereInput[]
    id?: StringFilter<"RevenueSource"> | string
    simulationId?: StringFilter<"RevenueSource"> | string
    name?: StringFilter<"RevenueSource"> | string
    amount?: FloatFilter<"RevenueSource"> | number
    tag?: StringNullableFilter<"RevenueSource"> | string | null
    simulation?: XOR<SimulationScalarRelationFilter, SimulationWhereInput>
  }

  export type RevenueSourceOrderByWithRelationInput = {
    id?: SortOrder
    simulationId?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    tag?: SortOrderInput | SortOrder
    simulation?: SimulationOrderByWithRelationInput
  }

  export type RevenueSourceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RevenueSourceWhereInput | RevenueSourceWhereInput[]
    OR?: RevenueSourceWhereInput[]
    NOT?: RevenueSourceWhereInput | RevenueSourceWhereInput[]
    simulationId?: StringFilter<"RevenueSource"> | string
    name?: StringFilter<"RevenueSource"> | string
    amount?: FloatFilter<"RevenueSource"> | number
    tag?: StringNullableFilter<"RevenueSource"> | string | null
    simulation?: XOR<SimulationScalarRelationFilter, SimulationWhereInput>
  }, "id">

  export type RevenueSourceOrderByWithAggregationInput = {
    id?: SortOrder
    simulationId?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    tag?: SortOrderInput | SortOrder
    _count?: RevenueSourceCountOrderByAggregateInput
    _avg?: RevenueSourceAvgOrderByAggregateInput
    _max?: RevenueSourceMaxOrderByAggregateInput
    _min?: RevenueSourceMinOrderByAggregateInput
    _sum?: RevenueSourceSumOrderByAggregateInput
  }

  export type RevenueSourceScalarWhereWithAggregatesInput = {
    AND?: RevenueSourceScalarWhereWithAggregatesInput | RevenueSourceScalarWhereWithAggregatesInput[]
    OR?: RevenueSourceScalarWhereWithAggregatesInput[]
    NOT?: RevenueSourceScalarWhereWithAggregatesInput | RevenueSourceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RevenueSource"> | string
    simulationId?: StringWithAggregatesFilter<"RevenueSource"> | string
    name?: StringWithAggregatesFilter<"RevenueSource"> | string
    amount?: FloatWithAggregatesFilter<"RevenueSource"> | number
    tag?: StringNullableWithAggregatesFilter<"RevenueSource"> | string | null
  }

  export type ExpenseItemWhereInput = {
    AND?: ExpenseItemWhereInput | ExpenseItemWhereInput[]
    OR?: ExpenseItemWhereInput[]
    NOT?: ExpenseItemWhereInput | ExpenseItemWhereInput[]
    id?: StringFilter<"ExpenseItem"> | string
    simulationId?: StringFilter<"ExpenseItem"> | string
    name?: StringFilter<"ExpenseItem"> | string
    amount?: FloatFilter<"ExpenseItem"> | number
    tag?: StringNullableFilter<"ExpenseItem"> | string | null
    simulation?: XOR<SimulationScalarRelationFilter, SimulationWhereInput>
  }

  export type ExpenseItemOrderByWithRelationInput = {
    id?: SortOrder
    simulationId?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    tag?: SortOrderInput | SortOrder
    simulation?: SimulationOrderByWithRelationInput
  }

  export type ExpenseItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExpenseItemWhereInput | ExpenseItemWhereInput[]
    OR?: ExpenseItemWhereInput[]
    NOT?: ExpenseItemWhereInput | ExpenseItemWhereInput[]
    simulationId?: StringFilter<"ExpenseItem"> | string
    name?: StringFilter<"ExpenseItem"> | string
    amount?: FloatFilter<"ExpenseItem"> | number
    tag?: StringNullableFilter<"ExpenseItem"> | string | null
    simulation?: XOR<SimulationScalarRelationFilter, SimulationWhereInput>
  }, "id">

  export type ExpenseItemOrderByWithAggregationInput = {
    id?: SortOrder
    simulationId?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    tag?: SortOrderInput | SortOrder
    _count?: ExpenseItemCountOrderByAggregateInput
    _avg?: ExpenseItemAvgOrderByAggregateInput
    _max?: ExpenseItemMaxOrderByAggregateInput
    _min?: ExpenseItemMinOrderByAggregateInput
    _sum?: ExpenseItemSumOrderByAggregateInput
  }

  export type ExpenseItemScalarWhereWithAggregatesInput = {
    AND?: ExpenseItemScalarWhereWithAggregatesInput | ExpenseItemScalarWhereWithAggregatesInput[]
    OR?: ExpenseItemScalarWhereWithAggregatesInput[]
    NOT?: ExpenseItemScalarWhereWithAggregatesInput | ExpenseItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ExpenseItem"> | string
    simulationId?: StringWithAggregatesFilter<"ExpenseItem"> | string
    name?: StringWithAggregatesFilter<"ExpenseItem"> | string
    amount?: FloatWithAggregatesFilter<"ExpenseItem"> | number
    tag?: StringNullableWithAggregatesFilter<"ExpenseItem"> | string | null
  }

  export type ClassroomWhereInput = {
    AND?: ClassroomWhereInput | ClassroomWhereInput[]
    OR?: ClassroomWhereInput[]
    NOT?: ClassroomWhereInput | ClassroomWhereInput[]
    id?: StringFilter<"Classroom"> | string
    simulationId?: StringFilter<"Classroom"> | string
    name?: StringFilter<"Classroom"> | string
    capacity?: IntFilter<"Classroom"> | number
    staffRatio?: FloatFilter<"Classroom"> | number
    enrolled?: IntFilter<"Classroom"> | number
    simulation?: XOR<SimulationScalarRelationFilter, SimulationWhereInput>
  }

  export type ClassroomOrderByWithRelationInput = {
    id?: SortOrder
    simulationId?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    staffRatio?: SortOrder
    enrolled?: SortOrder
    simulation?: SimulationOrderByWithRelationInput
  }

  export type ClassroomWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClassroomWhereInput | ClassroomWhereInput[]
    OR?: ClassroomWhereInput[]
    NOT?: ClassroomWhereInput | ClassroomWhereInput[]
    simulationId?: StringFilter<"Classroom"> | string
    name?: StringFilter<"Classroom"> | string
    capacity?: IntFilter<"Classroom"> | number
    staffRatio?: FloatFilter<"Classroom"> | number
    enrolled?: IntFilter<"Classroom"> | number
    simulation?: XOR<SimulationScalarRelationFilter, SimulationWhereInput>
  }, "id">

  export type ClassroomOrderByWithAggregationInput = {
    id?: SortOrder
    simulationId?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    staffRatio?: SortOrder
    enrolled?: SortOrder
    _count?: ClassroomCountOrderByAggregateInput
    _avg?: ClassroomAvgOrderByAggregateInput
    _max?: ClassroomMaxOrderByAggregateInput
    _min?: ClassroomMinOrderByAggregateInput
    _sum?: ClassroomSumOrderByAggregateInput
  }

  export type ClassroomScalarWhereWithAggregatesInput = {
    AND?: ClassroomScalarWhereWithAggregatesInput | ClassroomScalarWhereWithAggregatesInput[]
    OR?: ClassroomScalarWhereWithAggregatesInput[]
    NOT?: ClassroomScalarWhereWithAggregatesInput | ClassroomScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Classroom"> | string
    simulationId?: StringWithAggregatesFilter<"Classroom"> | string
    name?: StringWithAggregatesFilter<"Classroom"> | string
    capacity?: IntWithAggregatesFilter<"Classroom"> | number
    staffRatio?: FloatWithAggregatesFilter<"Classroom"> | number
    enrolled?: IntWithAggregatesFilter<"Classroom"> | number
  }

  export type BusinessGoalWhereInput = {
    AND?: BusinessGoalWhereInput | BusinessGoalWhereInput[]
    OR?: BusinessGoalWhereInput[]
    NOT?: BusinessGoalWhereInput | BusinessGoalWhereInput[]
    id?: StringFilter<"BusinessGoal"> | string
    simulationId?: StringFilter<"BusinessGoal"> | string
    name?: StringFilter<"BusinessGoal"> | string
    targetValue?: FloatFilter<"BusinessGoal"> | number
    unit?: StringFilter<"BusinessGoal"> | string
    simulation?: XOR<SimulationScalarRelationFilter, SimulationWhereInput>
  }

  export type BusinessGoalOrderByWithRelationInput = {
    id?: SortOrder
    simulationId?: SortOrder
    name?: SortOrder
    targetValue?: SortOrder
    unit?: SortOrder
    simulation?: SimulationOrderByWithRelationInput
  }

  export type BusinessGoalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BusinessGoalWhereInput | BusinessGoalWhereInput[]
    OR?: BusinessGoalWhereInput[]
    NOT?: BusinessGoalWhereInput | BusinessGoalWhereInput[]
    simulationId?: StringFilter<"BusinessGoal"> | string
    name?: StringFilter<"BusinessGoal"> | string
    targetValue?: FloatFilter<"BusinessGoal"> | number
    unit?: StringFilter<"BusinessGoal"> | string
    simulation?: XOR<SimulationScalarRelationFilter, SimulationWhereInput>
  }, "id">

  export type BusinessGoalOrderByWithAggregationInput = {
    id?: SortOrder
    simulationId?: SortOrder
    name?: SortOrder
    targetValue?: SortOrder
    unit?: SortOrder
    _count?: BusinessGoalCountOrderByAggregateInput
    _avg?: BusinessGoalAvgOrderByAggregateInput
    _max?: BusinessGoalMaxOrderByAggregateInput
    _min?: BusinessGoalMinOrderByAggregateInput
    _sum?: BusinessGoalSumOrderByAggregateInput
  }

  export type BusinessGoalScalarWhereWithAggregatesInput = {
    AND?: BusinessGoalScalarWhereWithAggregatesInput | BusinessGoalScalarWhereWithAggregatesInput[]
    OR?: BusinessGoalScalarWhereWithAggregatesInput[]
    NOT?: BusinessGoalScalarWhereWithAggregatesInput | BusinessGoalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BusinessGoal"> | string
    simulationId?: StringWithAggregatesFilter<"BusinessGoal"> | string
    name?: StringWithAggregatesFilter<"BusinessGoal"> | string
    targetValue?: FloatWithAggregatesFilter<"BusinessGoal"> | number
    unit?: StringWithAggregatesFilter<"BusinessGoal"> | string
  }

  export type InsightWhereInput = {
    AND?: InsightWhereInput | InsightWhereInput[]
    OR?: InsightWhereInput[]
    NOT?: InsightWhereInput | InsightWhereInput[]
    id?: StringFilter<"Insight"> | string
    simulationId?: StringFilter<"Insight"> | string
    netMonthlyIncome?: FloatFilter<"Insight"> | number
    breakEvenEnrollment?: IntFilter<"Insight"> | number
    capacityUtilization?: FloatFilter<"Insight"> | number
    largestExpenseName?: StringFilter<"Insight"> | string
    largestExpensePct?: FloatFilter<"Insight"> | number
    executiveSummary?: JsonFilter<"Insight">
    recommendations?: JsonFilter<"Insight">
    actionPlan?: JsonFilter<"Insight">
    createdAt?: DateTimeFilter<"Insight"> | Date | string
    simulation?: XOR<SimulationScalarRelationFilter, SimulationWhereInput>
  }

  export type InsightOrderByWithRelationInput = {
    id?: SortOrder
    simulationId?: SortOrder
    netMonthlyIncome?: SortOrder
    breakEvenEnrollment?: SortOrder
    capacityUtilization?: SortOrder
    largestExpenseName?: SortOrder
    largestExpensePct?: SortOrder
    executiveSummary?: SortOrder
    recommendations?: SortOrder
    actionPlan?: SortOrder
    createdAt?: SortOrder
    simulation?: SimulationOrderByWithRelationInput
  }

  export type InsightWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    simulationId?: string
    AND?: InsightWhereInput | InsightWhereInput[]
    OR?: InsightWhereInput[]
    NOT?: InsightWhereInput | InsightWhereInput[]
    netMonthlyIncome?: FloatFilter<"Insight"> | number
    breakEvenEnrollment?: IntFilter<"Insight"> | number
    capacityUtilization?: FloatFilter<"Insight"> | number
    largestExpenseName?: StringFilter<"Insight"> | string
    largestExpensePct?: FloatFilter<"Insight"> | number
    executiveSummary?: JsonFilter<"Insight">
    recommendations?: JsonFilter<"Insight">
    actionPlan?: JsonFilter<"Insight">
    createdAt?: DateTimeFilter<"Insight"> | Date | string
    simulation?: XOR<SimulationScalarRelationFilter, SimulationWhereInput>
  }, "id" | "simulationId">

  export type InsightOrderByWithAggregationInput = {
    id?: SortOrder
    simulationId?: SortOrder
    netMonthlyIncome?: SortOrder
    breakEvenEnrollment?: SortOrder
    capacityUtilization?: SortOrder
    largestExpenseName?: SortOrder
    largestExpensePct?: SortOrder
    executiveSummary?: SortOrder
    recommendations?: SortOrder
    actionPlan?: SortOrder
    createdAt?: SortOrder
    _count?: InsightCountOrderByAggregateInput
    _avg?: InsightAvgOrderByAggregateInput
    _max?: InsightMaxOrderByAggregateInput
    _min?: InsightMinOrderByAggregateInput
    _sum?: InsightSumOrderByAggregateInput
  }

  export type InsightScalarWhereWithAggregatesInput = {
    AND?: InsightScalarWhereWithAggregatesInput | InsightScalarWhereWithAggregatesInput[]
    OR?: InsightScalarWhereWithAggregatesInput[]
    NOT?: InsightScalarWhereWithAggregatesInput | InsightScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Insight"> | string
    simulationId?: StringWithAggregatesFilter<"Insight"> | string
    netMonthlyIncome?: FloatWithAggregatesFilter<"Insight"> | number
    breakEvenEnrollment?: IntWithAggregatesFilter<"Insight"> | number
    capacityUtilization?: FloatWithAggregatesFilter<"Insight"> | number
    largestExpenseName?: StringWithAggregatesFilter<"Insight"> | string
    largestExpensePct?: FloatWithAggregatesFilter<"Insight"> | number
    executiveSummary?: JsonWithAggregatesFilter<"Insight">
    recommendations?: JsonWithAggregatesFilter<"Insight">
    actionPlan?: JsonWithAggregatesFilter<"Insight">
    createdAt?: DateTimeWithAggregatesFilter<"Insight"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    simulations?: SimulationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    simulations?: SimulationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    simulations?: SimulationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    simulations?: SimulationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SimulationCreateInput = {
    id?: string
    businessName: string
    operatingHours?: number
    operatingDays?: number
    status?: $Enums.SimStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSimulationsInput
    revenueSources?: RevenueSourceCreateNestedManyWithoutSimulationInput
    expenseItems?: ExpenseItemCreateNestedManyWithoutSimulationInput
    classrooms?: ClassroomCreateNestedManyWithoutSimulationInput
    businessGoals?: BusinessGoalCreateNestedManyWithoutSimulationInput
    insight?: InsightCreateNestedOneWithoutSimulationInput
  }

  export type SimulationUncheckedCreateInput = {
    id?: string
    userId: string
    businessName: string
    operatingHours?: number
    operatingDays?: number
    status?: $Enums.SimStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    revenueSources?: RevenueSourceUncheckedCreateNestedManyWithoutSimulationInput
    expenseItems?: ExpenseItemUncheckedCreateNestedManyWithoutSimulationInput
    classrooms?: ClassroomUncheckedCreateNestedManyWithoutSimulationInput
    businessGoals?: BusinessGoalUncheckedCreateNestedManyWithoutSimulationInput
    insight?: InsightUncheckedCreateNestedOneWithoutSimulationInput
  }

  export type SimulationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    operatingHours?: FloatFieldUpdateOperationsInput | number
    operatingDays?: IntFieldUpdateOperationsInput | number
    status?: EnumSimStatusFieldUpdateOperationsInput | $Enums.SimStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSimulationsNestedInput
    revenueSources?: RevenueSourceUpdateManyWithoutSimulationNestedInput
    expenseItems?: ExpenseItemUpdateManyWithoutSimulationNestedInput
    classrooms?: ClassroomUpdateManyWithoutSimulationNestedInput
    businessGoals?: BusinessGoalUpdateManyWithoutSimulationNestedInput
    insight?: InsightUpdateOneWithoutSimulationNestedInput
  }

  export type SimulationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    operatingHours?: FloatFieldUpdateOperationsInput | number
    operatingDays?: IntFieldUpdateOperationsInput | number
    status?: EnumSimStatusFieldUpdateOperationsInput | $Enums.SimStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revenueSources?: RevenueSourceUncheckedUpdateManyWithoutSimulationNestedInput
    expenseItems?: ExpenseItemUncheckedUpdateManyWithoutSimulationNestedInput
    classrooms?: ClassroomUncheckedUpdateManyWithoutSimulationNestedInput
    businessGoals?: BusinessGoalUncheckedUpdateManyWithoutSimulationNestedInput
    insight?: InsightUncheckedUpdateOneWithoutSimulationNestedInput
  }

  export type SimulationCreateManyInput = {
    id?: string
    userId: string
    businessName: string
    operatingHours?: number
    operatingDays?: number
    status?: $Enums.SimStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SimulationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    operatingHours?: FloatFieldUpdateOperationsInput | number
    operatingDays?: IntFieldUpdateOperationsInput | number
    status?: EnumSimStatusFieldUpdateOperationsInput | $Enums.SimStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SimulationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    operatingHours?: FloatFieldUpdateOperationsInput | number
    operatingDays?: IntFieldUpdateOperationsInput | number
    status?: EnumSimStatusFieldUpdateOperationsInput | $Enums.SimStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RevenueSourceCreateInput = {
    id?: string
    name: string
    amount: number
    tag?: string | null
    simulation: SimulationCreateNestedOneWithoutRevenueSourcesInput
  }

  export type RevenueSourceUncheckedCreateInput = {
    id?: string
    simulationId: string
    name: string
    amount: number
    tag?: string | null
  }

  export type RevenueSourceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    simulation?: SimulationUpdateOneRequiredWithoutRevenueSourcesNestedInput
  }

  export type RevenueSourceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    simulationId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    tag?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RevenueSourceCreateManyInput = {
    id?: string
    simulationId: string
    name: string
    amount: number
    tag?: string | null
  }

  export type RevenueSourceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    tag?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RevenueSourceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    simulationId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    tag?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExpenseItemCreateInput = {
    id?: string
    name: string
    amount: number
    tag?: string | null
    simulation: SimulationCreateNestedOneWithoutExpenseItemsInput
  }

  export type ExpenseItemUncheckedCreateInput = {
    id?: string
    simulationId: string
    name: string
    amount: number
    tag?: string | null
  }

  export type ExpenseItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    simulation?: SimulationUpdateOneRequiredWithoutExpenseItemsNestedInput
  }

  export type ExpenseItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    simulationId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    tag?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExpenseItemCreateManyInput = {
    id?: string
    simulationId: string
    name: string
    amount: number
    tag?: string | null
  }

  export type ExpenseItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    tag?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExpenseItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    simulationId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    tag?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClassroomCreateInput = {
    id?: string
    name: string
    capacity: number
    staffRatio: number
    enrolled: number
    simulation: SimulationCreateNestedOneWithoutClassroomsInput
  }

  export type ClassroomUncheckedCreateInput = {
    id?: string
    simulationId: string
    name: string
    capacity: number
    staffRatio: number
    enrolled: number
  }

  export type ClassroomUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    staffRatio?: FloatFieldUpdateOperationsInput | number
    enrolled?: IntFieldUpdateOperationsInput | number
    simulation?: SimulationUpdateOneRequiredWithoutClassroomsNestedInput
  }

  export type ClassroomUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    simulationId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    staffRatio?: FloatFieldUpdateOperationsInput | number
    enrolled?: IntFieldUpdateOperationsInput | number
  }

  export type ClassroomCreateManyInput = {
    id?: string
    simulationId: string
    name: string
    capacity: number
    staffRatio: number
    enrolled: number
  }

  export type ClassroomUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    staffRatio?: FloatFieldUpdateOperationsInput | number
    enrolled?: IntFieldUpdateOperationsInput | number
  }

  export type ClassroomUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    simulationId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    staffRatio?: FloatFieldUpdateOperationsInput | number
    enrolled?: IntFieldUpdateOperationsInput | number
  }

  export type BusinessGoalCreateInput = {
    id?: string
    name: string
    targetValue: number
    unit?: string
    simulation: SimulationCreateNestedOneWithoutBusinessGoalsInput
  }

  export type BusinessGoalUncheckedCreateInput = {
    id?: string
    simulationId: string
    name: string
    targetValue: number
    unit?: string
  }

  export type BusinessGoalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    targetValue?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    simulation?: SimulationUpdateOneRequiredWithoutBusinessGoalsNestedInput
  }

  export type BusinessGoalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    simulationId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    targetValue?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessGoalCreateManyInput = {
    id?: string
    simulationId: string
    name: string
    targetValue: number
    unit?: string
  }

  export type BusinessGoalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    targetValue?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessGoalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    simulationId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    targetValue?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
  }

  export type InsightCreateInput = {
    id?: string
    netMonthlyIncome: number
    breakEvenEnrollment: number
    capacityUtilization: number
    largestExpenseName: string
    largestExpensePct: number
    executiveSummary: JsonNullValueInput | InputJsonValue
    recommendations: JsonNullValueInput | InputJsonValue
    actionPlan: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    simulation: SimulationCreateNestedOneWithoutInsightInput
  }

  export type InsightUncheckedCreateInput = {
    id?: string
    simulationId: string
    netMonthlyIncome: number
    breakEvenEnrollment: number
    capacityUtilization: number
    largestExpenseName: string
    largestExpensePct: number
    executiveSummary: JsonNullValueInput | InputJsonValue
    recommendations: JsonNullValueInput | InputJsonValue
    actionPlan: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type InsightUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    netMonthlyIncome?: FloatFieldUpdateOperationsInput | number
    breakEvenEnrollment?: IntFieldUpdateOperationsInput | number
    capacityUtilization?: FloatFieldUpdateOperationsInput | number
    largestExpenseName?: StringFieldUpdateOperationsInput | string
    largestExpensePct?: FloatFieldUpdateOperationsInput | number
    executiveSummary?: JsonNullValueInput | InputJsonValue
    recommendations?: JsonNullValueInput | InputJsonValue
    actionPlan?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    simulation?: SimulationUpdateOneRequiredWithoutInsightNestedInput
  }

  export type InsightUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    simulationId?: StringFieldUpdateOperationsInput | string
    netMonthlyIncome?: FloatFieldUpdateOperationsInput | number
    breakEvenEnrollment?: IntFieldUpdateOperationsInput | number
    capacityUtilization?: FloatFieldUpdateOperationsInput | number
    largestExpenseName?: StringFieldUpdateOperationsInput | string
    largestExpensePct?: FloatFieldUpdateOperationsInput | number
    executiveSummary?: JsonNullValueInput | InputJsonValue
    recommendations?: JsonNullValueInput | InputJsonValue
    actionPlan?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InsightCreateManyInput = {
    id?: string
    simulationId: string
    netMonthlyIncome: number
    breakEvenEnrollment: number
    capacityUtilization: number
    largestExpenseName: string
    largestExpensePct: number
    executiveSummary: JsonNullValueInput | InputJsonValue
    recommendations: JsonNullValueInput | InputJsonValue
    actionPlan: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type InsightUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    netMonthlyIncome?: FloatFieldUpdateOperationsInput | number
    breakEvenEnrollment?: IntFieldUpdateOperationsInput | number
    capacityUtilization?: FloatFieldUpdateOperationsInput | number
    largestExpenseName?: StringFieldUpdateOperationsInput | string
    largestExpensePct?: FloatFieldUpdateOperationsInput | number
    executiveSummary?: JsonNullValueInput | InputJsonValue
    recommendations?: JsonNullValueInput | InputJsonValue
    actionPlan?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InsightUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    simulationId?: StringFieldUpdateOperationsInput | string
    netMonthlyIncome?: FloatFieldUpdateOperationsInput | number
    breakEvenEnrollment?: IntFieldUpdateOperationsInput | number
    capacityUtilization?: FloatFieldUpdateOperationsInput | number
    largestExpenseName?: StringFieldUpdateOperationsInput | string
    largestExpensePct?: FloatFieldUpdateOperationsInput | number
    executiveSummary?: JsonNullValueInput | InputJsonValue
    recommendations?: JsonNullValueInput | InputJsonValue
    actionPlan?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SimulationListRelationFilter = {
    every?: SimulationWhereInput
    some?: SimulationWhereInput
    none?: SimulationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SimulationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumSimStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SimStatus | EnumSimStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SimStatus[] | ListEnumSimStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SimStatus[] | ListEnumSimStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSimStatusFilter<$PrismaModel> | $Enums.SimStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RevenueSourceListRelationFilter = {
    every?: RevenueSourceWhereInput
    some?: RevenueSourceWhereInput
    none?: RevenueSourceWhereInput
  }

  export type ExpenseItemListRelationFilter = {
    every?: ExpenseItemWhereInput
    some?: ExpenseItemWhereInput
    none?: ExpenseItemWhereInput
  }

  export type ClassroomListRelationFilter = {
    every?: ClassroomWhereInput
    some?: ClassroomWhereInput
    none?: ClassroomWhereInput
  }

  export type BusinessGoalListRelationFilter = {
    every?: BusinessGoalWhereInput
    some?: BusinessGoalWhereInput
    none?: BusinessGoalWhereInput
  }

  export type InsightNullableScalarRelationFilter = {
    is?: InsightWhereInput | null
    isNot?: InsightWhereInput | null
  }

  export type RevenueSourceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExpenseItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClassroomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BusinessGoalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SimulationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    businessName?: SortOrder
    operatingHours?: SortOrder
    operatingDays?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SimulationAvgOrderByAggregateInput = {
    operatingHours?: SortOrder
    operatingDays?: SortOrder
  }

  export type SimulationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    businessName?: SortOrder
    operatingHours?: SortOrder
    operatingDays?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SimulationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    businessName?: SortOrder
    operatingHours?: SortOrder
    operatingDays?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SimulationSumOrderByAggregateInput = {
    operatingHours?: SortOrder
    operatingDays?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumSimStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SimStatus | EnumSimStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SimStatus[] | ListEnumSimStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SimStatus[] | ListEnumSimStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSimStatusWithAggregatesFilter<$PrismaModel> | $Enums.SimStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSimStatusFilter<$PrismaModel>
    _max?: NestedEnumSimStatusFilter<$PrismaModel>
  }

  export type SimulationScalarRelationFilter = {
    is?: SimulationWhereInput
    isNot?: SimulationWhereInput
  }

  export type RevenueSourceCountOrderByAggregateInput = {
    id?: SortOrder
    simulationId?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    tag?: SortOrder
  }

  export type RevenueSourceAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type RevenueSourceMaxOrderByAggregateInput = {
    id?: SortOrder
    simulationId?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    tag?: SortOrder
  }

  export type RevenueSourceMinOrderByAggregateInput = {
    id?: SortOrder
    simulationId?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    tag?: SortOrder
  }

  export type RevenueSourceSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type ExpenseItemCountOrderByAggregateInput = {
    id?: SortOrder
    simulationId?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    tag?: SortOrder
  }

  export type ExpenseItemAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type ExpenseItemMaxOrderByAggregateInput = {
    id?: SortOrder
    simulationId?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    tag?: SortOrder
  }

  export type ExpenseItemMinOrderByAggregateInput = {
    id?: SortOrder
    simulationId?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    tag?: SortOrder
  }

  export type ExpenseItemSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type ClassroomCountOrderByAggregateInput = {
    id?: SortOrder
    simulationId?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    staffRatio?: SortOrder
    enrolled?: SortOrder
  }

  export type ClassroomAvgOrderByAggregateInput = {
    capacity?: SortOrder
    staffRatio?: SortOrder
    enrolled?: SortOrder
  }

  export type ClassroomMaxOrderByAggregateInput = {
    id?: SortOrder
    simulationId?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    staffRatio?: SortOrder
    enrolled?: SortOrder
  }

  export type ClassroomMinOrderByAggregateInput = {
    id?: SortOrder
    simulationId?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    staffRatio?: SortOrder
    enrolled?: SortOrder
  }

  export type ClassroomSumOrderByAggregateInput = {
    capacity?: SortOrder
    staffRatio?: SortOrder
    enrolled?: SortOrder
  }

  export type BusinessGoalCountOrderByAggregateInput = {
    id?: SortOrder
    simulationId?: SortOrder
    name?: SortOrder
    targetValue?: SortOrder
    unit?: SortOrder
  }

  export type BusinessGoalAvgOrderByAggregateInput = {
    targetValue?: SortOrder
  }

  export type BusinessGoalMaxOrderByAggregateInput = {
    id?: SortOrder
    simulationId?: SortOrder
    name?: SortOrder
    targetValue?: SortOrder
    unit?: SortOrder
  }

  export type BusinessGoalMinOrderByAggregateInput = {
    id?: SortOrder
    simulationId?: SortOrder
    name?: SortOrder
    targetValue?: SortOrder
    unit?: SortOrder
  }

  export type BusinessGoalSumOrderByAggregateInput = {
    targetValue?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type InsightCountOrderByAggregateInput = {
    id?: SortOrder
    simulationId?: SortOrder
    netMonthlyIncome?: SortOrder
    breakEvenEnrollment?: SortOrder
    capacityUtilization?: SortOrder
    largestExpenseName?: SortOrder
    largestExpensePct?: SortOrder
    executiveSummary?: SortOrder
    recommendations?: SortOrder
    actionPlan?: SortOrder
    createdAt?: SortOrder
  }

  export type InsightAvgOrderByAggregateInput = {
    netMonthlyIncome?: SortOrder
    breakEvenEnrollment?: SortOrder
    capacityUtilization?: SortOrder
    largestExpensePct?: SortOrder
  }

  export type InsightMaxOrderByAggregateInput = {
    id?: SortOrder
    simulationId?: SortOrder
    netMonthlyIncome?: SortOrder
    breakEvenEnrollment?: SortOrder
    capacityUtilization?: SortOrder
    largestExpenseName?: SortOrder
    largestExpensePct?: SortOrder
    createdAt?: SortOrder
  }

  export type InsightMinOrderByAggregateInput = {
    id?: SortOrder
    simulationId?: SortOrder
    netMonthlyIncome?: SortOrder
    breakEvenEnrollment?: SortOrder
    capacityUtilization?: SortOrder
    largestExpenseName?: SortOrder
    largestExpensePct?: SortOrder
    createdAt?: SortOrder
  }

  export type InsightSumOrderByAggregateInput = {
    netMonthlyIncome?: SortOrder
    breakEvenEnrollment?: SortOrder
    capacityUtilization?: SortOrder
    largestExpensePct?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type SimulationCreateNestedManyWithoutUserInput = {
    create?: XOR<SimulationCreateWithoutUserInput, SimulationUncheckedCreateWithoutUserInput> | SimulationCreateWithoutUserInput[] | SimulationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SimulationCreateOrConnectWithoutUserInput | SimulationCreateOrConnectWithoutUserInput[]
    createMany?: SimulationCreateManyUserInputEnvelope
    connect?: SimulationWhereUniqueInput | SimulationWhereUniqueInput[]
  }

  export type SimulationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SimulationCreateWithoutUserInput, SimulationUncheckedCreateWithoutUserInput> | SimulationCreateWithoutUserInput[] | SimulationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SimulationCreateOrConnectWithoutUserInput | SimulationCreateOrConnectWithoutUserInput[]
    createMany?: SimulationCreateManyUserInputEnvelope
    connect?: SimulationWhereUniqueInput | SimulationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SimulationUpdateManyWithoutUserNestedInput = {
    create?: XOR<SimulationCreateWithoutUserInput, SimulationUncheckedCreateWithoutUserInput> | SimulationCreateWithoutUserInput[] | SimulationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SimulationCreateOrConnectWithoutUserInput | SimulationCreateOrConnectWithoutUserInput[]
    upsert?: SimulationUpsertWithWhereUniqueWithoutUserInput | SimulationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SimulationCreateManyUserInputEnvelope
    set?: SimulationWhereUniqueInput | SimulationWhereUniqueInput[]
    disconnect?: SimulationWhereUniqueInput | SimulationWhereUniqueInput[]
    delete?: SimulationWhereUniqueInput | SimulationWhereUniqueInput[]
    connect?: SimulationWhereUniqueInput | SimulationWhereUniqueInput[]
    update?: SimulationUpdateWithWhereUniqueWithoutUserInput | SimulationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SimulationUpdateManyWithWhereWithoutUserInput | SimulationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SimulationScalarWhereInput | SimulationScalarWhereInput[]
  }

  export type SimulationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SimulationCreateWithoutUserInput, SimulationUncheckedCreateWithoutUserInput> | SimulationCreateWithoutUserInput[] | SimulationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SimulationCreateOrConnectWithoutUserInput | SimulationCreateOrConnectWithoutUserInput[]
    upsert?: SimulationUpsertWithWhereUniqueWithoutUserInput | SimulationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SimulationCreateManyUserInputEnvelope
    set?: SimulationWhereUniqueInput | SimulationWhereUniqueInput[]
    disconnect?: SimulationWhereUniqueInput | SimulationWhereUniqueInput[]
    delete?: SimulationWhereUniqueInput | SimulationWhereUniqueInput[]
    connect?: SimulationWhereUniqueInput | SimulationWhereUniqueInput[]
    update?: SimulationUpdateWithWhereUniqueWithoutUserInput | SimulationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SimulationUpdateManyWithWhereWithoutUserInput | SimulationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SimulationScalarWhereInput | SimulationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSimulationsInput = {
    create?: XOR<UserCreateWithoutSimulationsInput, UserUncheckedCreateWithoutSimulationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSimulationsInput
    connect?: UserWhereUniqueInput
  }

  export type RevenueSourceCreateNestedManyWithoutSimulationInput = {
    create?: XOR<RevenueSourceCreateWithoutSimulationInput, RevenueSourceUncheckedCreateWithoutSimulationInput> | RevenueSourceCreateWithoutSimulationInput[] | RevenueSourceUncheckedCreateWithoutSimulationInput[]
    connectOrCreate?: RevenueSourceCreateOrConnectWithoutSimulationInput | RevenueSourceCreateOrConnectWithoutSimulationInput[]
    createMany?: RevenueSourceCreateManySimulationInputEnvelope
    connect?: RevenueSourceWhereUniqueInput | RevenueSourceWhereUniqueInput[]
  }

  export type ExpenseItemCreateNestedManyWithoutSimulationInput = {
    create?: XOR<ExpenseItemCreateWithoutSimulationInput, ExpenseItemUncheckedCreateWithoutSimulationInput> | ExpenseItemCreateWithoutSimulationInput[] | ExpenseItemUncheckedCreateWithoutSimulationInput[]
    connectOrCreate?: ExpenseItemCreateOrConnectWithoutSimulationInput | ExpenseItemCreateOrConnectWithoutSimulationInput[]
    createMany?: ExpenseItemCreateManySimulationInputEnvelope
    connect?: ExpenseItemWhereUniqueInput | ExpenseItemWhereUniqueInput[]
  }

  export type ClassroomCreateNestedManyWithoutSimulationInput = {
    create?: XOR<ClassroomCreateWithoutSimulationInput, ClassroomUncheckedCreateWithoutSimulationInput> | ClassroomCreateWithoutSimulationInput[] | ClassroomUncheckedCreateWithoutSimulationInput[]
    connectOrCreate?: ClassroomCreateOrConnectWithoutSimulationInput | ClassroomCreateOrConnectWithoutSimulationInput[]
    createMany?: ClassroomCreateManySimulationInputEnvelope
    connect?: ClassroomWhereUniqueInput | ClassroomWhereUniqueInput[]
  }

  export type BusinessGoalCreateNestedManyWithoutSimulationInput = {
    create?: XOR<BusinessGoalCreateWithoutSimulationInput, BusinessGoalUncheckedCreateWithoutSimulationInput> | BusinessGoalCreateWithoutSimulationInput[] | BusinessGoalUncheckedCreateWithoutSimulationInput[]
    connectOrCreate?: BusinessGoalCreateOrConnectWithoutSimulationInput | BusinessGoalCreateOrConnectWithoutSimulationInput[]
    createMany?: BusinessGoalCreateManySimulationInputEnvelope
    connect?: BusinessGoalWhereUniqueInput | BusinessGoalWhereUniqueInput[]
  }

  export type InsightCreateNestedOneWithoutSimulationInput = {
    create?: XOR<InsightCreateWithoutSimulationInput, InsightUncheckedCreateWithoutSimulationInput>
    connectOrCreate?: InsightCreateOrConnectWithoutSimulationInput
    connect?: InsightWhereUniqueInput
  }

  export type RevenueSourceUncheckedCreateNestedManyWithoutSimulationInput = {
    create?: XOR<RevenueSourceCreateWithoutSimulationInput, RevenueSourceUncheckedCreateWithoutSimulationInput> | RevenueSourceCreateWithoutSimulationInput[] | RevenueSourceUncheckedCreateWithoutSimulationInput[]
    connectOrCreate?: RevenueSourceCreateOrConnectWithoutSimulationInput | RevenueSourceCreateOrConnectWithoutSimulationInput[]
    createMany?: RevenueSourceCreateManySimulationInputEnvelope
    connect?: RevenueSourceWhereUniqueInput | RevenueSourceWhereUniqueInput[]
  }

  export type ExpenseItemUncheckedCreateNestedManyWithoutSimulationInput = {
    create?: XOR<ExpenseItemCreateWithoutSimulationInput, ExpenseItemUncheckedCreateWithoutSimulationInput> | ExpenseItemCreateWithoutSimulationInput[] | ExpenseItemUncheckedCreateWithoutSimulationInput[]
    connectOrCreate?: ExpenseItemCreateOrConnectWithoutSimulationInput | ExpenseItemCreateOrConnectWithoutSimulationInput[]
    createMany?: ExpenseItemCreateManySimulationInputEnvelope
    connect?: ExpenseItemWhereUniqueInput | ExpenseItemWhereUniqueInput[]
  }

  export type ClassroomUncheckedCreateNestedManyWithoutSimulationInput = {
    create?: XOR<ClassroomCreateWithoutSimulationInput, ClassroomUncheckedCreateWithoutSimulationInput> | ClassroomCreateWithoutSimulationInput[] | ClassroomUncheckedCreateWithoutSimulationInput[]
    connectOrCreate?: ClassroomCreateOrConnectWithoutSimulationInput | ClassroomCreateOrConnectWithoutSimulationInput[]
    createMany?: ClassroomCreateManySimulationInputEnvelope
    connect?: ClassroomWhereUniqueInput | ClassroomWhereUniqueInput[]
  }

  export type BusinessGoalUncheckedCreateNestedManyWithoutSimulationInput = {
    create?: XOR<BusinessGoalCreateWithoutSimulationInput, BusinessGoalUncheckedCreateWithoutSimulationInput> | BusinessGoalCreateWithoutSimulationInput[] | BusinessGoalUncheckedCreateWithoutSimulationInput[]
    connectOrCreate?: BusinessGoalCreateOrConnectWithoutSimulationInput | BusinessGoalCreateOrConnectWithoutSimulationInput[]
    createMany?: BusinessGoalCreateManySimulationInputEnvelope
    connect?: BusinessGoalWhereUniqueInput | BusinessGoalWhereUniqueInput[]
  }

  export type InsightUncheckedCreateNestedOneWithoutSimulationInput = {
    create?: XOR<InsightCreateWithoutSimulationInput, InsightUncheckedCreateWithoutSimulationInput>
    connectOrCreate?: InsightCreateOrConnectWithoutSimulationInput
    connect?: InsightWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumSimStatusFieldUpdateOperationsInput = {
    set?: $Enums.SimStatus
  }

  export type UserUpdateOneRequiredWithoutSimulationsNestedInput = {
    create?: XOR<UserCreateWithoutSimulationsInput, UserUncheckedCreateWithoutSimulationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSimulationsInput
    upsert?: UserUpsertWithoutSimulationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSimulationsInput, UserUpdateWithoutSimulationsInput>, UserUncheckedUpdateWithoutSimulationsInput>
  }

  export type RevenueSourceUpdateManyWithoutSimulationNestedInput = {
    create?: XOR<RevenueSourceCreateWithoutSimulationInput, RevenueSourceUncheckedCreateWithoutSimulationInput> | RevenueSourceCreateWithoutSimulationInput[] | RevenueSourceUncheckedCreateWithoutSimulationInput[]
    connectOrCreate?: RevenueSourceCreateOrConnectWithoutSimulationInput | RevenueSourceCreateOrConnectWithoutSimulationInput[]
    upsert?: RevenueSourceUpsertWithWhereUniqueWithoutSimulationInput | RevenueSourceUpsertWithWhereUniqueWithoutSimulationInput[]
    createMany?: RevenueSourceCreateManySimulationInputEnvelope
    set?: RevenueSourceWhereUniqueInput | RevenueSourceWhereUniqueInput[]
    disconnect?: RevenueSourceWhereUniqueInput | RevenueSourceWhereUniqueInput[]
    delete?: RevenueSourceWhereUniqueInput | RevenueSourceWhereUniqueInput[]
    connect?: RevenueSourceWhereUniqueInput | RevenueSourceWhereUniqueInput[]
    update?: RevenueSourceUpdateWithWhereUniqueWithoutSimulationInput | RevenueSourceUpdateWithWhereUniqueWithoutSimulationInput[]
    updateMany?: RevenueSourceUpdateManyWithWhereWithoutSimulationInput | RevenueSourceUpdateManyWithWhereWithoutSimulationInput[]
    deleteMany?: RevenueSourceScalarWhereInput | RevenueSourceScalarWhereInput[]
  }

  export type ExpenseItemUpdateManyWithoutSimulationNestedInput = {
    create?: XOR<ExpenseItemCreateWithoutSimulationInput, ExpenseItemUncheckedCreateWithoutSimulationInput> | ExpenseItemCreateWithoutSimulationInput[] | ExpenseItemUncheckedCreateWithoutSimulationInput[]
    connectOrCreate?: ExpenseItemCreateOrConnectWithoutSimulationInput | ExpenseItemCreateOrConnectWithoutSimulationInput[]
    upsert?: ExpenseItemUpsertWithWhereUniqueWithoutSimulationInput | ExpenseItemUpsertWithWhereUniqueWithoutSimulationInput[]
    createMany?: ExpenseItemCreateManySimulationInputEnvelope
    set?: ExpenseItemWhereUniqueInput | ExpenseItemWhereUniqueInput[]
    disconnect?: ExpenseItemWhereUniqueInput | ExpenseItemWhereUniqueInput[]
    delete?: ExpenseItemWhereUniqueInput | ExpenseItemWhereUniqueInput[]
    connect?: ExpenseItemWhereUniqueInput | ExpenseItemWhereUniqueInput[]
    update?: ExpenseItemUpdateWithWhereUniqueWithoutSimulationInput | ExpenseItemUpdateWithWhereUniqueWithoutSimulationInput[]
    updateMany?: ExpenseItemUpdateManyWithWhereWithoutSimulationInput | ExpenseItemUpdateManyWithWhereWithoutSimulationInput[]
    deleteMany?: ExpenseItemScalarWhereInput | ExpenseItemScalarWhereInput[]
  }

  export type ClassroomUpdateManyWithoutSimulationNestedInput = {
    create?: XOR<ClassroomCreateWithoutSimulationInput, ClassroomUncheckedCreateWithoutSimulationInput> | ClassroomCreateWithoutSimulationInput[] | ClassroomUncheckedCreateWithoutSimulationInput[]
    connectOrCreate?: ClassroomCreateOrConnectWithoutSimulationInput | ClassroomCreateOrConnectWithoutSimulationInput[]
    upsert?: ClassroomUpsertWithWhereUniqueWithoutSimulationInput | ClassroomUpsertWithWhereUniqueWithoutSimulationInput[]
    createMany?: ClassroomCreateManySimulationInputEnvelope
    set?: ClassroomWhereUniqueInput | ClassroomWhereUniqueInput[]
    disconnect?: ClassroomWhereUniqueInput | ClassroomWhereUniqueInput[]
    delete?: ClassroomWhereUniqueInput | ClassroomWhereUniqueInput[]
    connect?: ClassroomWhereUniqueInput | ClassroomWhereUniqueInput[]
    update?: ClassroomUpdateWithWhereUniqueWithoutSimulationInput | ClassroomUpdateWithWhereUniqueWithoutSimulationInput[]
    updateMany?: ClassroomUpdateManyWithWhereWithoutSimulationInput | ClassroomUpdateManyWithWhereWithoutSimulationInput[]
    deleteMany?: ClassroomScalarWhereInput | ClassroomScalarWhereInput[]
  }

  export type BusinessGoalUpdateManyWithoutSimulationNestedInput = {
    create?: XOR<BusinessGoalCreateWithoutSimulationInput, BusinessGoalUncheckedCreateWithoutSimulationInput> | BusinessGoalCreateWithoutSimulationInput[] | BusinessGoalUncheckedCreateWithoutSimulationInput[]
    connectOrCreate?: BusinessGoalCreateOrConnectWithoutSimulationInput | BusinessGoalCreateOrConnectWithoutSimulationInput[]
    upsert?: BusinessGoalUpsertWithWhereUniqueWithoutSimulationInput | BusinessGoalUpsertWithWhereUniqueWithoutSimulationInput[]
    createMany?: BusinessGoalCreateManySimulationInputEnvelope
    set?: BusinessGoalWhereUniqueInput | BusinessGoalWhereUniqueInput[]
    disconnect?: BusinessGoalWhereUniqueInput | BusinessGoalWhereUniqueInput[]
    delete?: BusinessGoalWhereUniqueInput | BusinessGoalWhereUniqueInput[]
    connect?: BusinessGoalWhereUniqueInput | BusinessGoalWhereUniqueInput[]
    update?: BusinessGoalUpdateWithWhereUniqueWithoutSimulationInput | BusinessGoalUpdateWithWhereUniqueWithoutSimulationInput[]
    updateMany?: BusinessGoalUpdateManyWithWhereWithoutSimulationInput | BusinessGoalUpdateManyWithWhereWithoutSimulationInput[]
    deleteMany?: BusinessGoalScalarWhereInput | BusinessGoalScalarWhereInput[]
  }

  export type InsightUpdateOneWithoutSimulationNestedInput = {
    create?: XOR<InsightCreateWithoutSimulationInput, InsightUncheckedCreateWithoutSimulationInput>
    connectOrCreate?: InsightCreateOrConnectWithoutSimulationInput
    upsert?: InsightUpsertWithoutSimulationInput
    disconnect?: InsightWhereInput | boolean
    delete?: InsightWhereInput | boolean
    connect?: InsightWhereUniqueInput
    update?: XOR<XOR<InsightUpdateToOneWithWhereWithoutSimulationInput, InsightUpdateWithoutSimulationInput>, InsightUncheckedUpdateWithoutSimulationInput>
  }

  export type RevenueSourceUncheckedUpdateManyWithoutSimulationNestedInput = {
    create?: XOR<RevenueSourceCreateWithoutSimulationInput, RevenueSourceUncheckedCreateWithoutSimulationInput> | RevenueSourceCreateWithoutSimulationInput[] | RevenueSourceUncheckedCreateWithoutSimulationInput[]
    connectOrCreate?: RevenueSourceCreateOrConnectWithoutSimulationInput | RevenueSourceCreateOrConnectWithoutSimulationInput[]
    upsert?: RevenueSourceUpsertWithWhereUniqueWithoutSimulationInput | RevenueSourceUpsertWithWhereUniqueWithoutSimulationInput[]
    createMany?: RevenueSourceCreateManySimulationInputEnvelope
    set?: RevenueSourceWhereUniqueInput | RevenueSourceWhereUniqueInput[]
    disconnect?: RevenueSourceWhereUniqueInput | RevenueSourceWhereUniqueInput[]
    delete?: RevenueSourceWhereUniqueInput | RevenueSourceWhereUniqueInput[]
    connect?: RevenueSourceWhereUniqueInput | RevenueSourceWhereUniqueInput[]
    update?: RevenueSourceUpdateWithWhereUniqueWithoutSimulationInput | RevenueSourceUpdateWithWhereUniqueWithoutSimulationInput[]
    updateMany?: RevenueSourceUpdateManyWithWhereWithoutSimulationInput | RevenueSourceUpdateManyWithWhereWithoutSimulationInput[]
    deleteMany?: RevenueSourceScalarWhereInput | RevenueSourceScalarWhereInput[]
  }

  export type ExpenseItemUncheckedUpdateManyWithoutSimulationNestedInput = {
    create?: XOR<ExpenseItemCreateWithoutSimulationInput, ExpenseItemUncheckedCreateWithoutSimulationInput> | ExpenseItemCreateWithoutSimulationInput[] | ExpenseItemUncheckedCreateWithoutSimulationInput[]
    connectOrCreate?: ExpenseItemCreateOrConnectWithoutSimulationInput | ExpenseItemCreateOrConnectWithoutSimulationInput[]
    upsert?: ExpenseItemUpsertWithWhereUniqueWithoutSimulationInput | ExpenseItemUpsertWithWhereUniqueWithoutSimulationInput[]
    createMany?: ExpenseItemCreateManySimulationInputEnvelope
    set?: ExpenseItemWhereUniqueInput | ExpenseItemWhereUniqueInput[]
    disconnect?: ExpenseItemWhereUniqueInput | ExpenseItemWhereUniqueInput[]
    delete?: ExpenseItemWhereUniqueInput | ExpenseItemWhereUniqueInput[]
    connect?: ExpenseItemWhereUniqueInput | ExpenseItemWhereUniqueInput[]
    update?: ExpenseItemUpdateWithWhereUniqueWithoutSimulationInput | ExpenseItemUpdateWithWhereUniqueWithoutSimulationInput[]
    updateMany?: ExpenseItemUpdateManyWithWhereWithoutSimulationInput | ExpenseItemUpdateManyWithWhereWithoutSimulationInput[]
    deleteMany?: ExpenseItemScalarWhereInput | ExpenseItemScalarWhereInput[]
  }

  export type ClassroomUncheckedUpdateManyWithoutSimulationNestedInput = {
    create?: XOR<ClassroomCreateWithoutSimulationInput, ClassroomUncheckedCreateWithoutSimulationInput> | ClassroomCreateWithoutSimulationInput[] | ClassroomUncheckedCreateWithoutSimulationInput[]
    connectOrCreate?: ClassroomCreateOrConnectWithoutSimulationInput | ClassroomCreateOrConnectWithoutSimulationInput[]
    upsert?: ClassroomUpsertWithWhereUniqueWithoutSimulationInput | ClassroomUpsertWithWhereUniqueWithoutSimulationInput[]
    createMany?: ClassroomCreateManySimulationInputEnvelope
    set?: ClassroomWhereUniqueInput | ClassroomWhereUniqueInput[]
    disconnect?: ClassroomWhereUniqueInput | ClassroomWhereUniqueInput[]
    delete?: ClassroomWhereUniqueInput | ClassroomWhereUniqueInput[]
    connect?: ClassroomWhereUniqueInput | ClassroomWhereUniqueInput[]
    update?: ClassroomUpdateWithWhereUniqueWithoutSimulationInput | ClassroomUpdateWithWhereUniqueWithoutSimulationInput[]
    updateMany?: ClassroomUpdateManyWithWhereWithoutSimulationInput | ClassroomUpdateManyWithWhereWithoutSimulationInput[]
    deleteMany?: ClassroomScalarWhereInput | ClassroomScalarWhereInput[]
  }

  export type BusinessGoalUncheckedUpdateManyWithoutSimulationNestedInput = {
    create?: XOR<BusinessGoalCreateWithoutSimulationInput, BusinessGoalUncheckedCreateWithoutSimulationInput> | BusinessGoalCreateWithoutSimulationInput[] | BusinessGoalUncheckedCreateWithoutSimulationInput[]
    connectOrCreate?: BusinessGoalCreateOrConnectWithoutSimulationInput | BusinessGoalCreateOrConnectWithoutSimulationInput[]
    upsert?: BusinessGoalUpsertWithWhereUniqueWithoutSimulationInput | BusinessGoalUpsertWithWhereUniqueWithoutSimulationInput[]
    createMany?: BusinessGoalCreateManySimulationInputEnvelope
    set?: BusinessGoalWhereUniqueInput | BusinessGoalWhereUniqueInput[]
    disconnect?: BusinessGoalWhereUniqueInput | BusinessGoalWhereUniqueInput[]
    delete?: BusinessGoalWhereUniqueInput | BusinessGoalWhereUniqueInput[]
    connect?: BusinessGoalWhereUniqueInput | BusinessGoalWhereUniqueInput[]
    update?: BusinessGoalUpdateWithWhereUniqueWithoutSimulationInput | BusinessGoalUpdateWithWhereUniqueWithoutSimulationInput[]
    updateMany?: BusinessGoalUpdateManyWithWhereWithoutSimulationInput | BusinessGoalUpdateManyWithWhereWithoutSimulationInput[]
    deleteMany?: BusinessGoalScalarWhereInput | BusinessGoalScalarWhereInput[]
  }

  export type InsightUncheckedUpdateOneWithoutSimulationNestedInput = {
    create?: XOR<InsightCreateWithoutSimulationInput, InsightUncheckedCreateWithoutSimulationInput>
    connectOrCreate?: InsightCreateOrConnectWithoutSimulationInput
    upsert?: InsightUpsertWithoutSimulationInput
    disconnect?: InsightWhereInput | boolean
    delete?: InsightWhereInput | boolean
    connect?: InsightWhereUniqueInput
    update?: XOR<XOR<InsightUpdateToOneWithWhereWithoutSimulationInput, InsightUpdateWithoutSimulationInput>, InsightUncheckedUpdateWithoutSimulationInput>
  }

  export type SimulationCreateNestedOneWithoutRevenueSourcesInput = {
    create?: XOR<SimulationCreateWithoutRevenueSourcesInput, SimulationUncheckedCreateWithoutRevenueSourcesInput>
    connectOrCreate?: SimulationCreateOrConnectWithoutRevenueSourcesInput
    connect?: SimulationWhereUniqueInput
  }

  export type SimulationUpdateOneRequiredWithoutRevenueSourcesNestedInput = {
    create?: XOR<SimulationCreateWithoutRevenueSourcesInput, SimulationUncheckedCreateWithoutRevenueSourcesInput>
    connectOrCreate?: SimulationCreateOrConnectWithoutRevenueSourcesInput
    upsert?: SimulationUpsertWithoutRevenueSourcesInput
    connect?: SimulationWhereUniqueInput
    update?: XOR<XOR<SimulationUpdateToOneWithWhereWithoutRevenueSourcesInput, SimulationUpdateWithoutRevenueSourcesInput>, SimulationUncheckedUpdateWithoutRevenueSourcesInput>
  }

  export type SimulationCreateNestedOneWithoutExpenseItemsInput = {
    create?: XOR<SimulationCreateWithoutExpenseItemsInput, SimulationUncheckedCreateWithoutExpenseItemsInput>
    connectOrCreate?: SimulationCreateOrConnectWithoutExpenseItemsInput
    connect?: SimulationWhereUniqueInput
  }

  export type SimulationUpdateOneRequiredWithoutExpenseItemsNestedInput = {
    create?: XOR<SimulationCreateWithoutExpenseItemsInput, SimulationUncheckedCreateWithoutExpenseItemsInput>
    connectOrCreate?: SimulationCreateOrConnectWithoutExpenseItemsInput
    upsert?: SimulationUpsertWithoutExpenseItemsInput
    connect?: SimulationWhereUniqueInput
    update?: XOR<XOR<SimulationUpdateToOneWithWhereWithoutExpenseItemsInput, SimulationUpdateWithoutExpenseItemsInput>, SimulationUncheckedUpdateWithoutExpenseItemsInput>
  }

  export type SimulationCreateNestedOneWithoutClassroomsInput = {
    create?: XOR<SimulationCreateWithoutClassroomsInput, SimulationUncheckedCreateWithoutClassroomsInput>
    connectOrCreate?: SimulationCreateOrConnectWithoutClassroomsInput
    connect?: SimulationWhereUniqueInput
  }

  export type SimulationUpdateOneRequiredWithoutClassroomsNestedInput = {
    create?: XOR<SimulationCreateWithoutClassroomsInput, SimulationUncheckedCreateWithoutClassroomsInput>
    connectOrCreate?: SimulationCreateOrConnectWithoutClassroomsInput
    upsert?: SimulationUpsertWithoutClassroomsInput
    connect?: SimulationWhereUniqueInput
    update?: XOR<XOR<SimulationUpdateToOneWithWhereWithoutClassroomsInput, SimulationUpdateWithoutClassroomsInput>, SimulationUncheckedUpdateWithoutClassroomsInput>
  }

  export type SimulationCreateNestedOneWithoutBusinessGoalsInput = {
    create?: XOR<SimulationCreateWithoutBusinessGoalsInput, SimulationUncheckedCreateWithoutBusinessGoalsInput>
    connectOrCreate?: SimulationCreateOrConnectWithoutBusinessGoalsInput
    connect?: SimulationWhereUniqueInput
  }

  export type SimulationUpdateOneRequiredWithoutBusinessGoalsNestedInput = {
    create?: XOR<SimulationCreateWithoutBusinessGoalsInput, SimulationUncheckedCreateWithoutBusinessGoalsInput>
    connectOrCreate?: SimulationCreateOrConnectWithoutBusinessGoalsInput
    upsert?: SimulationUpsertWithoutBusinessGoalsInput
    connect?: SimulationWhereUniqueInput
    update?: XOR<XOR<SimulationUpdateToOneWithWhereWithoutBusinessGoalsInput, SimulationUpdateWithoutBusinessGoalsInput>, SimulationUncheckedUpdateWithoutBusinessGoalsInput>
  }

  export type SimulationCreateNestedOneWithoutInsightInput = {
    create?: XOR<SimulationCreateWithoutInsightInput, SimulationUncheckedCreateWithoutInsightInput>
    connectOrCreate?: SimulationCreateOrConnectWithoutInsightInput
    connect?: SimulationWhereUniqueInput
  }

  export type SimulationUpdateOneRequiredWithoutInsightNestedInput = {
    create?: XOR<SimulationCreateWithoutInsightInput, SimulationUncheckedCreateWithoutInsightInput>
    connectOrCreate?: SimulationCreateOrConnectWithoutInsightInput
    upsert?: SimulationUpsertWithoutInsightInput
    connect?: SimulationWhereUniqueInput
    update?: XOR<XOR<SimulationUpdateToOneWithWhereWithoutInsightInput, SimulationUpdateWithoutInsightInput>, SimulationUncheckedUpdateWithoutInsightInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumSimStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SimStatus | EnumSimStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SimStatus[] | ListEnumSimStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SimStatus[] | ListEnumSimStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSimStatusFilter<$PrismaModel> | $Enums.SimStatus
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedEnumSimStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SimStatus | EnumSimStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SimStatus[] | ListEnumSimStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SimStatus[] | ListEnumSimStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSimStatusWithAggregatesFilter<$PrismaModel> | $Enums.SimStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSimStatusFilter<$PrismaModel>
    _max?: NestedEnumSimStatusFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type SimulationCreateWithoutUserInput = {
    id?: string
    businessName: string
    operatingHours?: number
    operatingDays?: number
    status?: $Enums.SimStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    revenueSources?: RevenueSourceCreateNestedManyWithoutSimulationInput
    expenseItems?: ExpenseItemCreateNestedManyWithoutSimulationInput
    classrooms?: ClassroomCreateNestedManyWithoutSimulationInput
    businessGoals?: BusinessGoalCreateNestedManyWithoutSimulationInput
    insight?: InsightCreateNestedOneWithoutSimulationInput
  }

  export type SimulationUncheckedCreateWithoutUserInput = {
    id?: string
    businessName: string
    operatingHours?: number
    operatingDays?: number
    status?: $Enums.SimStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    revenueSources?: RevenueSourceUncheckedCreateNestedManyWithoutSimulationInput
    expenseItems?: ExpenseItemUncheckedCreateNestedManyWithoutSimulationInput
    classrooms?: ClassroomUncheckedCreateNestedManyWithoutSimulationInput
    businessGoals?: BusinessGoalUncheckedCreateNestedManyWithoutSimulationInput
    insight?: InsightUncheckedCreateNestedOneWithoutSimulationInput
  }

  export type SimulationCreateOrConnectWithoutUserInput = {
    where: SimulationWhereUniqueInput
    create: XOR<SimulationCreateWithoutUserInput, SimulationUncheckedCreateWithoutUserInput>
  }

  export type SimulationCreateManyUserInputEnvelope = {
    data: SimulationCreateManyUserInput | SimulationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SimulationUpsertWithWhereUniqueWithoutUserInput = {
    where: SimulationWhereUniqueInput
    update: XOR<SimulationUpdateWithoutUserInput, SimulationUncheckedUpdateWithoutUserInput>
    create: XOR<SimulationCreateWithoutUserInput, SimulationUncheckedCreateWithoutUserInput>
  }

  export type SimulationUpdateWithWhereUniqueWithoutUserInput = {
    where: SimulationWhereUniqueInput
    data: XOR<SimulationUpdateWithoutUserInput, SimulationUncheckedUpdateWithoutUserInput>
  }

  export type SimulationUpdateManyWithWhereWithoutUserInput = {
    where: SimulationScalarWhereInput
    data: XOR<SimulationUpdateManyMutationInput, SimulationUncheckedUpdateManyWithoutUserInput>
  }

  export type SimulationScalarWhereInput = {
    AND?: SimulationScalarWhereInput | SimulationScalarWhereInput[]
    OR?: SimulationScalarWhereInput[]
    NOT?: SimulationScalarWhereInput | SimulationScalarWhereInput[]
    id?: StringFilter<"Simulation"> | string
    userId?: StringFilter<"Simulation"> | string
    businessName?: StringFilter<"Simulation"> | string
    operatingHours?: FloatFilter<"Simulation"> | number
    operatingDays?: IntFilter<"Simulation"> | number
    status?: EnumSimStatusFilter<"Simulation"> | $Enums.SimStatus
    createdAt?: DateTimeFilter<"Simulation"> | Date | string
    updatedAt?: DateTimeFilter<"Simulation"> | Date | string
  }

  export type UserCreateWithoutSimulationsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutSimulationsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutSimulationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSimulationsInput, UserUncheckedCreateWithoutSimulationsInput>
  }

  export type RevenueSourceCreateWithoutSimulationInput = {
    id?: string
    name: string
    amount: number
    tag?: string | null
  }

  export type RevenueSourceUncheckedCreateWithoutSimulationInput = {
    id?: string
    name: string
    amount: number
    tag?: string | null
  }

  export type RevenueSourceCreateOrConnectWithoutSimulationInput = {
    where: RevenueSourceWhereUniqueInput
    create: XOR<RevenueSourceCreateWithoutSimulationInput, RevenueSourceUncheckedCreateWithoutSimulationInput>
  }

  export type RevenueSourceCreateManySimulationInputEnvelope = {
    data: RevenueSourceCreateManySimulationInput | RevenueSourceCreateManySimulationInput[]
    skipDuplicates?: boolean
  }

  export type ExpenseItemCreateWithoutSimulationInput = {
    id?: string
    name: string
    amount: number
    tag?: string | null
  }

  export type ExpenseItemUncheckedCreateWithoutSimulationInput = {
    id?: string
    name: string
    amount: number
    tag?: string | null
  }

  export type ExpenseItemCreateOrConnectWithoutSimulationInput = {
    where: ExpenseItemWhereUniqueInput
    create: XOR<ExpenseItemCreateWithoutSimulationInput, ExpenseItemUncheckedCreateWithoutSimulationInput>
  }

  export type ExpenseItemCreateManySimulationInputEnvelope = {
    data: ExpenseItemCreateManySimulationInput | ExpenseItemCreateManySimulationInput[]
    skipDuplicates?: boolean
  }

  export type ClassroomCreateWithoutSimulationInput = {
    id?: string
    name: string
    capacity: number
    staffRatio: number
    enrolled: number
  }

  export type ClassroomUncheckedCreateWithoutSimulationInput = {
    id?: string
    name: string
    capacity: number
    staffRatio: number
    enrolled: number
  }

  export type ClassroomCreateOrConnectWithoutSimulationInput = {
    where: ClassroomWhereUniqueInput
    create: XOR<ClassroomCreateWithoutSimulationInput, ClassroomUncheckedCreateWithoutSimulationInput>
  }

  export type ClassroomCreateManySimulationInputEnvelope = {
    data: ClassroomCreateManySimulationInput | ClassroomCreateManySimulationInput[]
    skipDuplicates?: boolean
  }

  export type BusinessGoalCreateWithoutSimulationInput = {
    id?: string
    name: string
    targetValue: number
    unit?: string
  }

  export type BusinessGoalUncheckedCreateWithoutSimulationInput = {
    id?: string
    name: string
    targetValue: number
    unit?: string
  }

  export type BusinessGoalCreateOrConnectWithoutSimulationInput = {
    where: BusinessGoalWhereUniqueInput
    create: XOR<BusinessGoalCreateWithoutSimulationInput, BusinessGoalUncheckedCreateWithoutSimulationInput>
  }

  export type BusinessGoalCreateManySimulationInputEnvelope = {
    data: BusinessGoalCreateManySimulationInput | BusinessGoalCreateManySimulationInput[]
    skipDuplicates?: boolean
  }

  export type InsightCreateWithoutSimulationInput = {
    id?: string
    netMonthlyIncome: number
    breakEvenEnrollment: number
    capacityUtilization: number
    largestExpenseName: string
    largestExpensePct: number
    executiveSummary: JsonNullValueInput | InputJsonValue
    recommendations: JsonNullValueInput | InputJsonValue
    actionPlan: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type InsightUncheckedCreateWithoutSimulationInput = {
    id?: string
    netMonthlyIncome: number
    breakEvenEnrollment: number
    capacityUtilization: number
    largestExpenseName: string
    largestExpensePct: number
    executiveSummary: JsonNullValueInput | InputJsonValue
    recommendations: JsonNullValueInput | InputJsonValue
    actionPlan: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type InsightCreateOrConnectWithoutSimulationInput = {
    where: InsightWhereUniqueInput
    create: XOR<InsightCreateWithoutSimulationInput, InsightUncheckedCreateWithoutSimulationInput>
  }

  export type UserUpsertWithoutSimulationsInput = {
    update: XOR<UserUpdateWithoutSimulationsInput, UserUncheckedUpdateWithoutSimulationsInput>
    create: XOR<UserCreateWithoutSimulationsInput, UserUncheckedCreateWithoutSimulationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSimulationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSimulationsInput, UserUncheckedUpdateWithoutSimulationsInput>
  }

  export type UserUpdateWithoutSimulationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutSimulationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RevenueSourceUpsertWithWhereUniqueWithoutSimulationInput = {
    where: RevenueSourceWhereUniqueInput
    update: XOR<RevenueSourceUpdateWithoutSimulationInput, RevenueSourceUncheckedUpdateWithoutSimulationInput>
    create: XOR<RevenueSourceCreateWithoutSimulationInput, RevenueSourceUncheckedCreateWithoutSimulationInput>
  }

  export type RevenueSourceUpdateWithWhereUniqueWithoutSimulationInput = {
    where: RevenueSourceWhereUniqueInput
    data: XOR<RevenueSourceUpdateWithoutSimulationInput, RevenueSourceUncheckedUpdateWithoutSimulationInput>
  }

  export type RevenueSourceUpdateManyWithWhereWithoutSimulationInput = {
    where: RevenueSourceScalarWhereInput
    data: XOR<RevenueSourceUpdateManyMutationInput, RevenueSourceUncheckedUpdateManyWithoutSimulationInput>
  }

  export type RevenueSourceScalarWhereInput = {
    AND?: RevenueSourceScalarWhereInput | RevenueSourceScalarWhereInput[]
    OR?: RevenueSourceScalarWhereInput[]
    NOT?: RevenueSourceScalarWhereInput | RevenueSourceScalarWhereInput[]
    id?: StringFilter<"RevenueSource"> | string
    simulationId?: StringFilter<"RevenueSource"> | string
    name?: StringFilter<"RevenueSource"> | string
    amount?: FloatFilter<"RevenueSource"> | number
    tag?: StringNullableFilter<"RevenueSource"> | string | null
  }

  export type ExpenseItemUpsertWithWhereUniqueWithoutSimulationInput = {
    where: ExpenseItemWhereUniqueInput
    update: XOR<ExpenseItemUpdateWithoutSimulationInput, ExpenseItemUncheckedUpdateWithoutSimulationInput>
    create: XOR<ExpenseItemCreateWithoutSimulationInput, ExpenseItemUncheckedCreateWithoutSimulationInput>
  }

  export type ExpenseItemUpdateWithWhereUniqueWithoutSimulationInput = {
    where: ExpenseItemWhereUniqueInput
    data: XOR<ExpenseItemUpdateWithoutSimulationInput, ExpenseItemUncheckedUpdateWithoutSimulationInput>
  }

  export type ExpenseItemUpdateManyWithWhereWithoutSimulationInput = {
    where: ExpenseItemScalarWhereInput
    data: XOR<ExpenseItemUpdateManyMutationInput, ExpenseItemUncheckedUpdateManyWithoutSimulationInput>
  }

  export type ExpenseItemScalarWhereInput = {
    AND?: ExpenseItemScalarWhereInput | ExpenseItemScalarWhereInput[]
    OR?: ExpenseItemScalarWhereInput[]
    NOT?: ExpenseItemScalarWhereInput | ExpenseItemScalarWhereInput[]
    id?: StringFilter<"ExpenseItem"> | string
    simulationId?: StringFilter<"ExpenseItem"> | string
    name?: StringFilter<"ExpenseItem"> | string
    amount?: FloatFilter<"ExpenseItem"> | number
    tag?: StringNullableFilter<"ExpenseItem"> | string | null
  }

  export type ClassroomUpsertWithWhereUniqueWithoutSimulationInput = {
    where: ClassroomWhereUniqueInput
    update: XOR<ClassroomUpdateWithoutSimulationInput, ClassroomUncheckedUpdateWithoutSimulationInput>
    create: XOR<ClassroomCreateWithoutSimulationInput, ClassroomUncheckedCreateWithoutSimulationInput>
  }

  export type ClassroomUpdateWithWhereUniqueWithoutSimulationInput = {
    where: ClassroomWhereUniqueInput
    data: XOR<ClassroomUpdateWithoutSimulationInput, ClassroomUncheckedUpdateWithoutSimulationInput>
  }

  export type ClassroomUpdateManyWithWhereWithoutSimulationInput = {
    where: ClassroomScalarWhereInput
    data: XOR<ClassroomUpdateManyMutationInput, ClassroomUncheckedUpdateManyWithoutSimulationInput>
  }

  export type ClassroomScalarWhereInput = {
    AND?: ClassroomScalarWhereInput | ClassroomScalarWhereInput[]
    OR?: ClassroomScalarWhereInput[]
    NOT?: ClassroomScalarWhereInput | ClassroomScalarWhereInput[]
    id?: StringFilter<"Classroom"> | string
    simulationId?: StringFilter<"Classroom"> | string
    name?: StringFilter<"Classroom"> | string
    capacity?: IntFilter<"Classroom"> | number
    staffRatio?: FloatFilter<"Classroom"> | number
    enrolled?: IntFilter<"Classroom"> | number
  }

  export type BusinessGoalUpsertWithWhereUniqueWithoutSimulationInput = {
    where: BusinessGoalWhereUniqueInput
    update: XOR<BusinessGoalUpdateWithoutSimulationInput, BusinessGoalUncheckedUpdateWithoutSimulationInput>
    create: XOR<BusinessGoalCreateWithoutSimulationInput, BusinessGoalUncheckedCreateWithoutSimulationInput>
  }

  export type BusinessGoalUpdateWithWhereUniqueWithoutSimulationInput = {
    where: BusinessGoalWhereUniqueInput
    data: XOR<BusinessGoalUpdateWithoutSimulationInput, BusinessGoalUncheckedUpdateWithoutSimulationInput>
  }

  export type BusinessGoalUpdateManyWithWhereWithoutSimulationInput = {
    where: BusinessGoalScalarWhereInput
    data: XOR<BusinessGoalUpdateManyMutationInput, BusinessGoalUncheckedUpdateManyWithoutSimulationInput>
  }

  export type BusinessGoalScalarWhereInput = {
    AND?: BusinessGoalScalarWhereInput | BusinessGoalScalarWhereInput[]
    OR?: BusinessGoalScalarWhereInput[]
    NOT?: BusinessGoalScalarWhereInput | BusinessGoalScalarWhereInput[]
    id?: StringFilter<"BusinessGoal"> | string
    simulationId?: StringFilter<"BusinessGoal"> | string
    name?: StringFilter<"BusinessGoal"> | string
    targetValue?: FloatFilter<"BusinessGoal"> | number
    unit?: StringFilter<"BusinessGoal"> | string
  }

  export type InsightUpsertWithoutSimulationInput = {
    update: XOR<InsightUpdateWithoutSimulationInput, InsightUncheckedUpdateWithoutSimulationInput>
    create: XOR<InsightCreateWithoutSimulationInput, InsightUncheckedCreateWithoutSimulationInput>
    where?: InsightWhereInput
  }

  export type InsightUpdateToOneWithWhereWithoutSimulationInput = {
    where?: InsightWhereInput
    data: XOR<InsightUpdateWithoutSimulationInput, InsightUncheckedUpdateWithoutSimulationInput>
  }

  export type InsightUpdateWithoutSimulationInput = {
    id?: StringFieldUpdateOperationsInput | string
    netMonthlyIncome?: FloatFieldUpdateOperationsInput | number
    breakEvenEnrollment?: IntFieldUpdateOperationsInput | number
    capacityUtilization?: FloatFieldUpdateOperationsInput | number
    largestExpenseName?: StringFieldUpdateOperationsInput | string
    largestExpensePct?: FloatFieldUpdateOperationsInput | number
    executiveSummary?: JsonNullValueInput | InputJsonValue
    recommendations?: JsonNullValueInput | InputJsonValue
    actionPlan?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InsightUncheckedUpdateWithoutSimulationInput = {
    id?: StringFieldUpdateOperationsInput | string
    netMonthlyIncome?: FloatFieldUpdateOperationsInput | number
    breakEvenEnrollment?: IntFieldUpdateOperationsInput | number
    capacityUtilization?: FloatFieldUpdateOperationsInput | number
    largestExpenseName?: StringFieldUpdateOperationsInput | string
    largestExpensePct?: FloatFieldUpdateOperationsInput | number
    executiveSummary?: JsonNullValueInput | InputJsonValue
    recommendations?: JsonNullValueInput | InputJsonValue
    actionPlan?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SimulationCreateWithoutRevenueSourcesInput = {
    id?: string
    businessName: string
    operatingHours?: number
    operatingDays?: number
    status?: $Enums.SimStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSimulationsInput
    expenseItems?: ExpenseItemCreateNestedManyWithoutSimulationInput
    classrooms?: ClassroomCreateNestedManyWithoutSimulationInput
    businessGoals?: BusinessGoalCreateNestedManyWithoutSimulationInput
    insight?: InsightCreateNestedOneWithoutSimulationInput
  }

  export type SimulationUncheckedCreateWithoutRevenueSourcesInput = {
    id?: string
    userId: string
    businessName: string
    operatingHours?: number
    operatingDays?: number
    status?: $Enums.SimStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    expenseItems?: ExpenseItemUncheckedCreateNestedManyWithoutSimulationInput
    classrooms?: ClassroomUncheckedCreateNestedManyWithoutSimulationInput
    businessGoals?: BusinessGoalUncheckedCreateNestedManyWithoutSimulationInput
    insight?: InsightUncheckedCreateNestedOneWithoutSimulationInput
  }

  export type SimulationCreateOrConnectWithoutRevenueSourcesInput = {
    where: SimulationWhereUniqueInput
    create: XOR<SimulationCreateWithoutRevenueSourcesInput, SimulationUncheckedCreateWithoutRevenueSourcesInput>
  }

  export type SimulationUpsertWithoutRevenueSourcesInput = {
    update: XOR<SimulationUpdateWithoutRevenueSourcesInput, SimulationUncheckedUpdateWithoutRevenueSourcesInput>
    create: XOR<SimulationCreateWithoutRevenueSourcesInput, SimulationUncheckedCreateWithoutRevenueSourcesInput>
    where?: SimulationWhereInput
  }

  export type SimulationUpdateToOneWithWhereWithoutRevenueSourcesInput = {
    where?: SimulationWhereInput
    data: XOR<SimulationUpdateWithoutRevenueSourcesInput, SimulationUncheckedUpdateWithoutRevenueSourcesInput>
  }

  export type SimulationUpdateWithoutRevenueSourcesInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    operatingHours?: FloatFieldUpdateOperationsInput | number
    operatingDays?: IntFieldUpdateOperationsInput | number
    status?: EnumSimStatusFieldUpdateOperationsInput | $Enums.SimStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSimulationsNestedInput
    expenseItems?: ExpenseItemUpdateManyWithoutSimulationNestedInput
    classrooms?: ClassroomUpdateManyWithoutSimulationNestedInput
    businessGoals?: BusinessGoalUpdateManyWithoutSimulationNestedInput
    insight?: InsightUpdateOneWithoutSimulationNestedInput
  }

  export type SimulationUncheckedUpdateWithoutRevenueSourcesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    operatingHours?: FloatFieldUpdateOperationsInput | number
    operatingDays?: IntFieldUpdateOperationsInput | number
    status?: EnumSimStatusFieldUpdateOperationsInput | $Enums.SimStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expenseItems?: ExpenseItemUncheckedUpdateManyWithoutSimulationNestedInput
    classrooms?: ClassroomUncheckedUpdateManyWithoutSimulationNestedInput
    businessGoals?: BusinessGoalUncheckedUpdateManyWithoutSimulationNestedInput
    insight?: InsightUncheckedUpdateOneWithoutSimulationNestedInput
  }

  export type SimulationCreateWithoutExpenseItemsInput = {
    id?: string
    businessName: string
    operatingHours?: number
    operatingDays?: number
    status?: $Enums.SimStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSimulationsInput
    revenueSources?: RevenueSourceCreateNestedManyWithoutSimulationInput
    classrooms?: ClassroomCreateNestedManyWithoutSimulationInput
    businessGoals?: BusinessGoalCreateNestedManyWithoutSimulationInput
    insight?: InsightCreateNestedOneWithoutSimulationInput
  }

  export type SimulationUncheckedCreateWithoutExpenseItemsInput = {
    id?: string
    userId: string
    businessName: string
    operatingHours?: number
    operatingDays?: number
    status?: $Enums.SimStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    revenueSources?: RevenueSourceUncheckedCreateNestedManyWithoutSimulationInput
    classrooms?: ClassroomUncheckedCreateNestedManyWithoutSimulationInput
    businessGoals?: BusinessGoalUncheckedCreateNestedManyWithoutSimulationInput
    insight?: InsightUncheckedCreateNestedOneWithoutSimulationInput
  }

  export type SimulationCreateOrConnectWithoutExpenseItemsInput = {
    where: SimulationWhereUniqueInput
    create: XOR<SimulationCreateWithoutExpenseItemsInput, SimulationUncheckedCreateWithoutExpenseItemsInput>
  }

  export type SimulationUpsertWithoutExpenseItemsInput = {
    update: XOR<SimulationUpdateWithoutExpenseItemsInput, SimulationUncheckedUpdateWithoutExpenseItemsInput>
    create: XOR<SimulationCreateWithoutExpenseItemsInput, SimulationUncheckedCreateWithoutExpenseItemsInput>
    where?: SimulationWhereInput
  }

  export type SimulationUpdateToOneWithWhereWithoutExpenseItemsInput = {
    where?: SimulationWhereInput
    data: XOR<SimulationUpdateWithoutExpenseItemsInput, SimulationUncheckedUpdateWithoutExpenseItemsInput>
  }

  export type SimulationUpdateWithoutExpenseItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    operatingHours?: FloatFieldUpdateOperationsInput | number
    operatingDays?: IntFieldUpdateOperationsInput | number
    status?: EnumSimStatusFieldUpdateOperationsInput | $Enums.SimStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSimulationsNestedInput
    revenueSources?: RevenueSourceUpdateManyWithoutSimulationNestedInput
    classrooms?: ClassroomUpdateManyWithoutSimulationNestedInput
    businessGoals?: BusinessGoalUpdateManyWithoutSimulationNestedInput
    insight?: InsightUpdateOneWithoutSimulationNestedInput
  }

  export type SimulationUncheckedUpdateWithoutExpenseItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    operatingHours?: FloatFieldUpdateOperationsInput | number
    operatingDays?: IntFieldUpdateOperationsInput | number
    status?: EnumSimStatusFieldUpdateOperationsInput | $Enums.SimStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revenueSources?: RevenueSourceUncheckedUpdateManyWithoutSimulationNestedInput
    classrooms?: ClassroomUncheckedUpdateManyWithoutSimulationNestedInput
    businessGoals?: BusinessGoalUncheckedUpdateManyWithoutSimulationNestedInput
    insight?: InsightUncheckedUpdateOneWithoutSimulationNestedInput
  }

  export type SimulationCreateWithoutClassroomsInput = {
    id?: string
    businessName: string
    operatingHours?: number
    operatingDays?: number
    status?: $Enums.SimStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSimulationsInput
    revenueSources?: RevenueSourceCreateNestedManyWithoutSimulationInput
    expenseItems?: ExpenseItemCreateNestedManyWithoutSimulationInput
    businessGoals?: BusinessGoalCreateNestedManyWithoutSimulationInput
    insight?: InsightCreateNestedOneWithoutSimulationInput
  }

  export type SimulationUncheckedCreateWithoutClassroomsInput = {
    id?: string
    userId: string
    businessName: string
    operatingHours?: number
    operatingDays?: number
    status?: $Enums.SimStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    revenueSources?: RevenueSourceUncheckedCreateNestedManyWithoutSimulationInput
    expenseItems?: ExpenseItemUncheckedCreateNestedManyWithoutSimulationInput
    businessGoals?: BusinessGoalUncheckedCreateNestedManyWithoutSimulationInput
    insight?: InsightUncheckedCreateNestedOneWithoutSimulationInput
  }

  export type SimulationCreateOrConnectWithoutClassroomsInput = {
    where: SimulationWhereUniqueInput
    create: XOR<SimulationCreateWithoutClassroomsInput, SimulationUncheckedCreateWithoutClassroomsInput>
  }

  export type SimulationUpsertWithoutClassroomsInput = {
    update: XOR<SimulationUpdateWithoutClassroomsInput, SimulationUncheckedUpdateWithoutClassroomsInput>
    create: XOR<SimulationCreateWithoutClassroomsInput, SimulationUncheckedCreateWithoutClassroomsInput>
    where?: SimulationWhereInput
  }

  export type SimulationUpdateToOneWithWhereWithoutClassroomsInput = {
    where?: SimulationWhereInput
    data: XOR<SimulationUpdateWithoutClassroomsInput, SimulationUncheckedUpdateWithoutClassroomsInput>
  }

  export type SimulationUpdateWithoutClassroomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    operatingHours?: FloatFieldUpdateOperationsInput | number
    operatingDays?: IntFieldUpdateOperationsInput | number
    status?: EnumSimStatusFieldUpdateOperationsInput | $Enums.SimStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSimulationsNestedInput
    revenueSources?: RevenueSourceUpdateManyWithoutSimulationNestedInput
    expenseItems?: ExpenseItemUpdateManyWithoutSimulationNestedInput
    businessGoals?: BusinessGoalUpdateManyWithoutSimulationNestedInput
    insight?: InsightUpdateOneWithoutSimulationNestedInput
  }

  export type SimulationUncheckedUpdateWithoutClassroomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    operatingHours?: FloatFieldUpdateOperationsInput | number
    operatingDays?: IntFieldUpdateOperationsInput | number
    status?: EnumSimStatusFieldUpdateOperationsInput | $Enums.SimStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revenueSources?: RevenueSourceUncheckedUpdateManyWithoutSimulationNestedInput
    expenseItems?: ExpenseItemUncheckedUpdateManyWithoutSimulationNestedInput
    businessGoals?: BusinessGoalUncheckedUpdateManyWithoutSimulationNestedInput
    insight?: InsightUncheckedUpdateOneWithoutSimulationNestedInput
  }

  export type SimulationCreateWithoutBusinessGoalsInput = {
    id?: string
    businessName: string
    operatingHours?: number
    operatingDays?: number
    status?: $Enums.SimStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSimulationsInput
    revenueSources?: RevenueSourceCreateNestedManyWithoutSimulationInput
    expenseItems?: ExpenseItemCreateNestedManyWithoutSimulationInput
    classrooms?: ClassroomCreateNestedManyWithoutSimulationInput
    insight?: InsightCreateNestedOneWithoutSimulationInput
  }

  export type SimulationUncheckedCreateWithoutBusinessGoalsInput = {
    id?: string
    userId: string
    businessName: string
    operatingHours?: number
    operatingDays?: number
    status?: $Enums.SimStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    revenueSources?: RevenueSourceUncheckedCreateNestedManyWithoutSimulationInput
    expenseItems?: ExpenseItemUncheckedCreateNestedManyWithoutSimulationInput
    classrooms?: ClassroomUncheckedCreateNestedManyWithoutSimulationInput
    insight?: InsightUncheckedCreateNestedOneWithoutSimulationInput
  }

  export type SimulationCreateOrConnectWithoutBusinessGoalsInput = {
    where: SimulationWhereUniqueInput
    create: XOR<SimulationCreateWithoutBusinessGoalsInput, SimulationUncheckedCreateWithoutBusinessGoalsInput>
  }

  export type SimulationUpsertWithoutBusinessGoalsInput = {
    update: XOR<SimulationUpdateWithoutBusinessGoalsInput, SimulationUncheckedUpdateWithoutBusinessGoalsInput>
    create: XOR<SimulationCreateWithoutBusinessGoalsInput, SimulationUncheckedCreateWithoutBusinessGoalsInput>
    where?: SimulationWhereInput
  }

  export type SimulationUpdateToOneWithWhereWithoutBusinessGoalsInput = {
    where?: SimulationWhereInput
    data: XOR<SimulationUpdateWithoutBusinessGoalsInput, SimulationUncheckedUpdateWithoutBusinessGoalsInput>
  }

  export type SimulationUpdateWithoutBusinessGoalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    operatingHours?: FloatFieldUpdateOperationsInput | number
    operatingDays?: IntFieldUpdateOperationsInput | number
    status?: EnumSimStatusFieldUpdateOperationsInput | $Enums.SimStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSimulationsNestedInput
    revenueSources?: RevenueSourceUpdateManyWithoutSimulationNestedInput
    expenseItems?: ExpenseItemUpdateManyWithoutSimulationNestedInput
    classrooms?: ClassroomUpdateManyWithoutSimulationNestedInput
    insight?: InsightUpdateOneWithoutSimulationNestedInput
  }

  export type SimulationUncheckedUpdateWithoutBusinessGoalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    operatingHours?: FloatFieldUpdateOperationsInput | number
    operatingDays?: IntFieldUpdateOperationsInput | number
    status?: EnumSimStatusFieldUpdateOperationsInput | $Enums.SimStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revenueSources?: RevenueSourceUncheckedUpdateManyWithoutSimulationNestedInput
    expenseItems?: ExpenseItemUncheckedUpdateManyWithoutSimulationNestedInput
    classrooms?: ClassroomUncheckedUpdateManyWithoutSimulationNestedInput
    insight?: InsightUncheckedUpdateOneWithoutSimulationNestedInput
  }

  export type SimulationCreateWithoutInsightInput = {
    id?: string
    businessName: string
    operatingHours?: number
    operatingDays?: number
    status?: $Enums.SimStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSimulationsInput
    revenueSources?: RevenueSourceCreateNestedManyWithoutSimulationInput
    expenseItems?: ExpenseItemCreateNestedManyWithoutSimulationInput
    classrooms?: ClassroomCreateNestedManyWithoutSimulationInput
    businessGoals?: BusinessGoalCreateNestedManyWithoutSimulationInput
  }

  export type SimulationUncheckedCreateWithoutInsightInput = {
    id?: string
    userId: string
    businessName: string
    operatingHours?: number
    operatingDays?: number
    status?: $Enums.SimStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    revenueSources?: RevenueSourceUncheckedCreateNestedManyWithoutSimulationInput
    expenseItems?: ExpenseItemUncheckedCreateNestedManyWithoutSimulationInput
    classrooms?: ClassroomUncheckedCreateNestedManyWithoutSimulationInput
    businessGoals?: BusinessGoalUncheckedCreateNestedManyWithoutSimulationInput
  }

  export type SimulationCreateOrConnectWithoutInsightInput = {
    where: SimulationWhereUniqueInput
    create: XOR<SimulationCreateWithoutInsightInput, SimulationUncheckedCreateWithoutInsightInput>
  }

  export type SimulationUpsertWithoutInsightInput = {
    update: XOR<SimulationUpdateWithoutInsightInput, SimulationUncheckedUpdateWithoutInsightInput>
    create: XOR<SimulationCreateWithoutInsightInput, SimulationUncheckedCreateWithoutInsightInput>
    where?: SimulationWhereInput
  }

  export type SimulationUpdateToOneWithWhereWithoutInsightInput = {
    where?: SimulationWhereInput
    data: XOR<SimulationUpdateWithoutInsightInput, SimulationUncheckedUpdateWithoutInsightInput>
  }

  export type SimulationUpdateWithoutInsightInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    operatingHours?: FloatFieldUpdateOperationsInput | number
    operatingDays?: IntFieldUpdateOperationsInput | number
    status?: EnumSimStatusFieldUpdateOperationsInput | $Enums.SimStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSimulationsNestedInput
    revenueSources?: RevenueSourceUpdateManyWithoutSimulationNestedInput
    expenseItems?: ExpenseItemUpdateManyWithoutSimulationNestedInput
    classrooms?: ClassroomUpdateManyWithoutSimulationNestedInput
    businessGoals?: BusinessGoalUpdateManyWithoutSimulationNestedInput
  }

  export type SimulationUncheckedUpdateWithoutInsightInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    operatingHours?: FloatFieldUpdateOperationsInput | number
    operatingDays?: IntFieldUpdateOperationsInput | number
    status?: EnumSimStatusFieldUpdateOperationsInput | $Enums.SimStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revenueSources?: RevenueSourceUncheckedUpdateManyWithoutSimulationNestedInput
    expenseItems?: ExpenseItemUncheckedUpdateManyWithoutSimulationNestedInput
    classrooms?: ClassroomUncheckedUpdateManyWithoutSimulationNestedInput
    businessGoals?: BusinessGoalUncheckedUpdateManyWithoutSimulationNestedInput
  }

  export type SimulationCreateManyUserInput = {
    id?: string
    businessName: string
    operatingHours?: number
    operatingDays?: number
    status?: $Enums.SimStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SimulationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    operatingHours?: FloatFieldUpdateOperationsInput | number
    operatingDays?: IntFieldUpdateOperationsInput | number
    status?: EnumSimStatusFieldUpdateOperationsInput | $Enums.SimStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revenueSources?: RevenueSourceUpdateManyWithoutSimulationNestedInput
    expenseItems?: ExpenseItemUpdateManyWithoutSimulationNestedInput
    classrooms?: ClassroomUpdateManyWithoutSimulationNestedInput
    businessGoals?: BusinessGoalUpdateManyWithoutSimulationNestedInput
    insight?: InsightUpdateOneWithoutSimulationNestedInput
  }

  export type SimulationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    operatingHours?: FloatFieldUpdateOperationsInput | number
    operatingDays?: IntFieldUpdateOperationsInput | number
    status?: EnumSimStatusFieldUpdateOperationsInput | $Enums.SimStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revenueSources?: RevenueSourceUncheckedUpdateManyWithoutSimulationNestedInput
    expenseItems?: ExpenseItemUncheckedUpdateManyWithoutSimulationNestedInput
    classrooms?: ClassroomUncheckedUpdateManyWithoutSimulationNestedInput
    businessGoals?: BusinessGoalUncheckedUpdateManyWithoutSimulationNestedInput
    insight?: InsightUncheckedUpdateOneWithoutSimulationNestedInput
  }

  export type SimulationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    operatingHours?: FloatFieldUpdateOperationsInput | number
    operatingDays?: IntFieldUpdateOperationsInput | number
    status?: EnumSimStatusFieldUpdateOperationsInput | $Enums.SimStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RevenueSourceCreateManySimulationInput = {
    id?: string
    name: string
    amount: number
    tag?: string | null
  }

  export type ExpenseItemCreateManySimulationInput = {
    id?: string
    name: string
    amount: number
    tag?: string | null
  }

  export type ClassroomCreateManySimulationInput = {
    id?: string
    name: string
    capacity: number
    staffRatio: number
    enrolled: number
  }

  export type BusinessGoalCreateManySimulationInput = {
    id?: string
    name: string
    targetValue: number
    unit?: string
  }

  export type RevenueSourceUpdateWithoutSimulationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    tag?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RevenueSourceUncheckedUpdateWithoutSimulationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    tag?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RevenueSourceUncheckedUpdateManyWithoutSimulationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    tag?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExpenseItemUpdateWithoutSimulationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    tag?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExpenseItemUncheckedUpdateWithoutSimulationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    tag?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExpenseItemUncheckedUpdateManyWithoutSimulationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    tag?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClassroomUpdateWithoutSimulationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    staffRatio?: FloatFieldUpdateOperationsInput | number
    enrolled?: IntFieldUpdateOperationsInput | number
  }

  export type ClassroomUncheckedUpdateWithoutSimulationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    staffRatio?: FloatFieldUpdateOperationsInput | number
    enrolled?: IntFieldUpdateOperationsInput | number
  }

  export type ClassroomUncheckedUpdateManyWithoutSimulationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    staffRatio?: FloatFieldUpdateOperationsInput | number
    enrolled?: IntFieldUpdateOperationsInput | number
  }

  export type BusinessGoalUpdateWithoutSimulationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    targetValue?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessGoalUncheckedUpdateWithoutSimulationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    targetValue?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessGoalUncheckedUpdateManyWithoutSimulationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    targetValue?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}