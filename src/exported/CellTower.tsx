import IconCellTowerFill0Wght100Grad0Opsz48 from '../components/CellTowerFill0Wght100Grad0Opsz48'
import IconCellTowerFill0Wght200Grad0Opsz48 from '../components/CellTowerFill0Wght200Grad0Opsz48'
import IconCellTowerFill0Wght300Grad0Opsz48 from '../components/CellTowerFill0Wght300Grad0Opsz48'
import IconCellTowerFill0Wght400Grad0Opsz48 from '../components/CellTowerFill0Wght400Grad0Opsz48'
import IconCellTowerFill0Wght500Grad0Opsz48 from '../components/CellTowerFill0Wght500Grad0Opsz48'
import IconCellTowerFill0Wght600Grad0Opsz48 from '../components/CellTowerFill0Wght600Grad0Opsz48'
import IconCellTowerFill0Wght700Grad0Opsz48 from '../components/CellTowerFill0Wght700Grad0Opsz48'
import IconCellTowerFill1Wght100Grad0Opsz48 from '../components/CellTowerFill1Wght100Grad0Opsz48'
import IconCellTowerFill1Wght200Grad0Opsz48 from '../components/CellTowerFill1Wght200Grad0Opsz48'
import IconCellTowerFill1Wght300Grad0Opsz48 from '../components/CellTowerFill1Wght300Grad0Opsz48'
import IconCellTowerFill1Wght400Grad0Opsz48 from '../components/CellTowerFill1Wght400Grad0Opsz48'
import IconCellTowerFill1Wght500Grad0Opsz48 from '../components/CellTowerFill1Wght500Grad0Opsz48'
import IconCellTowerFill1Wght600Grad0Opsz48 from '../components/CellTowerFill1Wght600Grad0Opsz48'
import IconCellTowerFill1Wght700Grad0Opsz48 from '../components/CellTowerFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCellTower = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCellTowerFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCellTowerFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCellTowerFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCellTowerFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCellTowerFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCellTowerFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCellTowerFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCellTowerFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCellTowerFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCellTowerFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCellTowerFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCellTowerFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCellTowerFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCellTowerFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
