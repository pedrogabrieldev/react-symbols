import IconCommentsDisabledFill0Wght100Grad0Opsz48 from '../components/CommentsDisabledFill0Wght100Grad0Opsz48'
import IconCommentsDisabledFill0Wght200Grad0Opsz48 from '../components/CommentsDisabledFill0Wght200Grad0Opsz48'
import IconCommentsDisabledFill0Wght300Grad0Opsz48 from '../components/CommentsDisabledFill0Wght300Grad0Opsz48'
import IconCommentsDisabledFill0Wght400Grad0Opsz48 from '../components/CommentsDisabledFill0Wght400Grad0Opsz48'
import IconCommentsDisabledFill0Wght500Grad0Opsz48 from '../components/CommentsDisabledFill0Wght500Grad0Opsz48'
import IconCommentsDisabledFill0Wght600Grad0Opsz48 from '../components/CommentsDisabledFill0Wght600Grad0Opsz48'
import IconCommentsDisabledFill0Wght700Grad0Opsz48 from '../components/CommentsDisabledFill0Wght700Grad0Opsz48'
import IconCommentsDisabledFill1Wght100Grad0Opsz48 from '../components/CommentsDisabledFill1Wght100Grad0Opsz48'
import IconCommentsDisabledFill1Wght200Grad0Opsz48 from '../components/CommentsDisabledFill1Wght200Grad0Opsz48'
import IconCommentsDisabledFill1Wght300Grad0Opsz48 from '../components/CommentsDisabledFill1Wght300Grad0Opsz48'
import IconCommentsDisabledFill1Wght400Grad0Opsz48 from '../components/CommentsDisabledFill1Wght400Grad0Opsz48'
import IconCommentsDisabledFill1Wght500Grad0Opsz48 from '../components/CommentsDisabledFill1Wght500Grad0Opsz48'
import IconCommentsDisabledFill1Wght600Grad0Opsz48 from '../components/CommentsDisabledFill1Wght600Grad0Opsz48'
import IconCommentsDisabledFill1Wght700Grad0Opsz48 from '../components/CommentsDisabledFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCommentsDisabled = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCommentsDisabledFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCommentsDisabledFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCommentsDisabledFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCommentsDisabledFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCommentsDisabledFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCommentsDisabledFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCommentsDisabledFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCommentsDisabledFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCommentsDisabledFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCommentsDisabledFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCommentsDisabledFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCommentsDisabledFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCommentsDisabledFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCommentsDisabledFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
