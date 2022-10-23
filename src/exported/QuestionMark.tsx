import IconQuestionMarkFill0Wght100Grad0Opsz48 from '../components/QuestionMarkFill0Wght100Grad0Opsz48'
import IconQuestionMarkFill0Wght200Grad0Opsz48 from '../components/QuestionMarkFill0Wght200Grad0Opsz48'
import IconQuestionMarkFill0Wght300Grad0Opsz48 from '../components/QuestionMarkFill0Wght300Grad0Opsz48'
import IconQuestionMarkFill0Wght400Grad0Opsz48 from '../components/QuestionMarkFill0Wght400Grad0Opsz48'
import IconQuestionMarkFill0Wght500Grad0Opsz48 from '../components/QuestionMarkFill0Wght500Grad0Opsz48'
import IconQuestionMarkFill0Wght600Grad0Opsz48 from '../components/QuestionMarkFill0Wght600Grad0Opsz48'
import IconQuestionMarkFill0Wght700Grad0Opsz48 from '../components/QuestionMarkFill0Wght700Grad0Opsz48'
import IconQuestionMarkFill1Wght100Grad0Opsz48 from '../components/QuestionMarkFill1Wght100Grad0Opsz48'
import IconQuestionMarkFill1Wght200Grad0Opsz48 from '../components/QuestionMarkFill1Wght200Grad0Opsz48'
import IconQuestionMarkFill1Wght300Grad0Opsz48 from '../components/QuestionMarkFill1Wght300Grad0Opsz48'
import IconQuestionMarkFill1Wght400Grad0Opsz48 from '../components/QuestionMarkFill1Wght400Grad0Opsz48'
import IconQuestionMarkFill1Wght500Grad0Opsz48 from '../components/QuestionMarkFill1Wght500Grad0Opsz48'
import IconQuestionMarkFill1Wght600Grad0Opsz48 from '../components/QuestionMarkFill1Wght600Grad0Opsz48'
import IconQuestionMarkFill1Wght700Grad0Opsz48 from '../components/QuestionMarkFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconQuestionMark = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconQuestionMarkFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconQuestionMarkFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconQuestionMarkFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconQuestionMarkFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconQuestionMarkFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconQuestionMarkFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconQuestionMarkFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconQuestionMarkFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconQuestionMarkFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconQuestionMarkFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconQuestionMarkFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconQuestionMarkFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconQuestionMarkFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconQuestionMarkFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
