import IconQuizFill0Wght100Grad0Opsz48 from '../components/QuizFill0Wght100Grad0Opsz48'
import IconQuizFill0Wght200Grad0Opsz48 from '../components/QuizFill0Wght200Grad0Opsz48'
import IconQuizFill0Wght300Grad0Opsz48 from '../components/QuizFill0Wght300Grad0Opsz48'
import IconQuizFill0Wght400Grad0Opsz48 from '../components/QuizFill0Wght400Grad0Opsz48'
import IconQuizFill0Wght500Grad0Opsz48 from '../components/QuizFill0Wght500Grad0Opsz48'
import IconQuizFill0Wght600Grad0Opsz48 from '../components/QuizFill0Wght600Grad0Opsz48'
import IconQuizFill0Wght700Grad0Opsz48 from '../components/QuizFill0Wght700Grad0Opsz48'
import IconQuizFill1Wght100Grad0Opsz48 from '../components/QuizFill1Wght100Grad0Opsz48'
import IconQuizFill1Wght200Grad0Opsz48 from '../components/QuizFill1Wght200Grad0Opsz48'
import IconQuizFill1Wght300Grad0Opsz48 from '../components/QuizFill1Wght300Grad0Opsz48'
import IconQuizFill1Wght400Grad0Opsz48 from '../components/QuizFill1Wght400Grad0Opsz48'
import IconQuizFill1Wght500Grad0Opsz48 from '../components/QuizFill1Wght500Grad0Opsz48'
import IconQuizFill1Wght600Grad0Opsz48 from '../components/QuizFill1Wght600Grad0Opsz48'
import IconQuizFill1Wght700Grad0Opsz48 from '../components/QuizFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconQuiz = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconQuizFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconQuizFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconQuizFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconQuizFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconQuizFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconQuizFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconQuizFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconQuizFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconQuizFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconQuizFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconQuizFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconQuizFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconQuizFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconQuizFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
