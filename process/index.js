module.exports = async function(context, paymentFileMessage) {
  context.log('JavaScript ServiceBus topic trigger function processed message', paymentFileMessage)
  context.log('JavaScript processed blob \n Blob:', context.bindings.paymentFileBlob, '\n Blob Size:', context.bindings.paymentFileBlob.length, 'Bytes')
  context.log(context.bindings.paymentFileBlob)
}
