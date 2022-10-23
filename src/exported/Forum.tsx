import IconForumFill0Wght100Grad0Opsz48 from '../components/ForumFill0Wght100Grad0Opsz48'
import IconForumFill0Wght200Grad0Opsz48 from '../components/ForumFill0Wght200Grad0Opsz48'
import IconForumFill0Wght300Grad0Opsz48 from '../components/ForumFill0Wght300Grad0Opsz48'
import IconForumFill0Wght400Grad0Opsz48 from '../components/ForumFill0Wght400Grad0Opsz48'
import IconForumFill0Wght500Grad0Opsz48 from '../components/ForumFill0Wght500Grad0Opsz48'
import IconForumFill0Wght600Grad0Opsz48 from '../components/ForumFill0Wght600Grad0Opsz48'
import IconForumFill0Wght700Grad0Opsz48 from '../components/ForumFill0Wght700Grad0Opsz48'
import IconForumFill1Wght100Grad0Opsz48 from '../components/ForumFill1Wght100Grad0Opsz48'
import IconForumFill1Wght200Grad0Opsz48 from '../components/ForumFill1Wght200Grad0Opsz48'
import IconForumFill1Wght300Grad0Opsz48 from '../components/ForumFill1Wght300Grad0Opsz48'
import IconForumFill1Wght400Grad0Opsz48 from '../components/ForumFill1Wght400Grad0Opsz48'
import IconForumFill1Wght500Grad0Opsz48 from '../components/ForumFill1Wght500Grad0Opsz48'
import IconForumFill1Wght600Grad0Opsz48 from '../components/ForumFill1Wght600Grad0Opsz48'
import IconForumFill1Wght700Grad0Opsz48 from '../components/ForumFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconForum = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconForumFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconForumFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconForumFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconForumFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconForumFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconForumFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconForumFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconForumFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconForumFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconForumFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconForumFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconForumFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconForumFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconForumFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
