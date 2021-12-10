import { BigInt } from "@graphprotocol/graph-ts"
import {
  GP,
  Approval,
  OwnershipTransferred,
  Transfer
} from "../generated/GP/GP"
import {
  ExampleEntity,
  leaderEntity,
  statsEntity,
  transferEntity
} from "../generated/schema"

export function handleApproval(event: Approval): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleTransfer(event: Transfer): void { 
  let entity = leaderEntity.load(event.params.from.toHexString())
  if (!entity) {
    entity = new leaderEntity(event.params.from.toHexString())
    entity.minted = BigInt.fromI32(0)
  }
  entity.minted.plus(event.params.value);
  entity.save()

  let t_entity = new transferEntity(event.transaction.hash.toHex())
  t_entity.from = event.params.from.toHexString()
  t_entity.to = event.params.to.toHexString()
  t_entity.value = event.params.value
  t_entity.block = event.block.number
  t_entity.timestamp = event.block.timestamp
  t_entity.save()

  let s_entity = statsEntity.load('0')
  if (!s_entity) {
    s_entity = new statsEntity('0')
    s_entity.burned = BigInt.fromI32(0)
  }
  s_entity.burned.plus(event.params.value);
  s_entity.save()
}
