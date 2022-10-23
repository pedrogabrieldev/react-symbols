import IconTransferWithinAStationFill0Wght100Grad0Opsz48 from '../components/TransferWithinAStationFill0Wght100Grad0Opsz48'
import IconTransferWithinAStationFill0Wght200Grad0Opsz48 from '../components/TransferWithinAStationFill0Wght200Grad0Opsz48'
import IconTransferWithinAStationFill0Wght300Grad0Opsz48 from '../components/TransferWithinAStationFill0Wght300Grad0Opsz48'
import IconTransferWithinAStationFill0Wght400Grad0Opsz48 from '../components/TransferWithinAStationFill0Wght400Grad0Opsz48'
import IconTransferWithinAStationFill0Wght500Grad0Opsz48 from '../components/TransferWithinAStationFill0Wght500Grad0Opsz48'
import IconTransferWithinAStationFill0Wght600Grad0Opsz48 from '../components/TransferWithinAStationFill0Wght600Grad0Opsz48'
import IconTransferWithinAStationFill0Wght700Grad0Opsz48 from '../components/TransferWithinAStationFill0Wght700Grad0Opsz48'
import IconTransferWithinAStationFill1Wght100Grad0Opsz48 from '../components/TransferWithinAStationFill1Wght100Grad0Opsz48'
import IconTransferWithinAStationFill1Wght200Grad0Opsz48 from '../components/TransferWithinAStationFill1Wght200Grad0Opsz48'
import IconTransferWithinAStationFill1Wght300Grad0Opsz48 from '../components/TransferWithinAStationFill1Wght300Grad0Opsz48'
import IconTransferWithinAStationFill1Wght400Grad0Opsz48 from '../components/TransferWithinAStationFill1Wght400Grad0Opsz48'
import IconTransferWithinAStationFill1Wght500Grad0Opsz48 from '../components/TransferWithinAStationFill1Wght500Grad0Opsz48'
import IconTransferWithinAStationFill1Wght600Grad0Opsz48 from '../components/TransferWithinAStationFill1Wght600Grad0Opsz48'
import IconTransferWithinAStationFill1Wght700Grad0Opsz48 from '../components/TransferWithinAStationFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTransferWithinAStation = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTransferWithinAStationFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTransferWithinAStationFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTransferWithinAStationFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTransferWithinAStationFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTransferWithinAStationFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTransferWithinAStationFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTransferWithinAStationFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTransferWithinAStationFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTransferWithinAStationFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTransferWithinAStationFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTransferWithinAStationFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTransferWithinAStationFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTransferWithinAStationFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTransferWithinAStationFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
