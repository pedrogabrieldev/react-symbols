import IconFormatListBulletedAddFill0Wght100Grad0Opsz48 from '../components/FormatListBulletedAddFill0Wght100Grad0Opsz48'
import IconFormatListBulletedAddFill0Wght200Grad0Opsz48 from '../components/FormatListBulletedAddFill0Wght200Grad0Opsz48'
import IconFormatListBulletedAddFill0Wght300Grad0Opsz48 from '../components/FormatListBulletedAddFill0Wght300Grad0Opsz48'
import IconFormatListBulletedAddFill0Wght400Grad0Opsz48 from '../components/FormatListBulletedAddFill0Wght400Grad0Opsz48'
import IconFormatListBulletedAddFill0Wght500Grad0Opsz48 from '../components/FormatListBulletedAddFill0Wght500Grad0Opsz48'
import IconFormatListBulletedAddFill0Wght600Grad0Opsz48 from '../components/FormatListBulletedAddFill0Wght600Grad0Opsz48'
import IconFormatListBulletedAddFill0Wght700Grad0Opsz48 from '../components/FormatListBulletedAddFill0Wght700Grad0Opsz48'
import IconFormatListBulletedAddFill1Wght100Grad0Opsz48 from '../components/FormatListBulletedAddFill1Wght100Grad0Opsz48'
import IconFormatListBulletedAddFill1Wght200Grad0Opsz48 from '../components/FormatListBulletedAddFill1Wght200Grad0Opsz48'
import IconFormatListBulletedAddFill1Wght300Grad0Opsz48 from '../components/FormatListBulletedAddFill1Wght300Grad0Opsz48'
import IconFormatListBulletedAddFill1Wght400Grad0Opsz48 from '../components/FormatListBulletedAddFill1Wght400Grad0Opsz48'
import IconFormatListBulletedAddFill1Wght500Grad0Opsz48 from '../components/FormatListBulletedAddFill1Wght500Grad0Opsz48'
import IconFormatListBulletedAddFill1Wght600Grad0Opsz48 from '../components/FormatListBulletedAddFill1Wght600Grad0Opsz48'
import IconFormatListBulletedAddFill1Wght700Grad0Opsz48 from '../components/FormatListBulletedAddFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFormatListBulletedAdd = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFormatListBulletedAddFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFormatListBulletedAddFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFormatListBulletedAddFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFormatListBulletedAddFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFormatListBulletedAddFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFormatListBulletedAddFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFormatListBulletedAddFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFormatListBulletedAddFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFormatListBulletedAddFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFormatListBulletedAddFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFormatListBulletedAddFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFormatListBulletedAddFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFormatListBulletedAddFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFormatListBulletedAddFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
