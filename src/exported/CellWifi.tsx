import IconCellWifiFill0Wght100Grad0Opsz48 from '../components/CellWifiFill0Wght100Grad0Opsz48'
import IconCellWifiFill0Wght200Grad0Opsz48 from '../components/CellWifiFill0Wght200Grad0Opsz48'
import IconCellWifiFill0Wght300Grad0Opsz48 from '../components/CellWifiFill0Wght300Grad0Opsz48'
import IconCellWifiFill0Wght400Grad0Opsz48 from '../components/CellWifiFill0Wght400Grad0Opsz48'
import IconCellWifiFill0Wght500Grad0Opsz48 from '../components/CellWifiFill0Wght500Grad0Opsz48'
import IconCellWifiFill0Wght600Grad0Opsz48 from '../components/CellWifiFill0Wght600Grad0Opsz48'
import IconCellWifiFill0Wght700Grad0Opsz48 from '../components/CellWifiFill0Wght700Grad0Opsz48'
import IconCellWifiFill1Wght100Grad0Opsz48 from '../components/CellWifiFill1Wght100Grad0Opsz48'
import IconCellWifiFill1Wght200Grad0Opsz48 from '../components/CellWifiFill1Wght200Grad0Opsz48'
import IconCellWifiFill1Wght300Grad0Opsz48 from '../components/CellWifiFill1Wght300Grad0Opsz48'
import IconCellWifiFill1Wght400Grad0Opsz48 from '../components/CellWifiFill1Wght400Grad0Opsz48'
import IconCellWifiFill1Wght500Grad0Opsz48 from '../components/CellWifiFill1Wght500Grad0Opsz48'
import IconCellWifiFill1Wght600Grad0Opsz48 from '../components/CellWifiFill1Wght600Grad0Opsz48'
import IconCellWifiFill1Wght700Grad0Opsz48 from '../components/CellWifiFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCellWifi = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCellWifiFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCellWifiFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCellWifiFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCellWifiFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCellWifiFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCellWifiFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCellWifiFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCellWifiFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCellWifiFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCellWifiFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCellWifiFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCellWifiFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCellWifiFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCellWifiFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
