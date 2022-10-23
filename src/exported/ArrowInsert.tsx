import IconArrowInsertFill0Wght100Grad0Opsz48 from '../components/ArrowInsertFill0Wght100Grad0Opsz48'
import IconArrowInsertFill0Wght200Grad0Opsz48 from '../components/ArrowInsertFill0Wght200Grad0Opsz48'
import IconArrowInsertFill0Wght300Grad0Opsz48 from '../components/ArrowInsertFill0Wght300Grad0Opsz48'
import IconArrowInsertFill0Wght400Grad0Opsz48 from '../components/ArrowInsertFill0Wght400Grad0Opsz48'
import IconArrowInsertFill0Wght500Grad0Opsz48 from '../components/ArrowInsertFill0Wght500Grad0Opsz48'
import IconArrowInsertFill0Wght600Grad0Opsz48 from '../components/ArrowInsertFill0Wght600Grad0Opsz48'
import IconArrowInsertFill0Wght700Grad0Opsz48 from '../components/ArrowInsertFill0Wght700Grad0Opsz48'
import IconArrowInsertFill1Wght100Grad0Opsz48 from '../components/ArrowInsertFill1Wght100Grad0Opsz48'
import IconArrowInsertFill1Wght200Grad0Opsz48 from '../components/ArrowInsertFill1Wght200Grad0Opsz48'
import IconArrowInsertFill1Wght300Grad0Opsz48 from '../components/ArrowInsertFill1Wght300Grad0Opsz48'
import IconArrowInsertFill1Wght400Grad0Opsz48 from '../components/ArrowInsertFill1Wght400Grad0Opsz48'
import IconArrowInsertFill1Wght500Grad0Opsz48 from '../components/ArrowInsertFill1Wght500Grad0Opsz48'
import IconArrowInsertFill1Wght600Grad0Opsz48 from '../components/ArrowInsertFill1Wght600Grad0Opsz48'
import IconArrowInsertFill1Wght700Grad0Opsz48 from '../components/ArrowInsertFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconArrowInsert = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconArrowInsertFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconArrowInsertFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconArrowInsertFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconArrowInsertFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconArrowInsertFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconArrowInsertFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconArrowInsertFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconArrowInsertFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconArrowInsertFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconArrowInsertFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconArrowInsertFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconArrowInsertFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconArrowInsertFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconArrowInsertFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
