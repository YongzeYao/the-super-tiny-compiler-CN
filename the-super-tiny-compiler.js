'use strict';

/**
 * TTTTTTTTTTTTTTTTTTTTTTTHHHHHHHHH     HHHHHHHHHEEEEEEEEEEEEEEEEEEEEEE
 * T:::::::::::::::::::::TH:::::::H     H:::::::HE::::::::::::::::::::E
 * T:::::::::::::::::::::TH:::::::H     H:::::::HE::::::::::::::::::::E
 * T:::::TT:::::::TT:::::THH::::::H     H::::::HHEE::::::EEEEEEEEE::::E
 * TTTTTT  T:::::T  TTTTTT  H:::::H     H:::::H    E:::::E       EEEEEE
 *         T:::::T          H:::::H     H:::::H    E:::::E
 *         T:::::T          H::::::HHHHH::::::H    E::::::EEEEEEEEEE
 *         T:::::T          H:::::::::::::::::H    E:::::::::::::::E
 *         T:::::T          H:::::::::::::::::H    E:::::::::::::::E
 *         T:::::T          H::::::HHHHH::::::H    E::::::EEEEEEEEEE
 *         T:::::T          H:::::H     H:::::H    E:::::E
 *         T:::::T          H:::::H     H:::::H    E:::::E       EEEEEE
 *       TT:::::::TT      HH::::::H     H::::::HHEE::::::EEEEEEEE:::::E
 *       T:::::::::T      H:::::::H     H:::::::HE::::::::::::::::::::E
 *       T:::::::::T      H:::::::H     H:::::::HE::::::::::::::::::::E
 *       TTTTTTTTTTT      HHHHHHHHH     HHHHHHHHHEEEEEEEEEEEEEEEEEEEEEE
 *
 *    SSSSSSSSSSSSSSS UUUUUUUU     UUUUUUUUPPPPPPPPPPPPPPPPP   EEEEEEEEEEEEEEEEEEEEEERRRRRRRRRRRRRRRRR
 *  SS:::::::::::::::SU::::::U     U::::::UP::::::::::::::::P  E::::::::::::::::::::ER::::::::::::::::R
 * S:::::SSSSSS::::::SU::::::U     U::::::UP::::::PPPPPP:::::P E::::::::::::::::::::ER::::::RRRRRR:::::R
 * S:::::S     SSSSSSSUU:::::U     U:::::UUPP:::::P     P:::::PEE::::::EEEEEEEEE::::ERR:::::R     R:::::R
 * S:::::S             U:::::U     U:::::U   P::::P     P:::::P  E:::::E       EEEEEE  R::::R     R:::::R
 * S:::::S             U:::::U     U:::::U   P::::P     P:::::P  E:::::E               R::::R     R:::::R
 *  S::::SSSS          U:::::U     U:::::U   P::::PPPPPP:::::P   E::::::EEEEEEEEEE     R::::RRRRRR:::::R
 *   SS::::::SSSSS     U:::::U     U:::::U   P:::::::::::::PP    E:::::::::::::::E     R:::::::::::::RR
 *     SSS::::::::SS   U:::::U     U:::::U   P::::PPPPPPPPP      E:::::::::::::::E     R::::RRRRRR:::::R
 *        SSSSSS::::S  U:::::U     U:::::U   P::::P              E::::::EEEEEEEEEE     R::::R     R:::::R
 *             S:::::S U:::::U     U:::::U   P::::P              E:::::E               R::::R     R:::::R
 *             S:::::S U::::::U   U::::::U   P::::P              E:::::E       EEEEEE  R::::R     R:::::R
 * SSSSSSS     S:::::S U:::::::UUU:::::::U PP::::::PP          EE::::::EEEEEEEE:::::ERR:::::R     R:::::R
 * S::::::SSSSSS:::::S  UU:::::::::::::UU  P::::::::P          E::::::::::::::::::::ER::::::R     R:::::R
 * S:::::::::::::::SS     UU:::::::::UU    P::::::::P          E::::::::::::::::::::ER::::::R     R:::::R
 *  SSSSSSSSSSSSSSS         UUUUUUUUU      PPPPPPPPPP          EEEEEEEEEEEEEEEEEEEEEERRRRRRRR     RRRRRRR
 *
 * TTTTTTTTTTTTTTTTTTTTTTTIIIIIIIIIINNNNNNNN        NNNNNNNNYYYYYYY       YYYYYYY
 * T:::::::::::::::::::::TI::::::::IN:::::::N       N::::::NY:::::Y       Y:::::Y
 * T:::::::::::::::::::::TI::::::::IN::::::::N      N::::::NY:::::Y       Y:::::Y
 * T:::::TT:::::::TT:::::TII::::::IIN:::::::::N     N::::::NY::::::Y     Y::::::Y
 * TTTTTT  T:::::T  TTTTTT  I::::I  N::::::::::N    N::::::NYYY:::::Y   Y:::::YYY
 *         T:::::T          I::::I  N:::::::::::N   N::::::N   Y:::::Y Y:::::Y
 *         T:::::T          I::::I  N:::::::N::::N  N::::::N    Y:::::Y:::::Y
 *         T:::::T          I::::I  N::::::N N::::N N::::::N     Y:::::::::Y
 *         T:::::T          I::::I  N::::::N  N::::N:::::::N      Y:::::::Y
 *         T:::::T          I::::I  N::::::N   N:::::::::::N       Y:::::Y
 *         T:::::T          I::::I  N::::::N    N::::::::::N       Y:::::Y
 *         T:::::T          I::::I  N::::::N     N:::::::::N       Y:::::Y
 *       TT:::::::TT      II::::::IIN::::::N      N::::::::N       Y:::::Y
 *       T:::::::::T      I::::::::IN::::::N       N:::::::N    YYYY:::::YYYY
 *       T:::::::::T      I::::::::IN::::::N        N::::::N    Y:::::::::::Y
 *       TTTTTTTTTTT      IIIIIIIIIINNNNNNNN         NNNNNNN    YYYYYYYYYYYYY
 *
 *         CCCCCCCCCCCCC     OOOOOOOOO     MMMMMMMM               MMMMMMMMPPPPPPPPPPPPPPPPP   IIIIIIIIIILLLLLLLLLLL             EEEEEEEEEEEEEEEEEEEEEERRRRRRRRRRRRRRRRR
 *      CCC::::::::::::C   OO:::::::::OO   M:::::::M             M:::::::MP::::::::::::::::P  I::::::::IL:::::::::L             E::::::::::::::::::::ER::::::::::::::::R
 *    CC:::::::::::::::C OO:::::::::::::OO M::::::::M           M::::::::MP::::::PPPPPP:::::P I::::::::IL:::::::::L             E::::::::::::::::::::ER::::::RRRRRR:::::R
 *   C:::::CCCCCCCC::::CO:::::::OOO:::::::OM:::::::::M         M:::::::::MPP:::::P     P:::::PII::::::IILL:::::::LL             EE::::::EEEEEEEEE::::ERR:::::R     R:::::R
 *  C:::::C       CCCCCCO::::::O   O::::::OM::::::::::M       M::::::::::M  P::::P     P:::::P  I::::I    L:::::L                 E:::::E       EEEEEE  R::::R     R:::::R
 * C:::::C              O:::::O     O:::::OM:::::::::::M     M:::::::::::M  P::::P     P:::::P  I::::I    L:::::L                 E:::::E               R::::R     R:::::R
 * C:::::C              O:::::O     O:::::OM:::::::M::::M   M::::M:::::::M  P::::PPPPPP:::::P   I::::I    L:::::L                 E::::::EEEEEEEEEE     R::::RRRRRR:::::R
 * C:::::C              O:::::O     O:::::OM::::::M M::::M M::::M M::::::M  P:::::::::::::PP    I::::I    L:::::L                 E:::::::::::::::E     R:::::::::::::RR
 * C:::::C              O:::::O     O:::::OM::::::M  M::::M::::M  M::::::M  P::::PPPPPPPPP      I::::I    L:::::L                 E:::::::::::::::E     R::::RRRRRR:::::R
 * C:::::C              O:::::O     O:::::OM::::::M   M:::::::M   M::::::M  P::::P              I::::I    L:::::L                 E::::::EEEEEEEEEE     R::::R     R:::::R
 * C:::::C              O:::::O     O:::::OM::::::M    M:::::M    M::::::M  P::::P              I::::I    L:::::L                 E:::::E               R::::R     R:::::R
 *  C:::::C       CCCCCCO::::::O   O::::::OM::::::M     MMMMM     M::::::M  P::::P              I::::I    L:::::L         LLLLLL  E:::::E       EEEEEE  R::::R     R:::::R
 *   C:::::CCCCCCCC::::CO:::::::OOO:::::::OM::::::M               M::::::MPP::::::PP          II::::::IILL:::::::LLLLLLLLL:::::LEE::::::EEEEEEEE:::::ERR:::::R     R:::::R
 *    CC:::::::::::::::C OO:::::::::::::OO M::::::M               M::::::MP::::::::P          I::::::::IL::::::::::::::::::::::LE::::::::::::::::::::ER::::::R     R:::::R
 *      CCC::::::::::::C   OO:::::::::OO   M::::::M               M::::::MP::::::::P          I::::::::IL::::::::::::::::::::::LE::::::::::::::::::::ER::::::R     R:::::R
 *         CCCCCCCCCCCCC     OOOOOOOOO     MMMMMMMM               MMMMMMMMPPPPPPPPPP          IIIIIIIIIILLLLLLLLLLLLLLLLLLLLLLLLEEEEEEEEEEEEEEEEEEEEEERRRRRRRR     RRRRRRR
 *
 * =======================================================================================================================================================================
 * =======================================================================================================================================================================
 * =======================================================================================================================================================================
 * =======================================================================================================================================================================
 */

/**
 * 今天我们会一起编写一个编译器。一个非常非常简化的微型编译器！这个编译器非常小，如果你移除这个
 * 文件里的注释，那么这个文件只剩下大概200行代码。
 *
 * 我们会将类似于LISP的函数调用编译成类似于C的函数调用。
 *
 * 如果你对这两个语言中的一个或者两个不熟悉。下面是一个快速的介绍。
 *
 * 如果我有两个函数`add`和`subtract`，它们会像下面这样被写出来：
 *
 *                  LISP                      C
 *
 *   2 + 2          (add 2 2)                 add(2, 2)
 *   4 - 2          (subtract 4 2)            subtract(4, 2)
 *   2 + (4 - 2)    (add 2 (subtract 4 2))    add(2, subtract(4, 2))
 *
 * 非常简单直观不是吗？
 *
 * 非常好，因为这就是我们要编译的代码。尽管这并不是一个完整的LISP或者C的编译器，但是它足够展示
 * 现代编译器的很多大部分组成部件。
 */

/**
 * 大部分编译器的工作可以被分解为三个主要阶段：解析（Parsing），转化（Transformation）以及
 * 代码生成（Code Generation）。
 *
 * 1. *解析* 将源代码转换为一个更抽象的形式。
 *
 * 2. *转换* 接受解析产生的抽象形式并且操纵这些抽象形式做任何编译器想让它们做的事。
 *
 * 3. *代码生成* 基于转换后的代码表现形式（code representation）生成目标代码。
 */

/**
 * 解析
 * -------
 *
 * 解析一般被分为两个部分：词法分析和语法分析。
 *
 * 1. *词法分析* 通过一个叫做tokenizer（词素生成器，也叫lexer）的工具将源代码分解成一个个词素。
 *
 *    词素是描述编程语言语法的对象。它可以描述数字，标识符，标点符号，运算符等等。
 *
 * 2. *语法分析* 接收词素并将它们组合成一个描述了源代码各部分之间关系的中间表达形式：抽象语法树。
 *
 *    抽象语法树是一个深度嵌套的对象，这个对象以一种既能够简单地操作又提供很多关于源代码信息的形式
 *    来展现代码。
 *
 * 看下面的代码:
 *
 *   (add 2 (subtract 4 2))
 *
 * 上面代码产生的词素会像下面这样：
 *
 *   [
 *     { type: 'paren',  value: '('        },
 *     { type: 'name',   value: 'add'      },
 *     { type: 'number', value: '2'        },
 *     { type: 'paren',  value: '('        },
 *     { type: 'name',   value: 'subtract' },
 *     { type: 'number', value: '4'        },
 *     { type: 'number', value: '2'        },
 *     { type: 'paren',  value: ')'        },
 *     { type: 'paren',  value: ')'        },
 *   ]
 *
 * 而产生的抽象语法树会像下面这样：
 *
 *   {
 *     type: 'Program',
 *     body: [{
 *       type: 'CallExpression',
 *       name: 'add',
 *       params: [{
 *         type: 'NumberLiteral',
 *         value: '2',
 *       }, {
 *         type: 'CallExpression',
 *         name: 'subtract',
 *         params: [{
 *           type: 'NumberLiteral',
 *           value: '4',
 *         }, {
 *           type: 'NumberLiteral',
 *           value: '2',
 *         }]
 *       }]
 *     }]
 *   }
 */

/**
 * 转换
 * --------------
 *
 * 编译器的下一个阶段是转换阶段。再回顾一遍，这个过程接收解析生成的抽象语法树并对它做出改动。
 * 转换阶段可以改变抽象语法树使代码保持在同一个语言（例如Babel，Babel接收的是JS代码生成的也是
 * JS代码），或者编译成另外一门语言。
 *
 * 让我们一起来看如何转换一个抽象语法树。
 *
 * 你可能会注意到我们的抽象语法树包含了长得非常相似的元素。观察那些含有type属性的元素。这些元素
 * 被称为抽象语法树的节点。每一个节点都描述了源代码中的一部分。
 *
 * 针对NumberLiteral我们有一个节点：
 *
 *   {
 *     type: 'NumberLiteral',
 *     value: '2',
 *   }
 *
 * 针对CallExpression我们也有一个节点：
 *
 *   {
 *     type: 'CallExpression',
 *     name: 'subtract',
 *     params: [...nested nodes go here...],
 *   }
 *
 * 在转换抽象语法树的时候，我们可以通过添加/删除/替换节点属性来操纵节点。我们也可以添加节点，
 * 删除节点，或者基于现有的抽象语法树创建一个全新的抽象语法树。
 *
 * 由于我们的编译目标是另外一门语言，所以我们集中注意力新建一个针对目标语言的全新抽象语法树。
 *
 * 遍历
 * ---------
 *
 * 为了处理节点，我们需要遍历它们。这个遍历的过程按照深度优先规则遍历每一个节点。
 *
 *   {
 *     type: 'Program',
 *     body: [{
 *       type: 'CallExpression',
 *       name: 'add',
 *       params: [{
 *         type: 'NumberLiteral',
 *         value: '2'
 *       }, {
 *         type: 'CallExpression',
 *         name: 'subtract',
 *         params: [{
 *           type: 'NumberLiteral',
 *           value: '4'
 *         }, {
 *           type: 'NumberLiteral',
 *           value: '2'
 *         }]
 *       }]
 *     }]
 *   }
 *
 * 所以针对上面这个抽象语法树我们会按照下面步骤遍历节点：
 *
 *   1. Program - 从抽象语法树的最顶端开始
 *   2. CallExpression (add) - 移动到Program的body属性中的第一个元素
 *   3. NumberLiteral (2) - 移动到CallExpression的params中的第一个元素
 *   4. CallExpression (subtract) - 移动到CallExpression的params中的第二个元素
 *   5. NumberLiteral (4) - 移动到CallExpression的params中的第一个元素
 *   6. NumberLiteral (2) - 移动到CallExpression的params中的第二个元素
 *
 * 如果我们直接操纵这个抽象语法树，而不是创建一个新的抽象语法树，那么我们就需要在这个步骤使用到
 * 很多不同的抽象概念。然而为了满足我们的需求，在这一步我们仅仅需要访问抽象语法树中的每一个节点
 * 即可。
 *
 * The reason I use the word "visiting" is because there is this pattern of how
 * to represent operations on elements of an object structure.
 * 在这里我使用“访问”这个词的与原因是因为存在着下面这个用来表示一个对象结构中元素行为的模式。
 *
 * 访问者
 * --------
 *
 * 基本的思想是我们会创建一个“访问者”对象，这个访问者对象有不同的方法来接受不同的节点类型。
 *
 *   var visitor = {
 *     NumberLiteral() {},
 *     CallExpression() {},
 *   };
 *
 * 当我们遍历抽象语法树的时候，我们会根据现在“进入”的节点的类型调用访问者对象相对应的方法。
 *
 * 为了使这个对象能够正常工作，我们需要传入当前节点以及当前节点的父节点的引用。
 *
 *   var visitor = {
 *     NumberLiteral(node, parent) {},
 *     CallExpression(node, parent) {},
 *   };
 *
 * 然而，也存在着在“离开”节点的时候调用方法的可能性。假设我们有以下的抽象语法树结构：
 *
 *   - Program
 *     - CallExpression
 *       - NumberLiteral
 *       - CallExpression
 *         - NumberLiteral
 *         - NumberLiteral
 *
 * 当我们向下遍历语法树的时候，我们会碰到所谓的叶子节点。我们在处理完一个节点后会“离开”这个节点。
 * 所以向下遍历树的时候我们“进入”节点，而向上返回的时候我们“离开”节点。
 *
 *   -> Program (enter)
 *     -> CallExpression (enter)
 *       -> Number Literal (enter)
 *       <- Number Literal (exit)
 *       -> Call Expression (enter)
 *          -> Number Literal (enter)
 *          <- Number Literal (exit)
 *          -> Number Literal (enter)
 *          <- Number Literal (exit)
 *       <- CallExpression (exit)
 *     <- CallExpression (exit)
 *   <- Program (exit)
 *
 * 为了支持上面所讲的功能，我们的访问者对象的最终形态如下：
 *
 *   var visitor = {
 *     NumberLiteral: {
 *       enter(node, parent) {},
 *       exit(node, parent) {},
 *     }
 *   };
 */

/**
 * 代码生成
 * ---------------
 *
 * 编译器的最后步骤是代码生成。有时候编译器在这个步骤也会执行转换阶段的一些行为，但是大体而言代
 * 码生成阶段的工作就是基于转换步骤产生的抽象语法树生成目标代码。
 *
 * 代码生成器的工作方式多种多样，一些编译器会重新利用更早阶段产生的词素，还有一些编译器会创建一
 * 个独立的代码表达形式从而能够线性地打印节点，但是基于我的经验大部分编译器会使用我们刚刚创造的
 * 那个抽象语法树，这也是我们接下来讲的方法。
 *
 * 一个有效的代码生成器知道如何“打印”抽象语法树不同类型的节点，并且会递归地调用自己来打印嵌套的
 * 节点直到整个语法树被打印成一长串完整的代码字符串。
 */

/**
 * 上面所讲到的就是编译器的所有不同部分了。
 *
 * 这并不表明所有编译器都像我上面描述的那样工作。不同的编译器有各种各样不同的目的，它们可能需要
 * 一些我没有讲到的步骤。
 *
 * 但是现在你应该已经有了一个编译器如何工作的大体概念了。
 *
 * 既然现在我已经解释了所有东西，你就可以立马动手写一个你自己的编译器了不是吗？
 *
 * 开个玩笑，我会帮助你理解如何写一个编译器 :P。
 *
 * 那么我们开始吧……
 */

/**
 * ============================================================================
 *                                   (/^▽^)/
 *                                THE TOKENIZER!
 * ============================================================================
 */

/**
 * 我们从解析步骤的第一个部分开始，词法分析。也就是tokenizer词素生成器的工作。
 *
 * 我们将源代码分解成一个词素数组。
 *
 *   (add 2 (subtract 4 2))   =>   [{ type: 'paren', value: '(' }, ...]
 */

// 我们首先需要接收一个代码字符串，并且我们需要设置两个变量……
function tokenizer(input) {
  // `current`变量跟踪我们现在在源代码中的什么地方，就像一个光标一样。
  let current = 0;

  // `tokens`变量，顾名思义，用来储存词素的数组。
  let tokens = [];

  // 我们从创建一个`while`循环开始，在这个循环里我们会根据需求增加`current`变量的值。
  //
  // 注意由于词素的长度不同的，我们可能需要在一次循环中多次增加`current`的值。
  while (current < input.length) {
    // 我们将input中的当前字符存到char变量中。
    let char = input[current];

    // 我们需要检测的第一个情况就是开括号，这在之后会被函数调用`CallExpression`所用到。但是
    // 现在我们只需要关心字符即可。
    //
    // 我们检测我们是否有一个开括号：
    if (char === '(') {
      // 如果我们有一个开括号，我们创建一个类型为`paren`的词素并将value设置为开括号。
      tokens.push({
        type: 'paren',
        value: '(',
      });

      // 之后我们增加`current`
      current++;

      // 然后我们继续进行下一个循环
      continue;
    }

    // 接下来我们需要检测的是闭括号。这里的行为和开括号的一模一样：检查是否是一个闭括号，如果是
    // 的话，创建一个新词素，增加`current`然后执行下一个循环。
    if (char === ')') {
      tokens.push({
        type: 'paren',
        value: ')',
      });
      current++;
      continue;
    }

    // 接下来我们需要检测得是空格。这非常有趣，因为空格只是为了易读性而被添加的，所以我们并不需
    // 要将其储存为一个词素。我们简单地不管它就好。
    //
    // 所以这里我们仅仅检测当前字符是否是一个空格，如果是的话我们直接继续下一个循环。
    let WHITESPACE = /\s/;
    if (WHITESPACE.test(char)) {
      current++;
      continue;
    }

    // 下一个词素类型是数字。这和我们之前碰到的情况都不一样，因为一个数字可能包含任意数量的字符。
    // 我们需要捕获数字的所有字符来创建一个词素。
    //
    //   (add 123 456)
    //        ^^^ ^^^
    //        上面代码中数字只构成了两个词素
    //
    // 所以我们在碰到一个序列中的第一个数字的时候开始下面的步骤。
    let NUMBERS = /[0-9]/;
    if (NUMBERS.test(char)) {
      // 我们会创造一个`value`字符串，这个字符串用来存储字符。
      let value = '';

      // 之后我们遍历序列中的每一个字符直到遇到一个不是数字的字符，把每一个字符添加到`value`
      // 字符串中并且增加`current`的值。
      while (NUMBERS.test(char)) {
        value += char;
        char = input[++current];
      }

      // 之后我们将我们的数字词素添加到`tokens`数组。
      tokens.push({ type: 'number', value });

      // 然后我们继续下一个循环。
      continue;
    }

    // 我们同样支持字符串，字符串是由双引号"包裹的文字内容。
    //
    //   (concat "foo" "bar")
    //            ^^^   ^^^ string tokens
    //
    // 我们引号开始检测。
    if (char === '"') {
      // 创造一个`value`变量保存我们的字符串。
      let value = '';

      // 跳过意味着字符串开始的那个引号。
      char = input[++current];

      // 之后我们遍历每一个字符直到我们到达了另一个引号。
      while (char !== '"') {
        value += char;
        char = input[++current];
      }

      // 跳过意味着字符串结尾的引号。
      char = input[++current];

      // 然后创造字符串词素并添加到`tokens`数组。
      tokens.push({ type: 'string', value });

      continue;
    }

    // 最后一种词素是`name`词素。这是一个字母序列，在我们lisp语法中是函数的名称。
    //
    //   (add 2 4)
    //    ^^^
    //    Name token
    //
    let LETTERS = /[a-z]/i;
    if (LETTERS.test(char)) {
      let value = '';

      // 和其他情况一样，我们遍历字母并将它们添加到`value`变量。
      while (LETTERS.test(char)) {
        value += char;
        char = input[++current];
      }

      // 之后创建词素并添加到`tokens`变量。
      tokens.push({ type: 'name', value });

      continue;
    }

    // 最后如果我们并不能匹配到任何情况的话，我们就抛出一个错误并退出。
    throw new TypeError('I dont know what this character is: ' + char);
  }

  // 最后我们返回词素数组tokens。
  return tokens;
}

/**
 * ============================================================================
 *                                 ヽ/❀o ل͜ o\ﾉ
 *                                THE PARSER!!!
 * ============================================================================
 */

/**
 * 我们的语法分析器接受我们的词素数组并创造出一个抽象语法树。
 *
 *   [{ type: 'paren', value: '(' }, ...]   =>   { type: 'Program', body: [...] }
 */

// 好的，那么我们定义一个`parser`函数，这个函数接收词素数组tokens。
function parser(tokens) {
  // 我们还是创建一个`current`变量跟踪我们所处的位置。
  let current = 0;

  // 但是这一次我们使用的是递归而不是一个`while`循环。所以我们定义一个`walk`函数。
  function walk() {
    // 在walk函数中我们首先获取当前词素。
    let token = tokens[current];

    // 针对不同类型的词素，我们的处理方式也不同，从数字词素开始。
    //
    // 我们检测当前词素是否为一个数字词素。
    if (token.type === 'number') {
      // 如果是一个数字词素，我们增加`current`变量的值。
      current++;

      // 之后我们返回一个类型为`NumberLiteral`类型的抽象语法树节点，并且设置这个节点的value。
      return {
        type: 'NumberLiteral',
        value: token.value,
      };
    }

    // 如果我们有一个字符串词素，那么和数字词素的情况类似，只不过这里我们返回一个`StringLiteral`
    // 类型的词素。
    if (token.type === 'string') {
      current++;

      return {
        type: 'StringLiteral',
        value: token.value,
      };
    }

    // 接下来我们检测是否是一个函数调用。我们在碰到一个开括号的时候处理这种情况。
    if (token.type === 'paren' && token.value === '(') {
      // 我们会增加`current`变量的值来跳过开括号以选取下一个词素，这是因为在我们的抽象语法树
      // 中开括号本身并没有意义。
      token = tokens[++current];

      // 我们创建一个类型为`CallExpression`的基础词素，之后我们将它的名字设置为当前词素的value。
      // 这是因为开括号之后的词素的value就是函数的名字。
      let node = {
        type: 'CallExpression',
        name: token.value,
        params: [],
      };

      // 我们再一次增加`current`变量来跳过包含了函数名的词素。
      token = tokens[++current];

      // 现在我们遍历每一个会成为我们`CallExpression`词素的`params`的词素直到我们遇到一个
      // 闭括号为止。
      //
      // 这就是需要递归的时候。我们使用递归而不是试图直接分析可能有无限多层嵌套节点的参数。
      //
      // 为了解释这个概念，以我们的lisp代码为例。你可以观察到`add`的参数是一个数字和一个嵌套
      // 的`CallExpression`，而这个`CallExpression`又拥有自己的参数。
      //
      //   (add 2 (subtract 4 2))
      //
      // 你也可以观察到在我们的词素数组中我们有多个闭括号。
      //
      //   [
      //     { type: 'paren',  value: '('        },
      //     { type: 'name',   value: 'add'      },
      //     { type: 'number', value: '2'        },
      //     { type: 'paren',  value: '('        },
      //     { type: 'name',   value: 'subtract' },
      //     { type: 'number', value: '4'        },
      //     { type: 'number', value: '2'        },
      //     { type: 'paren',  value: ')'        }, <<< 闭括号
      //     { type: 'paren',  value: ')'        }, <<< 闭括号
      //   ]
      //
      // 我们依赖嵌套的`walk`函数在处理每一个嵌套的CallExpression`的时候增加我们的`current`变量。

      // 所以我们创建一个`while`循环直到我们碰到一个类型为`paren`并且`value`是闭括号的词素。
      while (
        token.type !== 'paren' ||
        (token.type === 'paren' && token.value !== ')')
      ) {
        // 我们调用`walk`函数，`walk`函数会返回一个节点然后我们将这个节点添加到我们的`node.params`。
        node.params.push(walk());
        token = tokens[current];
      }

      // 最后我们还需要增加`current`变量来跳过闭括号。
      current++;

      // 返回这个节点。
      return node;
    }

    // 同样，如果我们没有匹配到以上任何类型，我们抛出一个错误。
    throw new TypeError(token.type);
  }

  // 现在，我们来创建我们的抽象语法树。抽象语法树的根节点是一个`Program`节点。
  let ast = {
    type: 'Program',
    body: [],
  };

  // 然后我们调用我们的`walk`函数，将返回的节点都添加到`ast.body`数组中。
  //
  // 我们在一个循环中这样做的原因是因为我们可能有多个单独的函数调用，而不是相互嵌套。
  //
  //   (add 2 2)
  //   (subtract 4 2)
  //
  while (current < tokens.length) {
    ast.body.push(walk());
  }

  // 最后，语法分析器会返回抽象语法树。
  return ast;
}

/**
 * ============================================================================
 *                                 ⌒(❀>◞౪◟<❀)⌒
 *                               THE TRAVERSER!!!
 * ============================================================================
 */

/**
 * 现在我们有了抽象语法树，而我们希望可以使用一个访问者对象来访问各个节点。我们需要能够在碰到一
 * 个节点的时候调用访问者对象相应的方法。
 *
 *   traverse(ast, {
 *     Program: {
 *       enter(node, parent) {
 *         // ...
 *       },
 *       exit(node, parent) {
 *         // ...
 *       },
 *     },
 *
 *     CallExpression: {
 *       enter(node, parent) {
 *         // ...
 *       },
 *       exit(node, parent) {
 *         // ...
 *       },
 *     },
 *
 *     NumberLiteral: {
 *       enter(node, parent) {
 *         // ...
 *       },
 *       exit(node, parent) {
 *         // ...
 *       },
 *     },
 *   });
 */

// 所以我们定义一个traverser函数，这个函数接收抽象语法树以及一个访问者对象。在这个函数内部我们
// 还会定义两个函数……
function traverser(ast, visitor) {
  // `traverseArray`函数，这个函数允许我们遍历一个数组并且调用我们接下来定义的函数："traverseNode`。
  function traverseArray(array, parent) {
    array.forEach(child => {
      traverseNode(child, parent);
    });
  }

  // `traverseNode`函数会接收一个节点以及这个节点的父节点。这样它就可以将这两个参数传递给我们
  // 的访问者对象的方法。
  function traverseNode(node, parent) {
    //我们首先检测访问者对象是否含有一个匹配当前类型节点的方法。
    let methods = visitor[node.type];

    // 如果当前类型节点有相匹配的`enter`方法，我们调用这个方法`enter`方法并传入节点以及父节点。
    if (methods && methods.enter) {
      methods.enter(node, parent);
    }

    // 接下来我们根据当前节点类型分情况处理。
    switch (node.type) {
      // 我们从最顶层的`Program`开始。由于Program节点的body属性是一个节点数组，我们调用
      // `traverseArray`函数来向下遍历它们。
      //
      // （请注意'traverseArray`会调用`traverseNode`所以我们会递归地遍历抽象语法树。）
      case 'Program':
        traverseArray(node.body, node);
        break;

      // 对于`CallExpression`节点，我们遍历它的`params`属性。
      case 'CallExpression':
        traverseArray(node.params, node);
        break;

      // 对于`NumberLiteral`和`StringLiteral`的情况，我们并没有任何子节点去访问，所以我们
      // 直接break。
      case 'NumberLiteral':
      case 'StringLiteral':
        break;

      // 同样的，如果出现没有匹配的情况，我们抛出一个错误。
      default:
        throw new TypeError(node.type);
    }

    // 如果访问者对象针对当前类型节点存在着一个`exit`方法的话，我们在这里调用它并传入节点和父节点。
    if (methods && methods.exit) {
      methods.exit(node, parent);
    }
  }

  // 最后，我们通过调用`traverseNode`并传入ast和null来开始遍历。这里传入null作为父节点的原
  // 因是因为抽象语法树的根节点并没有父节点。
  traverseNode(ast, null);
}

/**
 * ============================================================================
 *                                   ⁽(◍˃̵͈̑ᴗ˂̵͈̑)⁽
 *                              THE TRANSFORMER!!!
 * ============================================================================
 */

/**
 * 接下来就是转换器。我们的转换器会接收我们创造的抽象语法树并将它和一个访问者对象传给traverser
 * 函数。然后创造一个新的抽象语法树。
 *
 * ----------------------------------------------------------------------------
 *   Original AST                     |   Transformed AST
 * ----------------------------------------------------------------------------
 *   {                                |   {
 *     type: 'Program',               |     type: 'Program',
 *     body: [{                       |     body: [{
 *       type: 'CallExpression',      |       type: 'ExpressionStatement',
 *       name: 'add',                 |       expression: {
 *       params: [{                   |         type: 'CallExpression',
 *         type: 'NumberLiteral',     |         callee: {
 *         value: '2'                 |           type: 'Identifier',
 *       }, {                         |           name: 'add'
 *         type: 'CallExpression',    |         },
 *         name: 'subtract',          |         arguments: [{
 *         params: [{                 |           type: 'NumberLiteral',
 *           type: 'NumberLiteral',   |           value: '2'
 *           value: '4'               |         }, {
 *         }, {                       |           type: 'CallExpression',
 *           type: 'NumberLiteral',   |           callee: {
 *           value: '2'               |             type: 'Identifier',
 *         }]                         |             name: 'subtract'
 *       }]                           |           },
 *     }]                             |           arguments: [{
 *   }                                |             type: 'NumberLiteral',
 *                                    |             value: '4'
 * ---------------------------------- |           }, {
 *                                    |             type: 'NumberLiteral',
 *                                    |             value: '2'
 *                                    |           }]
 *  (sorry the other one is longer.)  |         }
 *                                    |       }
 *                                    |     }]
 *                                    |   }
 * ----------------------------------------------------------------------------
 */

// 所以我们定义一个transformer函数，这个函数接收一个lisp抽象语法树对象。
function transformer(ast) {
  // 我们会创建一个`newAst`，这个新抽象语法树和之前的抽象语法树一样有一个Program节点。
  let newAst = {
    type: 'Program',
    body: [],
  };

  // 接下来我会小小地作弊一下并使用一个小小的hack。我们会给父节点添加一个`context`属性，我们
  // 会将子节点添加到它们的父节点的`context`属性中。通常情况下你会有一个比这个更好的抽象，
  // 但是针对我们的目的这样做更简洁。
  //
  // 只要记住`context`是一个从旧的抽象语法树到新的抽象语法树的引用即可。
  ast._context = newAst.body;

  // 我们从调用traverser函数并传入抽象语法树和访问者对象开始。
  traverser(ast, {
    // 访问者对象处理的第一种情况是`NumberLiteral`节点。
    NumberLiteral: {
      // 我们会在进入节点的时候访问节点。
      enter(node, parent) {
        //我们创建一个`NumberLiteral`类型的新节点并添加到父节点的`context`。
        parent._context.push({
          type: 'NumberLiteral',
          value: node.value,
        });
      },
    },

    // 接下来是`StringLiteral`类型节点。
    StringLiteral: {
      enter(node, parent) {
        parent._context.push({
          type: 'StringLiteral',
          value: node.value,
        });
      },
    },

    // 接着是`CallExpression`类型节点。
    CallExpression: {
      enter(node, parent) {
        // 我们创建一个新的`CallExpression`类型节点，这个新节点还有一个嵌套的`Identifier`对象。
        let expression = {
          type: 'CallExpression',
          callee: {
            type: 'Identifier',
            name: node.name,
          },
          arguments: [],
        };

        // 接下来我们给原始的`CallExpression`节点定义一个`context`属性。这个属性指向
        // `expression`的arguments属性，这样我们就可以添加参数了。
        node._context = expression.arguments;

        // 接下来我们检测父节点是否是一个`CallExpression`，如果不是的话……
        if (parent.type !== 'CallExpression') {
          // 我们将我们的`CallExpression`节点包裹在`ExpressionStatement`节点中。
          // 我们这样做的原因是因为JS中顶层的`CallExpression`实际上是语句。
          expression = {
            type: 'ExpressionStatement',
            expression: expression,
          };
        }

        // 最后，我们将我们的`CallExpression`（可能被包裹）添加到父节点的`context`属性。
        parent._context.push(expression);
      },
    },
  });

  // 最后，转换器会返回我们刚刚创造的全新抽象语法树。
  return newAst;
}

/**
 * ============================================================================
 *                               ヾ（〃＾∇＾）ﾉ♪
 *                            THE CODE GENERATOR!!!!
 * ============================================================================
 */

/**
 * 现在我们进入最后的阶段：代码生成器。
 *
 * 我们的代码生成器会递归地调用自身将树中的每一个节点打印出来，最终形成一个巨大的字符串。
 */

function codeGenerator(node) {
  // 我们根据节点类型分情况处理。
  switch (node.type) {
    // 如果我们有一个`Program`节点。我们会使用代码生成器遍历`body`属性中的所有节点然后使用
    // 换行符\n连接起来。
    case 'Program':
      return node.body.map(codeGenerator).join('\n');

    // 针对`ExpressionStatement`我们会对节点的expression属性调用代码生成器，并加上一个分号……
    case 'ExpressionStatement':
      return (
        codeGenerator(node.expression) + ';' // << (...because we like to code the *correct* way)
      );

    // 针对`CallExpression`我们会打印出`callee`，也就是函数名，加上一个开括号，我们会对
    // `arguments`数组中的每一个节点调用代码生成器，使用逗号连接它们，然后我们添加一个闭括号。
    case 'CallExpression':
      return (
        codeGenerator(node.callee) +
        '(' +
        node.arguments.map(codeGenerator).join(', ') +
        ')'
      );

    // 针对`Identifier`，我们简单地返回节点的name属性。
    case 'Identifier':
      return node.name;

    // 针对`NumberLiteral`，我们简单地返回节点的值。
    case 'NumberLiteral':
      return node.value;

    // 针对StringLiteral`，我们在节点value周围加上引号。
    case 'StringLiteral':
      return '"' + node.value + '"';

    // 如果没有匹配，我们抛出一个错误。
    default:
      throw new TypeError(node.type);
  }
}

/**
 * ============================================================================
 *                                  (۶* ‘ヮ’)۶”
 *                         !!!!!!!!THE COMPILER!!!!!!!!
 * ============================================================================
 */

/**
 * 终于到了！我们定义我们的`compiler`函数。这个函数会将所有部分连接起来。
 *
 *   1. input  => tokenizer   => tokens
 *   2. tokens => parser      => ast
 *   3. ast    => transformer => newAst
 *   4. newAst => generator   => output
 */

function compiler(input) {
  let tokens = tokenizer(input);
  let ast = parser(tokens);
  let newAst = transformer(ast);
  let output = codeGenerator(newAst);

  // 返回输出！
  return output;
}

/**
 * ============================================================================
 *                                   (๑˃̵ᴗ˂̵)و
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!YOU MADE IT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * ============================================================================
 */

// 这里我只是在导出函数……
module.exports = {
  tokenizer,
  parser,
  traverser,
  transformer,
  codeGenerator,
  compiler,
};
