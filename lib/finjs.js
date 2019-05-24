if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'finjs'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'finjs'.");
}
var finjs = function (_, Kotlin) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var mutableListOf = Kotlin.kotlin.collections.mutableListOf_i5x0yv$;
  var toString = Kotlin.toString;
  var padStart = Kotlin.kotlin.text.padStart_vrc1nu$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var lastOrNull = Kotlin.kotlin.collections.lastOrNull_us0mfu$;
  var print = Kotlin.kotlin.io.print_s8jyv4$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var plus = Kotlin.kotlin.collections.plus_e8164j$;
  var throwUPAE = Kotlin.throwUPAE;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Exception = Kotlin.kotlin.Exception;
  var emptyMap = Kotlin.kotlin.collections.emptyMap_q3lmfv$;
  function Checkpoint(date, sergeySalary, valyaSalary, downpayment, freeMoney, expenses, savingGoals, flags, messages) {
    if (flags === void 0) {
      flags = emptyMap();
    }
    if (messages === void 0)
      messages = [];
    this.date = date;
    this.sergeySalary = sergeySalary;
    this.valyaSalary = valyaSalary;
    this.downpayment = downpayment;
    this.freeMoney = freeMoney;
    this.expenses = expenses;
    this.savingGoals = savingGoals;
    this.flags = flags;
    this.messages = messages;
  }
  Checkpoint.prototype.messageArray = function () {
    return this.messages;
  };
  Checkpoint.prototype.modifyDownpayment_za3lpa$ = function (increase) {
    return this.copy_24tcxf$(void 0, void 0, void 0, this.downpayment + increase | 0);
  };
  Checkpoint.prototype.hasFlag = function (flagName) {
    return this.flags.containsKey_11rb$(flagName);
  };
  Checkpoint.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Checkpoint',
    interfaces: []
  };
  Checkpoint.prototype.component1 = function () {
    return this.date;
  };
  Checkpoint.prototype.component2 = function () {
    return this.sergeySalary;
  };
  Checkpoint.prototype.component3 = function () {
    return this.valyaSalary;
  };
  Checkpoint.prototype.component4 = function () {
    return this.downpayment;
  };
  Checkpoint.prototype.component5 = function () {
    return this.freeMoney;
  };
  Checkpoint.prototype.component6 = function () {
    return this.expenses;
  };
  Checkpoint.prototype.component7 = function () {
    return this.savingGoals;
  };
  Checkpoint.prototype.component8 = function () {
    return this.flags;
  };
  Checkpoint.prototype.component9 = function () {
    return this.messages;
  };
  Checkpoint.prototype.copy_24tcxf$ = function (date, sergeySalary, valyaSalary, downpayment, freeMoney, expenses, savingGoals, flags, messages) {
    return new Checkpoint(date === void 0 ? this.date : date, sergeySalary === void 0 ? this.sergeySalary : sergeySalary, valyaSalary === void 0 ? this.valyaSalary : valyaSalary, downpayment === void 0 ? this.downpayment : downpayment, freeMoney === void 0 ? this.freeMoney : freeMoney, expenses === void 0 ? this.expenses : expenses, savingGoals === void 0 ? this.savingGoals : savingGoals, flags === void 0 ? this.flags : flags, messages === void 0 ? this.messages : messages);
  };
  Checkpoint.prototype.toString = function () {
    return 'Checkpoint(date=' + Kotlin.toString(this.date) + (', sergeySalary=' + Kotlin.toString(this.sergeySalary)) + (', valyaSalary=' + Kotlin.toString(this.valyaSalary)) + (', downpayment=' + Kotlin.toString(this.downpayment)) + (', freeMoney=' + Kotlin.toString(this.freeMoney)) + (', expenses=' + Kotlin.toString(this.expenses)) + (', savingGoals=' + Kotlin.toString(this.savingGoals)) + (', flags=' + Kotlin.toString(this.flags)) + (', messages=' + Kotlin.toString(this.messages)) + ')';
  };
  Checkpoint.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.date) | 0;
    result = result * 31 + Kotlin.hashCode(this.sergeySalary) | 0;
    result = result * 31 + Kotlin.hashCode(this.valyaSalary) | 0;
    result = result * 31 + Kotlin.hashCode(this.downpayment) | 0;
    result = result * 31 + Kotlin.hashCode(this.freeMoney) | 0;
    result = result * 31 + Kotlin.hashCode(this.expenses) | 0;
    result = result * 31 + Kotlin.hashCode(this.savingGoals) | 0;
    result = result * 31 + Kotlin.hashCode(this.flags) | 0;
    result = result * 31 + Kotlin.hashCode(this.messages) | 0;
    return result;
  };
  Checkpoint.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.date, other.date) && Kotlin.equals(this.sergeySalary, other.sergeySalary) && Kotlin.equals(this.valyaSalary, other.valyaSalary) && Kotlin.equals(this.downpayment, other.downpayment) && Kotlin.equals(this.freeMoney, other.freeMoney) && Kotlin.equals(this.expenses, other.expenses) && Kotlin.equals(this.savingGoals, other.savingGoals) && Kotlin.equals(this.flags, other.flags) && Kotlin.equals(this.messages, other.messages)))));
  };
  function Condition() {
  }
  Condition.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Condition',
    interfaces: []
  };
  function Action() {
  }
  Action.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Action',
    interfaces: []
  };
  function main() {
    println('v3');
  }
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  function calc(init, strats) {
    var initialCheckpoint = new Checkpoint(Date$Companion_getInstance().from_qjzqsm$(init.date).copy_qt1dr2$(void 0, void 0, 1), init.sergeySalary, init.valyaSalary, init.downpayment, init.freeMoney, new Expenses(init.expenses.life, init.expenses.rent), new SavingGoals(init.goals.downpayment));
    var proc = new Processor();
    var destination = ArrayList_init(strats.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== strats.length; ++tmp$) {
      var item = strats[tmp$];
      var tmp$_0 = destination.add_11rb$;
      var tmp$_1;
      switch (item.type) {
        case 'BuyHouse':
          tmp$_1 = new BuyHouse(item.price, item.downpaymentPctn, item.mortgage);
          break;
        case 'MakeBaby':
          tmp$_1 = new MakeBaby(hasFlag(item.conditionFlag), item.delay, item.workBeforeDecret, item.decretAfterBirth, item.newSalary);
          break;
        case 'Custom':
          tmp$_1 = new CustomStrat(item.once, item.condition, item.effect);
          break;
        default:tmp$_1 = new NoopStrategy();
          break;
      }
      tmp$_0.call(destination, tmp$_1);
    }
    var kstrats = destination;
    var strat = new StratChain(copyToArray(kstrats).slice());
    var iters = dynamic2Int(init.iters);
    var next = initialCheckpoint;
    var res = mutableListOf([initialCheckpoint]);
    for (var i = 0; i < iters; i++) {
      next = next.copy_24tcxf$(void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, []);
      println(i.toString() + ' ' + toString(next));
      next = strat.run_onirag$(next);
      next = proc.run_onirag$(next);
      res.add_11rb$(next);
    }
    return copyToArray(res);
  }
  function dynamic2Int(a) {
    return a;
  }
  function hasFlag$lambda(closure$flag) {
    return function (it) {
      return it.flags.containsKey_11rb$(closure$flag);
    };
  }
  function hasFlag(flag) {
    return hasFlag$lambda(flag);
  }
  function SavingGoals(downpayment) {
    if (downpayment === void 0)
      downpayment = 0;
    this.downpayment = downpayment;
  }
  SavingGoals.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SavingGoals',
    interfaces: []
  };
  SavingGoals.prototype.component1 = function () {
    return this.downpayment;
  };
  SavingGoals.prototype.copy_za3lpa$ = function (downpayment) {
    return new SavingGoals(downpayment === void 0 ? this.downpayment : downpayment);
  };
  SavingGoals.prototype.toString = function () {
    return 'SavingGoals(downpayment=' + Kotlin.toString(this.downpayment) + ')';
  };
  SavingGoals.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.downpayment) | 0;
    return result;
  };
  SavingGoals.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.downpayment, other.downpayment))));
  };
  function Expenses(life, rent, mortgage) {
    if (mortgage === void 0)
      mortgage = 0;
    this.life = life;
    this.rent = rent;
    this.mortgage = mortgage;
    this.total = this.life + this.rent + this.mortgage | 0;
  }
  Expenses.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Expenses',
    interfaces: []
  };
  Expenses.prototype.component1 = function () {
    return this.life;
  };
  Expenses.prototype.component2 = function () {
    return this.rent;
  };
  Expenses.prototype.component3 = function () {
    return this.mortgage;
  };
  Expenses.prototype.copy_qt1dr2$ = function (life, rent, mortgage) {
    return new Expenses(life === void 0 ? this.life : life, rent === void 0 ? this.rent : rent, mortgage === void 0 ? this.mortgage : mortgage);
  };
  Expenses.prototype.toString = function () {
    return 'Expenses(life=' + Kotlin.toString(this.life) + (', rent=' + Kotlin.toString(this.rent)) + (', mortgage=' + Kotlin.toString(this.mortgage)) + ')';
  };
  Expenses.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.life) | 0;
    result = result * 31 + Kotlin.hashCode(this.rent) | 0;
    result = result * 31 + Kotlin.hashCode(this.mortgage) | 0;
    return result;
  };
  Expenses.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.life, other.life) && Kotlin.equals(this.rent, other.rent) && Kotlin.equals(this.mortgage, other.mortgage)))));
  };
  function Processor() {
  }
  var Math_0 = Math;
  Processor.prototype.run_onirag$ = function (cp) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var income = cp.sergeySalary + cp.valyaSalary | 0;
    var savings = income - cp.expenses.total | 0;
    var b = cp.savingGoals.downpayment;
    var dp = Math_0.min(savings, b);
    tmp$ = cp.date.plusMonths_za3lpa$(1);
    tmp$_0 = cp.downpayment + dp | 0;
    tmp$_1 = cp.freeMoney + (savings - dp) | 0;
    tmp$_2 = cp.savingGoals.copy_za3lpa$();
    return cp.copy_24tcxf$(tmp$, void 0, void 0, tmp$_0, tmp$_1, cp.expenses.copy_qt1dr2$(), tmp$_2);
  };
  Processor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Processor',
    interfaces: []
  };
  function Date_0(year, month, day) {
    Date$Companion_getInstance();
    this.year = year;
    this.month = month;
    this.day = day;
  }
  Date_0.prototype.plusMonths_za3lpa$ = function (addMonths) {
    var addYears = (this.month + addMonths | 0) / 12 | 0;
    var newMonth = (this.month + addMonths | 0) % 12;
    return new Date_0(this.year + addYears | 0, newMonth, this.day);
  };
  Date_0.prototype.toString = function () {
    return padStart(this.day.toString(), 2, 48) + '/' + padStart(this.month.toString(), 2, 48) + '/' + this.year;
  };
  function Date$Companion() {
    Date$Companion_instance = this;
  }
  Date$Companion.prototype.now = function () {
    return this.from_qjzqsm$(new Date());
  };
  Date$Companion.prototype.from_qjzqsm$ = function (date) {
    return new Date_0(date.getFullYear(), date.getMonth(), date.getDate());
  };
  Date$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Date$Companion_instance = null;
  function Date$Companion_getInstance() {
    if (Date$Companion_instance === null) {
      new Date$Companion();
    }
    return Date$Companion_instance;
  }
  Date_0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Date',
    interfaces: []
  };
  Date_0.prototype.component1 = function () {
    return this.year;
  };
  Date_0.prototype.component2 = function () {
    return this.month;
  };
  Date_0.prototype.component3 = function () {
    return this.day;
  };
  Date_0.prototype.copy_qt1dr2$ = function (year, month, day) {
    return new Date_0(year === void 0 ? this.year : year, month === void 0 ? this.month : month, day === void 0 ? this.day : day);
  };
  Date_0.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.year) | 0;
    result = result * 31 + Kotlin.hashCode(this.month) | 0;
    result = result * 31 + Kotlin.hashCode(this.day) | 0;
    return result;
  };
  Date_0.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.year, other.year) && Kotlin.equals(this.month, other.month) && Kotlin.equals(this.day, other.day)))));
  };
  function BuyHouse(price, downpaymentPctn, mortgage) {
    this.price = price;
    this.downpaymentPctn = downpaymentPctn;
    this.mortgage = mortgage;
    this.executed = false;
    this.requiredDownpayment = Kotlin.imul(this.price, this.downpaymentPctn) / 100 | 0;
  }
  BuyHouse.prototype.run_onirag$ = function (cp) {
    if (cp.downpayment >= this.requiredDownpayment && !this.executed) {
      this.executed = true;
      var $receiver = this.buyHouse_0(cp);
      print(lastOrNull(cp.messages));
      return $receiver;
    }
    return cp;
  };
  BuyHouse.prototype.buyHouse_0 = function (cp) {
    var tmp$ = cp.modifyDownpayment_za3lpa$(-this.requiredDownpayment | 0);
    var tmp$_0 = void 0;
    var tmp$_1 = void 0;
    var tmp$_2 = void 0;
    var tmp$_3 = void 0;
    var tmp$_4 = void 0;
    var tmp$_5 = cp.expenses.copy_qt1dr2$(void 0, 0, cp.expenses.mortgage + this.mortgage | 0);
    var tmp$_6 = void 0;
    var tmp$_7 = plus(cp.flags, to('boughtHouse', true));
    var $receiver = cp.messages;
    var element = 'Buying  a house for ' + this.price + ' and paying downpayment=' + this.requiredDownpayment + ' instantly';
    return tmp$.copy_24tcxf$(tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, $receiver.concat([element]));
  };
  BuyHouse.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BuyHouse',
    interfaces: [Strategy]
  };
  function MakeBaby(condition, delay, workingMonthsBeforeDecret, decretAfterBirth, newSalary) {
    if (delay === void 0)
      delay = 0;
    if (workingMonthsBeforeDecret === void 0)
      workingMonthsBeforeDecret = 0;
    if (decretAfterBirth === void 0)
      decretAfterBirth = 0;
    this.condition = condition;
    this.delay = delay;
    this.workingMonthsBeforeDecret = workingMonthsBeforeDecret;
    this.decretAfterBirth = decretAfterBirth;
    this.newSalary = newSalary;
    this.started = false;
    this.startedDate_ybjhth$_0 = this.startedDate_ybjhth$_0;
  }
  Object.defineProperty(MakeBaby.prototype, 'startedDate', {
    get: function () {
      if (this.startedDate_ybjhth$_0 == null)
        return throwUPAE('startedDate');
      return this.startedDate_ybjhth$_0;
    },
    set: function (startedDate) {
      this.startedDate_ybjhth$_0 = startedDate;
    }
  });
  MakeBaby.prototype.run_onirag$ = function (cp) {
    var tmp$, tmp$_0;
    if (!this.started) {
      this.started = this.condition(cp);
      this.startedDate = cp.date;
    }
    if (this.started) {
      tmp$ = this.monthDiff_0(this.startedDate, cp.date);
      if (tmp$ === 0) {
        var msg = 'Start thinking about a baby';
        println(msg);
        tmp$_0 = cp.copy_24tcxf$(void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, cp.messages.concat([msg]));
      }
       else if (tmp$ === this.delay) {
        var msg_0 = 'Started a baby';
        println(msg_0);
        tmp$_0 = cp.copy_24tcxf$(void 0, void 0, void 0, void 0, void 0, void 0, void 0, plus(cp.flags, to('started_baby', true)), cp.messages.concat([msg_0]));
      }
       else if (tmp$ === (this.delay + this.workingMonthsBeforeDecret | 0)) {
        var msg_1 = 'Valya goes into decret';
        println(msg_1);
        tmp$_0 = cp.copy_24tcxf$(void 0, void 0, 0, void 0, void 0, void 0, void 0, void 0, cp.messages.concat([msg_1]));
      }
       else if (tmp$ === (this.delay + 9 | 0)) {
        var msg_2 = "Baby's born";
        println(msg_2);
        tmp$_0 = cp.copy_24tcxf$(void 0, void 0, void 0, void 0, void 0, void 0, void 0, plus(cp.flags, to('baby_born', true)), cp.messages.concat([msg_2]));
      }
       else if (tmp$ === (this.delay + 9 + this.decretAfterBirth | 0)) {
        var msg_3 = 'Valya goes back to work';
        println(msg_3);
        tmp$_0 = cp.copy_24tcxf$(void 0, void 0, this.newSalary, void 0, void 0, void 0, void 0, void 0, cp.messages.concat([msg_3]));
      }
       else
        tmp$_0 = cp;
      return tmp$_0;
    }
    return cp;
  };
  MakeBaby.prototype.monthDiff_0 = function (date1, date2) {
    return (12 * (date2.year - date1.year | 0) | 0) + (date2.month - date1.month) | 0;
  };
  MakeBaby.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MakeBaby',
    interfaces: [Strategy]
  };
  function KidEducation(kidName, birthday, dayCarePrice, schoolPrice) {
    this.kidName = kidName;
    this.birthday = birthday;
    this.dayCarePrice = dayCarePrice;
    this.schoolPrice = schoolPrice;
    this.schoolStarts = new Date_0(this.birthday.year + (this.birthday.month < 9 ? 5 : 6) | 0, 9, 1);
  }
  KidEducation.prototype.run_onirag$ = function (cp) {
    return cp;
  };
  KidEducation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KidEducation',
    interfaces: [Strategy]
  };
  function NoopStrategy() {
  }
  NoopStrategy.prototype.run_onirag$ = function (cp) {
    println(cp);
    return cp;
  };
  NoopStrategy.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NoopStrategy',
    interfaces: [Strategy]
  };
  function Strategy() {
  }
  Strategy.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Strategy',
    interfaces: []
  };
  function StratChain(strats) {
    this.strats = strats;
  }
  StratChain.prototype.run_onirag$ = function (cp) {
    var $receiver = this.strats;
    var tmp$;
    var accumulator = cp;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      accumulator = element.run_onirag$(accumulator);
    }
    return accumulator;
  };
  StratChain.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StratChain',
    interfaces: [Strategy]
  };
  function CustomStrat(once, condition, effect) {
    this.once = once;
    this.condition = condition;
    this.effect = effect;
    this.executed = false;
  }
  CustomStrat.prototype.run_onirag$ = function (checkpoint) {
    var cp = checkpoint.copy_24tcxf$();
    if (this.once && this.executed)
      return cp;
    try {
      if (eval(this.condition)) {
        this.executed = true;
        eval(this.effect);
      }
    }
     catch (e) {
      if (Kotlin.isType(e, Exception)) {
        console.log('Error: ');
        console.log(e);
      }
       else
        throw e;
    }
    return cp;
  };
  CustomStrat.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CustomStrat',
    interfaces: [Strategy]
  };
  _.Checkpoint = Checkpoint;
  _.Condition = Condition;
  _.Action = Action;
  _.main = main;
  _.calc = calc;
  _.dynamic2Int_za3rmp$ = dynamic2Int;
  _.SavingGoals = SavingGoals;
  _.Expenses = Expenses;
  _.Processor = Processor;
  Object.defineProperty(Date_0, 'Companion', {
    get: Date$Companion_getInstance
  });
  _.Date = Date_0;
  _.BuyHouse = BuyHouse;
  _.MakeBaby = MakeBaby;
  _.KidEducation = KidEducation;
  _.NoopStrategy = NoopStrategy;
  _.Strategy = Strategy;
  _.StratChain = StratChain;
  _.CustomStrat = CustomStrat;
  main();
  Kotlin.defineModule('finjs', _);
  return _;
}(typeof finjs === 'undefined' ? {} : finjs, kotlin);

//# sourceMappingURL=finjs.js.map
