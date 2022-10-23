import IconAddCommentFill0Wght100Grad0Opsz48 from '../components/AddCommentFill0Wght100Grad0Opsz48'
import IconAddCommentFill0Wght200Grad0Opsz48 from '../components/AddCommentFill0Wght200Grad0Opsz48'
import IconAddCommentFill0Wght300Grad0Opsz48 from '../components/AddCommentFill0Wght300Grad0Opsz48'
import IconAddCommentFill0Wght400Grad0Opsz48 from '../components/AddCommentFill0Wght400Grad0Opsz48'
import IconAddCommentFill0Wght500Grad0Opsz48 from '../components/AddCommentFill0Wght500Grad0Opsz48'
import IconAddCommentFill0Wght600Grad0Opsz48 from '../components/AddCommentFill0Wght600Grad0Opsz48'
import IconAddCommentFill0Wght700Grad0Opsz48 from '../components/AddCommentFill0Wght700Grad0Opsz48'
import IconAddCommentFill1Wght100Grad0Opsz48 from '../components/AddCommentFill1Wght100Grad0Opsz48'
import IconAddCommentFill1Wght200Grad0Opsz48 from '../components/AddCommentFill1Wght200Grad0Opsz48'
import IconAddCommentFill1Wght300Grad0Opsz48 from '../components/AddCommentFill1Wght300Grad0Opsz48'
import IconAddCommentFill1Wght400Grad0Opsz48 from '../components/AddCommentFill1Wght400Grad0Opsz48'
import IconAddCommentFill1Wght500Grad0Opsz48 from '../components/AddCommentFill1Wght500Grad0Opsz48'
import IconAddCommentFill1Wght600Grad0Opsz48 from '../components/AddCommentFill1Wght600Grad0Opsz48'
import IconAddCommentFill1Wght700Grad0Opsz48 from '../components/AddCommentFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAddComment = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAddCommentFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAddCommentFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAddCommentFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAddCommentFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAddCommentFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAddCommentFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAddCommentFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAddCommentFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAddCommentFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAddCommentFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAddCommentFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAddCommentFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAddCommentFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAddCommentFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
