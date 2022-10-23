import IconCommentFill0Wght100Grad0Opsz48 from '../components/CommentFill0Wght100Grad0Opsz48'
import IconCommentFill0Wght200Grad0Opsz48 from '../components/CommentFill0Wght200Grad0Opsz48'
import IconCommentFill0Wght300Grad0Opsz48 from '../components/CommentFill0Wght300Grad0Opsz48'
import IconCommentFill0Wght400Grad0Opsz48 from '../components/CommentFill0Wght400Grad0Opsz48'
import IconCommentFill0Wght500Grad0Opsz48 from '../components/CommentFill0Wght500Grad0Opsz48'
import IconCommentFill0Wght600Grad0Opsz48 from '../components/CommentFill0Wght600Grad0Opsz48'
import IconCommentFill0Wght700Grad0Opsz48 from '../components/CommentFill0Wght700Grad0Opsz48'
import IconCommentFill1Wght100Grad0Opsz48 from '../components/CommentFill1Wght100Grad0Opsz48'
import IconCommentFill1Wght200Grad0Opsz48 from '../components/CommentFill1Wght200Grad0Opsz48'
import IconCommentFill1Wght300Grad0Opsz48 from '../components/CommentFill1Wght300Grad0Opsz48'
import IconCommentFill1Wght400Grad0Opsz48 from '../components/CommentFill1Wght400Grad0Opsz48'
import IconCommentFill1Wght500Grad0Opsz48 from '../components/CommentFill1Wght500Grad0Opsz48'
import IconCommentFill1Wght600Grad0Opsz48 from '../components/CommentFill1Wght600Grad0Opsz48'
import IconCommentFill1Wght700Grad0Opsz48 from '../components/CommentFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconComment = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCommentFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCommentFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCommentFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCommentFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCommentFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCommentFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCommentFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCommentFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCommentFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCommentFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCommentFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCommentFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCommentFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCommentFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
